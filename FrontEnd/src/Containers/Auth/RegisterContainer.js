import React from 'react';

import Register from '../../Components/Register';

import { createUser } from '../../services/api/usersApi';

export default function RegisterContainer() {
  return (
    <Register createUser={createUser} />
  );
}
