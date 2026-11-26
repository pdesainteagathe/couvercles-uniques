-- Questionnaire « Les couvercles uniques »
-- À coller dans Supabase > SQL Editor > New query, puis Run.
--
-- Principe : n'importe quel visiteur peut AJOUTER une réponse, personne ne peut
-- en LIRE une seule par l'API publique. La page ne lit que des totaux, via la
-- fonction survey_stats(). Les réponses sont codées par indice d'option (0, 1, 2...),
-- dans l'ordre des options de app.js, identique en français et en anglais.

create table if not exists public.survey_responses (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  lang        text     not null check (lang in ('fr', 'en')),
  owned       smallint not null check (owned   between 0 and 4),  -- boîtes possédées
  nolid       smallint not null check (nolid   between 0 and 4),  -- boîtes sans couvercle qui va
  orphan      smallint not null check (orphan  between 0 and 4),  -- couvercles sans boîte
  thrown      smallint not null check (thrown  between 0 and 5),  -- jetées en 12 mois (5 = ne sait pas)
  shape       smallint not null check (shape   between 0 and 3),  -- rect., carrée, ronde, peu importe
  support     smallint not null check (support between 0 and 3),  -- oui, plutôt oui, plutôt non, non
  country     smallint not null check (country between 0 and 2)   -- France, autre UE, hors UE
);

alter table public.survey_responses enable row level security;

-- Insertion autorisée aux visiteurs anonymes ; aucune politique de lecture.
drop policy if exists "anon can insert" on public.survey_responses;
create policy "anon can insert" on public.survey_responses
  for insert to anon with check (true);

revoke all on public.survey_responses from anon, authenticated;
grant insert (lang, owned, nolid, orphan, thrown, shape, support, country)
  on public.survey_responses to anon;

-- Totaux par question et par option, sans aucune ligne individuelle.
create or replace function public.survey_stats()
returns json
language sql
stable
security definer
set search_path = public
as $$
  select json_build_object(
    'n', (select count(*) from survey_responses),
    'owned',   (select coalesce(json_object_agg(owned,   c), '{}') from (select owned,   count(*) c from survey_responses group by owned)   s),
    'nolid',   (select coalesce(json_object_agg(nolid,   c), '{}') from (select nolid,   count(*) c from survey_responses group by nolid)   s),
    'orphan',  (select coalesce(json_object_agg(orphan,  c), '{}') from (select orphan,  count(*) c from survey_responses group by orphan)  s),
    'thrown',  (select coalesce(json_object_agg(thrown,  c), '{}') from (select thrown,  count(*) c from survey_responses group by thrown)  s),
    'shape',   (select coalesce(json_object_agg(shape,   c), '{}') from (select shape,   count(*) c from survey_responses group by shape)   s),
    'support', (select coalesce(json_object_agg(support, c), '{}') from (select support, count(*) c from survey_responses group by support) s),
    'country', (select coalesce(json_object_agg(country, c), '{}') from (select country, count(*) c from survey_responses group by country) s)
  );
$$;

revoke all on function public.survey_stats() from public;
grant execute on function public.survey_stats() to anon;

-- Messages « Nous contacter » (ajouté le 2026-11-26)
-- Même principe : les visiteurs peuvent AJOUTER un message, personne ne peut en LIRE
-- par l'API publique. Les messages se lisent dans Supabase > Table Editor.
create table if not exists public.contact_messages (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  lang        text not null check (lang in ('fr', 'en')),
  message     text not null check (char_length(btrim(message)) between 1 and 2000),
  email       text check (email is null or (char_length(email) <= 254 and email ~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'))
);

alter table public.contact_messages enable row level security;

drop policy if exists "anon can insert" on public.contact_messages;
create policy "anon can insert" on public.contact_messages
  for insert to anon with check (true);

revoke all on public.contact_messages from anon, authenticated;
grant insert (lang, message, email) on public.contact_messages to anon;
