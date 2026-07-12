exports.handler = async function(event, context) {
  const API_URL = "https://backend4.3k-darts.com/2k-backend4/api/v1/frontend/event/20942/phase/0/round/0/table";

  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en",
        "Origin": "https://2k-dart-software.com",
        "Referer": "https://2k-dart-software.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36",
        "Mandant-Key": "2118",
        "Saison-Id": "136",
        "Mandant-Database": "5"
      }
    });

    if (!response.ok) throw new Error("API returned HTTP " + response.status);

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache, no-store"
      },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ error: err.message })
    };
  }
};
