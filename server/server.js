const express = require('express');
const session = require('express-session');
const cors = require('cors');

const authRoutes = require('./src/routes/authRoutes.js');
const sessionStore = require('./src/models/db.js');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT ?? 5000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    name: 'sid', // название куки
    // ключ для шифрования cookies // require('crypto').randomBytes(10).toString('hex')
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false, // Если true, сохраняет сессию, даже если она не поменялась
    saveUninitialized: false, // Если false, куки появляются только при установке req.session
    cookie: {
      // В продакшне нужно "secure: true" для HTTPS
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 365, // время жизни cookies, ms
    },
  })
);
// записывает имя пользователя в переменную res.locals.username, если он авторизован в системе
app.use(userMiddleware);
app.use('/todo', toDoRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}...`);
});
