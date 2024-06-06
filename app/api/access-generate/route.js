

const BASE_URL="http://localhost:4000"
export async function POST(request) {
    const searchParams = request.nextUrl.searchParams;
    const uniqueCode = searchParams.get('uniqueCode');


    const resp = await fetch(`${BASE_URL}/user/access-generate/${uniqueCode}`, {
      method: 'POST',
    });
    if(!resp.ok) {
      throw new Error("Failed to Fetch Data");
    } else {
      const response = await resp.json();
      return Response.json(response);
    }

  }