import React from 'react';

import Login from '../../Screens/Login';

import { login } from '../../services/api/usersApi';

export default function LoginContainer() {
  return (
    <Login login={login} />
  );
}
