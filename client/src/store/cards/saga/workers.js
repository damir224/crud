import { put, call } from 'redux-saga/effects';
import {
  fetchGetCards,
  fetchGetCardInfo,
  fetchAddCard,
  fetchUpdateCard,
  fetchDelCard,
  fetchLikeCard,
} from './asyncFunc.js';
import { getCardsAC, addCardAC, delCardAC, likeCardAC } from '../actions';

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
export function* getCardsWorker({ payload }) {
  try {
    const data = yield call(fetchGetCards, payload);
    // if (data.success) return yield put(getCardsAC(data.data));
    if (data.success) return yield put(getCardsAC(obj.data));
    throw data.errors;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
export function* getCardInfoWorker({ payload }) {
  try {
    const data = yield call(fetchGetCardInfo, payload);
    // if (data.success) return yield put(getCardsAC(data.data));
    // throw data.errors;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
export function* addCardWorker({ payload }) {
  try {
    const data = yield call(fetchAddCard, payload);
    if (data.success) return yield put(addCardAC(data.data));
    throw data.errors.content;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
export function* updateCardWorker({ payload }) {
  try {
    const data = yield call(fetchUpdateCard, payload);
    // if (data.success) return yield put(addCardAC(data.data));
    // throw data.errors.content;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
export function* delCardWorker({ payload }) {
  try {
    const data = yield call(fetchDelCard, payload);
    if (data.success) return yield put(delCardAC(payload.id));
    throw data.errors.content;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
export function* likeCardWorker({ payload }) {
  try {
    const data = yield call(fetchLikeCard, payload);
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
