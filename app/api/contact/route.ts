export async function POST(request: Request) {
  try {
    
    const body = await request.json()

    console.log(body)

    return Response.json(body);
    
  } catch (error) {
    return Response.json({ error: "Failed to retrieve body of request." });
  }
}