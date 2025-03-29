const REPLY = [
    {text: `Reply from 77.85.11.60: `, speed: "instant"},
    {text: `Система не может найти указанный файл...`, newLine: false},
    {text: "&nbsp;"}
]

export async function GET(req) {
    console.log("[GET] NotFound: " + req.url)

    return new Response(
        JSON.stringify(REPLY),
        {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
            },
            status: 400,
        }
    );
}