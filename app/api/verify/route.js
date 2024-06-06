export async function POST(request) {

  const bearerHeader = request.headers.get('Authorization');
  if (!bearerHeader) {
    throw new Error('Missing Authorization header');
  }

  const token = bearerHeader.split(' ')[1];
  try {
    const resp = await fetch(`http://localhost:4000/user/verify`, {
      method: 'POST',
      headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log(resp)

    if (resp.ok) {
      const response = await resp.json();
      console.log(response, "IIIIIIIIIIIIIII");

      return new Response(JSON.stringify({data:response}), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      });
    } else {
      throw new Error('Failed to fetch data');
    }

  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle error response
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
