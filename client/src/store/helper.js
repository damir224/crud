export default async function uniFetch(...args) {
  const arr = ['token', 'url', 'method', 'body'];
  let response;
  const fetchObj = {
    headers: {
      'Content-Type': 'application/json',
      'X-Application-Key': 'L4X9QeKoYrYh6n1Wh9P7yxyjpsFnLSItek7bLTE5',
    },
  };
  args.map((e, i) => {
    if (e === null || e === '' || i === 1) {
      return null;
    } else {
      if (i === 0) {
        return (fetchObj.headers.Authorization = `Bearer ${e}`);
      }
      if (i === 3) {
        return (fetchObj.body = JSON.stringify(e));
      } else {
        return (fetchObj[arr[i]] = e);
      }
    }
  });
  response = await fetch(args[1], fetchObj);
  return await response.json();
}
