const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user.js');
const isAuth = require('../middlewares/isAuth.js');

const router = express.Router();

function serializeUser(user) {
  return {
    id: user.id,
    name: user.name,
  };
}

router.route('/signup').post(async (req, res) => {
  const { password, name, passwordRepeted } = req.body;
  console.log('req.body', req.body);
  try {
    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      name,
      password: hashedPassword,
    });
    const token = jwt.sign({ user: newUser.id }, process.env.JWT_SECRET);
    console.log('token', token);
    req.session.user = serializeUser(user);
  } catch (err) {
    console.error('Err message:', err.message);
    console.error('Err code', err.code);
    return failAuth(res, err.code);
  }
  // res.cookie("sid", 'dkfjhksfhskfj') // делает за вас express session библиотека
  return res.json({ session: true, message: 'signUp successfully' });
});

router
  .route('/login')
  // Страница аутентификации пользователя
  // .get((req, res) => res.render('signin', { isSignin: true }))
  // Аутентификация пользователя
  .post(async (req, res) => {
    const { name, password } = req.body;
    try {
      // Пытаемся сначала найти пользователя в БД
      const user = await User.findOne({ name }).exec();
      if (!user) return failAuth(res, 'неверное имя/пароль');
      // Сравниваем хэш в БД с хэшем введённого пароля
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) return failAuth(res, 'неверное имя/пароль');
      req.session.user = serializeUser(user);
    } catch (err) {
      console.error('Err message:', err.message);
      console.error('Err code', err.code);
      return failAuth(res, err.message);
    }
    return res
      .cookie('cookieName', 'cookieValue')
      .json({ session: true, message: 'login successfully' });
  });

router.get('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.clearCookie('sid');
    return res.json({ session: false, message: 'logout successfully' });
  });
});

router.get('/check', isAuth, (req, res) => {
  res.json({ session: true, message: 'authorized' });
});

module.exports = router;
