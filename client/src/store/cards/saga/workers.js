import { put, call } from 'redux-saga/effects';

import {
  getCardsAC,
  addCardAC,
  delCardAC,
  likeCardAC,
  updateCardAC,
} from '../actions';

const obj = {
  data: {
    posts: [
      {
        id: 1,
        title: 'First title',
        content: 'First content',
        created_at: {
          date: '2017-03-07 02:55:47.000000',
          timezone_type: 3,
          timezone: 'UTC',
        },
        updated_at: {
          date: '2017-03-07 02:55:47.000000',
          timezone_type: 3,
          timezone: 'UTC',
        },
        liked: false,
        total_likes: 0,
        user: {
          id: 1,
          name: 'Admin',
          email: 'admin@noveogroup.com',
          role: 'admin',
          created_at: {
            date: '2017-03-07 02:55:46.000000',
            timezone_type: 3,
            timezone: 'UTC',
          },
          updated_at: {
            date: '2017-03-07 02:55:46.000000',
            timezone_type: 3,
            timezone: 'UTC',
          },
        },
      },
      {
        id: 2,
        title: 'Second title',
        content: 'Second content',
        created_at: {
          date: '2017-03-07 02:55:47.000000',
          timezone_type: 3,
          timezone: 'UTC',
        },
        updated_at: {
          date: '2017-03-07 02:55:47.000000',
          timezone_type: 3,
          timezone: 'UTC',
        },
        liked: true,
        total_likes: 1,
        user: {
          id: 1,
          name: 'Admin',
          email: 'admin@noveogroup.com',
          role: 'admin',
          created_at: {
            date: '2017-03-07 02:55:46.000000',
            timezone_type: 3,
            timezone: 'UTC',
          },
          updated_at: {
            date: '2017-03-07 02:55:46.000000',
            timezone_type: 3,
            timezone: 'UTC',
          },
        },
      },
      {
        id: 3,
        title: 'Post title',
        content: 'Post content',
        created_at: {
          date: '2017-03-07 03:31:06.000000',
          timezone_type: 3,
          timezone: 'UTC',
        },
        updated_at: {
          date: '2017-03-07 03:31:06.000000',
          timezone_type: 3,
          timezone: 'UTC',
        },
        liked: false,
        total_likes: 0,
        user: {
          id: 1,
          name: 'Admin',
          email: 'admin@noveogroup.com',
          role: 'admin',
          created_at: {
            date: '2017-03-07 02:55:46.000000',
            timezone_type: 3,
            timezone: 'UTC',
          },
          updated_at: {
            date: '2017-03-07 02:55:46.000000',
            timezone_type: 3,
            timezone: 'UTC',
          },
        },
      },
      {
        id: 4,
        title: 'Post title',
        content: 'Post content',
        created_at: {
          date: '2017-03-07 03:38:59.000000',
          timezone_type: 3,
          timezone: 'UTC',
        },
        updated_at: {
          date: '2017-03-07 03:38:59.000000',
          timezone_type: 3,
          timezone: 'UTC',
        },
        liked: false,
        total_likes: 0,
        user: {
          id: 1,
          name: 'Admin',
          email: 'admin@noveogroup.com',
          role: 'admin',
          created_at: {
            date: '2017-03-07 02:55:46.000000',
            timezone_type: 3,
            timezone: 'UTC',
          },
          updated_at: {
            date: '2017-03-07 02:55:46.000000',
            timezone_type: 3,
            timezone: 'UTC',
          },
        },
      },
    ],
    meta: {
      total: 4,
      per_page: 15,
      current_page: 1,
      last_page: 1,
      from: 1,
      to: 4,
    },
  },
  errors: [],
  success: true,
};

async function uniFetch(token, url, method, payload = null) {
  let response;
  if (method === 'GET') {
    console.log('HERE!');
    response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'X-Application-Key': 'L4X9QeKoYrYh6n1Wh9P7yxyjpsFnLSItek7bLTE5',
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    response = await fetch(url, {
      method: method,
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        'X-Application-Key': 'L4X9QeKoYrYh6n1Wh9P7yxyjpsFnLSItek7bLTE5',
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return await response.json();
}

export function* getCardsWorker({ payload }) {
  console.log(payload);
  const url =
    'http://rest-api.noveogroup.com/api/v1/posts?liked=true&order_by=id&sort=asc&page=1&per_page=8';
  try {
    const data = yield call(uniFetch, payload, url, 'GET');
    // const data = yield call(fetchGetCards, payload);
    if (data.success) return yield put(getCardsAC(data.data)); // prod
    // if (data.success) return yield put(getCardsAC(obj.data)); // temp
    throw data.errors;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

export function* addCardWorker({ payload }) {
  const url = `http://rest-api.noveogroup.com/api/v1/posts`;
  try {
    const data = yield call(uniFetch, payload.token, url, 'POST', {
      title: payload.title,
      content: payload.description,
    });
    // const data = yield call(fetchAddCard, payload);
    if (data.success) return yield put(addCardAC(data.data));
    throw data.errors.content;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
export function* updateCardWorker({ payload }) {
  const url = `http://rest-api.noveogroup.com/api/v1/posts/${payload.id}`;
  try {
    const data = yield call(uniFetch, payload.token, url, 'PUT', {
      title: payload.title,
      content: payload.description,
    });
    // const data = yield call(fetchUpdateCard, payload);
    if (data.success) return yield put(updateCardAC(data.data));
    throw data.errors;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
export function* delCardWorker({ payload }) {
  const url = `http://rest-api.noveogroup.com/api/v1/posts/${payload.id}`;
  try {
    const data = yield call(uniFetch, payload.token, url, 'PUT', {
      title: payload.title,
      content: payload.description,
    });
    // const data = yield call(fetchDelCard, payload);
    if (data.success) return yield put(delCardAC(payload.id));
    throw data.errors.content;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
export function* likeCardWorker({ payload }) {
  const url = `http://rest-api.noveogroup.com/api/v1/posts/${payload.id}/like`;
  try {
    const data = yield call(uniFetch, payload.token, url, 'POST', payload);
    // const data = yield call(fetchLikeCard, payload);
    if (data.success) return yield put(likeCardAC(data.data));
    throw data.errors.content;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

// let obj = {
//   data: {
//     posts: [
//       {
//         id: 1,
//         title: 'First title',
//         content: 'First content',
//         created_at: {
//           date: '2017-03-07 02:55:47.000000',
//           timezone_type: 3,
//           timezone: 'UTC',
//         },
//         updated_at: {
//           date: '2017-03-07 02:55:47.000000',
//           timezone_type: 3,
//           timezone: 'UTC',
//         },
//         liked: false,
//         total_likes: 0,
//         user: {
//           id: 1,
//           name: 'Admin',
//           email: 'admin@noveogroup.com',
//           role: 'admin',
//           created_at: {
//             date: '2017-03-07 02:55:46.000000',
//             timezone_type: 3,
//             timezone: 'UTC',
//           },
//           updated_at: {
//             date: '2017-03-07 02:55:46.000000',
//             timezone_type: 3,
//             timezone: 'UTC',
//           },
//         },
//       },
//       {
//         id: 2,
//         title: 'Second title',
//         content: 'Second content',
//         created_at: {
//           date: '2017-03-07 02:55:47.000000',
//           timezone_type: 3,
//           timezone: 'UTC',
//         },
//         updated_at: {
//           date: '2017-03-07 02:55:47.000000',
//           timezone_type: 3,
//           timezone: 'UTC',
//         },
//         liked: true,
//         total_likes: 1,
//         user: {
//           id: 1,
//           name: 'Admin',
//           email: 'admin@noveogroup.com',
//           role: 'admin',
//           created_at: {
//             date: '2017-03-07 02:55:46.000000',
//             timezone_type: 3,
//             timezone: 'UTC',
//           },
//           updated_at: {
//             date: '2017-03-07 02:55:46.000000',
//             timezone_type: 3,
//             timezone: 'UTC',
//           },
//         },
//       },
//       {
//         id: 3,
//         title: 'Post title',
//         content: 'Post content',
//         created_at: {
//           date: '2017-03-07 03:31:06.000000',
//           timezone_type: 3,
//           timezone: 'UTC',
//         },
//         updated_at: {
//           date: '2017-03-07 03:31:06.000000',
//           timezone_type: 3,
//           timezone: 'UTC',
//         },
//         liked: false,
//         total_likes: 0,
//         user: {
//           id: 1,
//           name: 'Admin',
//           email: 'admin@noveogroup.com',
//           role: 'admin',
//           created_at: {
//             date: '2017-03-07 02:55:46.000000',
//             timezone_type: 3,
//             timezone: 'UTC',
//           },
//           updated_at: {
//             date: '2017-03-07 02:55:46.000000',
//             timezone_type: 3,
//             timezone: 'UTC',
//           },
//         },
//       },
//       {
//         id: 4,
//         title: 'Post title',
//         content: 'Post content',
//         created_at: {
//           date: '2017-03-07 03:38:59.000000',
//           timezone_type: 3,
//           timezone: 'UTC',
//         },
//         updated_at: {
//           date: '2017-03-07 03:38:59.000000',
//           timezone_type: 3,
//           timezone: 'UTC',
//         },
//         liked: false,
//         total_likes: 0,
//         user: {
//           id: 1,
//           name: 'Admin',
//           email: 'admin@noveogroup.com',
//           role: 'admin',
//           created_at: {
//             date: '2017-03-07 02:55:46.000000',
//             timezone_type: 3,
//             timezone: 'UTC',
//           },
//           updated_at: {
//             date: '2017-03-07 02:55:46.000000',
//             timezone_type: 3,
//             timezone: 'UTC',
//           },
//         },
//       },
//     ],
//     meta: {
//       total: 4,
//       per_page: 15,
//       current_page: 1,
//       last_page: 1,
//       from: 1,
//       to: 4,
//     },
//   },
//   errors: [],
//   success: true,
// };
