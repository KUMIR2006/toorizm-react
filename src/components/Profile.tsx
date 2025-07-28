import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectAuth } from '../redux/auth/selectors';
import { changeAuthStatus } from '../redux/auth/slice';
import { setNavId } from '../redux/navigation/slice';

const Sign: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authEmail, authPassword, authName, authSurname } = useSelector(selectAuth);

  const OnClickUnauth = async () => {
    if (window.confirm('Вы точно хотите выйти из аккаунта?')) {
      await dispatch(changeAuthStatus());
      toast('Вы вышли из аккаунта');
      navigate('/auth/sign');
      dispatch(setNavId(4));
    }
  };
  return (
    <div className="sign-container">
      <h2>Профиль</h2>
      <div className="auth-form">
        <div className="form-group">
          <label htmlFor="firstName">Имя</label>
          <input type="text" id="firstName" value={authName} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Фамилия</label>
          <input type="text" id="lastName" value={authSurname} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="email">Электронная почта</label>
          <input type="email" id="email" value={authEmail} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input type="password" id="password" value={authPassword} disabled />
        </div>
        <button onClick={() => OnClickUnauth()} className="auth-button">
          Выйти
        </button>
      </div>
      <div className="auth-footer">
        {/* <p>
          <Link to="/auth/login">У вас уже есть аккаунт? Войти!</Link>
        </p> */}
      </div>
    </div>
  );
};

export default Sign;
