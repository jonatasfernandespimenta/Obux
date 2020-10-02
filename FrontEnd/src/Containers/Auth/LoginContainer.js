import React from 'react';

import Login from '../../Components/Login';

import { login } from '../../services/api/usersApi';

export default function LoginContainer() {
  return (
    <Login createUser={login} />
  );
}
