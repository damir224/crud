export async function fetchGetCards(token) {
  const url =
    'http://rest-api.noveogroup.com/api/v1/posts?liked=true&order_by=id&sort=asc&page=1&per_page=8';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Application-Key': 'L4X9QeKoYrYh6n1Wh9P7yxyjpsFnLSItek7bLTE5',
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
}
export async function fetchGetCardInfo(token, id) {
  const url = `http://rest-api.noveogroup.com/api/v1/posts/${id}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Application-Key': 'L4X9QeKoYrYh6n1Wh9P7yxyjpsFnLSItek7bLTE5',
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
}
export async function fetchAddCard({ title, description, token }) {
  const url = `http://rest-api.noveogroup.com/api/v1/posts`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ title, content: description }),
    headers: {
      'Content-Type': 'application/json',
      'X-Application-Key': 'L4X9QeKoYrYh6n1Wh9P7yxyjpsFnLSItek7bLTE5',
      Authorization: `Bearer ${token}`,
      // Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI3NjQsImlzcyI6Imh0dHA6Ly9yZXN0LWFwaS5ub3Zlb2dyb3VwLmNvbS9hcGkvdjEvbG9naW4iLCJpYXQiOjE2MTgxNjU4MzMsImV4cCI6MTYyMDc1NzgzMywibmJmIjoxNjE4MTY1ODMzLCJqdGkiOiJFcG05cUc4b1ZPSUZ0YVZLIn0.KprDE4WUih91RSt1Q5Y8zQO0Wu0oSeAybRWt4AgU4eA`,
    },
  });
  return await response.json();
}
export async function fetchUpdateCard({ title, description, id, token }) {
  const url = ` http://rest-api.noveogroup.com/api/v1/posts/${id}`;
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify({ title, content: description }),
    headers: {
      'Content-Type': 'application/json',
      'X-Application-Key': 'L4X9QeKoYrYh6n1Wh9P7yxyjpsFnLSItek7bLTE5',
      Authorization: `Bearer ${token}`,
      // Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI3NjQsImlzcyI6Imh0dHA6Ly9yZXN0LWFwaS5ub3Zlb2dyb3VwLmNvbS9hcGkvdjEvbG9naW4iLCJpYXQiOjE2MTgxNjU4MzMsImV4cCI6MTYyMDc1NzgzMywibmJmIjoxNjE4MTY1ODMzLCJqdGkiOiJFcG05cUc4b1ZPSUZ0YVZLIn0.KprDE4WUih91RSt1Q5Y8zQO0Wu0oSeAybRWt4AgU4eA`,
    },
  });
  return await response.json();
}
export async function fetchDelCard({ id, token }) {
  const url = `http://rest-api.noveogroup.com/api/v1/posts/${id}`;
  console.log(`token`, token);
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'X-Application-Key': 'L4X9QeKoYrYh6n1Wh9P7yxyjpsFnLSItek7bLTE5',
      // Authorization: `Bearer ${token}`,
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI3NjQsImlzcyI6Imh0dHA6Ly9yZXN0LWFwaS5ub3Zlb2dyb3VwLmNvbS9hcGkvdjEvbG9naW4iLCJpYXQiOjE2MTgxNjU4MzMsImV4cCI6MTYyMDc1NzgzMywibmJmIjoxNjE4MTY1ODMzLCJqdGkiOiJFcG05cUc4b1ZPSUZ0YVZLIn0.KprDE4WUih91RSt1Q5Y8zQO0Wu0oSeAybRWt4AgU4eA`,
    },
  });
  return await response.json();
}
export async function fetchLikeCard({ id, token }) {
  const url = `http://rest-api.noveogroup.com/api/v1/posts/${id}/like`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Application-Key': 'L4X9QeKoYrYh6n1Wh9P7yxyjpsFnLSItek7bLTE5',
      // Authorization: `Bearer ${token}`,
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI3NjQsImlzcyI6Imh0dHA6Ly9yZXN0LWFwaS5ub3Zlb2dyb3VwLmNvbS9hcGkvdjEvbG9naW4iLCJpYXQiOjE2MTgxNjU4MzMsImV4cCI6MTYyMDc1NzgzMywibmJmIjoxNjE4MTY1ODMzLCJqdGkiOiJFcG05cUc4b1ZPSUZ0YVZLIn0.KprDE4WUih91RSt1Q5Y8zQO0Wu0oSeAybRWt4AgU4eA`,
    },
  });
  return await response.json();
}
