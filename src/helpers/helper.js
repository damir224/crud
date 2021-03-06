// import dotenv from 'dotenv';
// new HtmlWebpackPlugin(
//   Object.assign(
//     {},
//     {
//       inject: true,
//       template: paths.appHtml,
//     },
//     isEnvProduction
//       ? {
//           minify: {
//             removeComments: true,
//             collapseWhitespace: true,
//             removeRedundantAttributes: true,
//             useShortDoctype: true,
//             removeEmptyAttributes: true,
//             removeStyleLinkTypeAttributes: true,
//             keepClosingSlash: true,
//             minifyJS: true,
//             minifyCSS: true,
//             minifyURLs: true,
//           },
//         }
//       : undefined
//   )
// ),
export default async function uniFetch(...args) {
  // dotenv.config();
  const arr = ['token', 'url', 'method', 'body'];
  let response = '';
  const fetchObj = {
    headers: {
      'Content-Type': 'application/json',
      'X-Application-Key': process.env.REACT_APP_KEY
    }
  };
  args.map((e, i) => {
    if (e === null || e === '' || i === 1) {
      return null;
    }
    if (i === 0) {
      fetchObj.headers.Authorization = `Bearer ${e}`;
      return fetchObj.headers.Authorization;
    }
    if (i === 3) {
      fetchObj.body = JSON.stringify(e);
      return fetchObj.body;
    }
    fetchObj[arr[i]] = e;
    return fetchObj[arr[i]];
  });
  response = await fetch(args[1], fetchObj);
  const returnVal = await response.json();
  return returnVal;
}
