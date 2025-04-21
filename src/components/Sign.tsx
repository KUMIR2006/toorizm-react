import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import {
  changeAuthStatus,
  changeEmail,
  changeName,
  changePassword,
  changeSurname,
} from '../redux/auth/slice';

const Sign: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeAuthSlice = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(
      changeEmail(email),
      changePassword(password),
      changeName(firstName),
      changeSurname(lastName),
      changeAuthStatus(),
    );
    toast.success('Вы успешно зарегистрированы');
    navigate('/auth/profile');
  };

  return (
    <div className="sign-container">
      <h2>Регистрация</h2>
      <form onSubmit={changeAuthSlice} className="auth-form">
        <div className="form-group">
          <label htmlFor="firstName">Имя</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Фамилия</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Электронная почта</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-button">
          Продолжить
        </button>
      </form>
      <div className="auth-footer">
        <p>
          <Link to="/auth/login">У вас уже есть аккаунт? Войти!</Link>
        </p>
      </div>
    </div>
  );
};

export default Sign;
