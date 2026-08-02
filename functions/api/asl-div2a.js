export async function onRequest(context) {
  const LIGA = "asl-div2a";
  const API_URL = "https://backend4.3k-darts.com/2k-backend4/api/v1/frontend/event/26538/phase/0/round/0/table";
  const SB_URL = "https://rqqytfrcnavexinmgbhu.supabase.co";
  const SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxcXl0ZnJjbmF2ZXhpbm1nYmh1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NTQ3MTkxMSwiZXhwIjoyMTAxMDQ3OTExfQ.n1PfrSVAdiuI_vpkvmBBemA8AbVg4kUWmQQ-YwWb7pU";
  const CORS = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" };

  try {
    // 1. Check Supabase cache
    const cacheRes = await fetch(
      SB_URL + "/rest/v1/classificacoes?liga=eq." + LIGA + "&select=dados,atualizado_em",
      { headers: { "apikey": SB_KEY, "Authorization": "Bearer " + SB_KEY } }
    );
    const cacheData = await cacheRes.json();

    if (cacheData && cacheData.length > 0) {
      const cached = cacheData[0];
      const updatedAt = new Date(cached.atualizado_em);
      const now = new Date();

      // Check if updated today (same calendar day in UTC)
      const sameDay =
        updatedAt.getUTCFullYear() === now.getUTCFullYear() &&
        updatedAt.getUTCMonth()    === now.getUTCMonth()    &&
        updatedAt.getUTCDate()     === now.getUTCDate();

      if (sameDay) {
        // Return cached data
        return new Response(JSON.stringify(cached.dados), { status: 200, headers: CORS });
      }
    }

    // 2. Fetch fresh data from 2K/3K API
    const apiRes = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en",
        "Origin": "https://portal.3k-darts.com",
        "Referer": "https://portal.3k-darts.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36",
        "Mandant-Key": "3060",
        "Saison-Id": "136",
        "Mandant-Database": "5"
      }
    });

    if (!apiRes.ok) throw new Error("API HTTP " + apiRes.status);
    const freshData = await apiRes.json();

    // 3. Save to Supabase (upsert by liga)
    await fetch(SB_URL + "/rest/v1/classificacoes", {
      method: "POST",
      headers: {
        "apikey": SB_KEY,
        "Authorization": "Bearer " + SB_KEY,
        "Content-Type": "application/json",
        "Prefer": "resolution=merge-duplicates"
      },
      body: JSON.stringify({
        liga: LIGA,
        dados: freshData,
        atualizado_em: new Date().toISOString()
      })
    });

    return new Response(JSON.stringify(freshData), { status: 200, headers: CORS });

  } catch(err) {
    // On error, try to return cached data even if outdated
    try {
      const fallbackRes = await fetch(
        SB_URL + "/rest/v1/classificacoes?liga=eq." + LIGA + "&select=dados",
        { headers: { "apikey": SB_KEY, "Authorization": "Bearer " + SB_KEY } }
      );
      const fallback = await fallbackRes.json();
      if (fallback && fallback.length > 0) {
        return new Response(JSON.stringify(fallback[0].dados), { status: 200, headers: CORS });
      }
    } catch(_) {}

    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: CORS });
  }
}
