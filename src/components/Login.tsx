import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { selectAuth } from '../redux/auth/selectors';
import { changeAuthStatus } from '../redux/auth/slice';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const { authEmail, authPassword } = useSelector(selectAuth);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authEmail === email && authPassword === password) {
      toast.success('Вы успешно вошли в аккаунт');
      dispatch(changeAuthStatus());
      navigate('/auth/profile');
    } else {
      toast.error('Почта или пароль указаны неверно');
    }
  };
  return (
    <div className="auth-container">
      <h2>Войти</h2>
      <form onSubmit={handleSubmit} className="auth-form">
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
          Войти
        </button>
      </form>
      <div className="auth-footer">
        <p>
          <Link to="/auth/sign"> Не зарегистрированы? Создать аккаунт</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
