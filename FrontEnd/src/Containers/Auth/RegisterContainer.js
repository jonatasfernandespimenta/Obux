import React from 'react';

import Register from '../../Screens/Register';

import { createUser } from '../../services/api/userService';

export default function RegisterContainer() {
  return (
    <Register createUser={createUser} />
  );
}
