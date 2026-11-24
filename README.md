# Common lids

Campaign page for a citizen proposal: a few common formats for household food storage containers in the EU, so that any lid of a format fits any box of that format, whatever the brand or material. Height stays free. The model is the EU common charger (Directive (EU) 2022/2380) and the Gastronorm catering standard (EN 631).

The page is static (HTML, CSS, JavaScript, no build step) and bilingual (French, English). The survey stores anonymous answers in Supabase; `supabase.sql` creates the table, its insert-only access rule and the `survey_stats()` function that the page reads.

`docs/` holds the draft delegated act (French and English) and the draft European resolution (French).
