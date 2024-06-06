

const BASE_URL="http://localhost:4000"
export async function POST(request) {
    const data = await request.json();
    const firstName = data.firstName;
    const lastName = data.lastName;
    const email = data.email;
    const factoryAccess = data.factoryAccess;
    var loginHeaders = new Headers();
    loginHeaders.append('Content-Type', 'application/json');
    loginHeaders.append('Accept', '*/*');
    const resp = await fetch(`${BASE_URL}/user/request-access`, {
      method: 'POST',
      headers: loginHeaders,
      body: JSON.stringify({ firstName: firstName, lastName: lastName , email: email ,factoryAccess:factoryAccess}),
      redirect: 'follow'
    });
    if(!resp.ok) {
      throw new Error("Failed to Fetch Data");
    } else {
      const response = await resp.json();
      return Response.json({ data: response } );
    }

  }