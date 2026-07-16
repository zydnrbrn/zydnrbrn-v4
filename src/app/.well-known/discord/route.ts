export async function GET() {
    return new Response("dh=ce645907fcdde02f3fa70b225674203d633f48ad", {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}
