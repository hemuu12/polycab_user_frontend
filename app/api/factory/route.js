

const BASE_URL="http://localhost:4000"
export async function GET(request) {

    const resp = await fetch(`https://polycab-backend.vercel.app/data/`, {
      method: 'GET',
    });
    if(!resp.ok) {
      throw new Error("Failed to Fetch Data");
    } else {
      const response = await resp.json();
      return Response.json(response);
    }

  }