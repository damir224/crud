export async function signupFetch({ obj }) {
  const url = 'http://rest-api.noveogroup.com/api/v1/register';
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json',
      'X-Application-Key': 'L4X9QeKoYrYh6n1Wh9P7yxyjpsFnLSItek7bLTE5',
    },
  });
  return await response.json();
}
export async function loginFetch(userObj) {
  const url = 'http://rest-api.noveogroup.com/api/v1/login';
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(userObj),
    headers: {
      'Content-Type': 'application/json',
      'X-Application-Key': 'L4X9QeKoYrYh6n1Wh9P7yxyjpsFnLSItek7bLTE5',
    },
  });
  return await response.json();
}
export async function userInfoFetch({ data }) {
  const url = 'http://rest-api.noveogroup.com/api/v1/user';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Application-Key': 'L4X9QeKoYrYh6n1Wh9P7yxyjpsFnLSItek7bLTE5',
      Authorization: `Bearer ${data.token}`,
    },
  });
  return await response.json();
}
