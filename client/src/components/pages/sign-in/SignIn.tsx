import axios from 'axios';
import { useState } from 'react';

const SignIn = () => {
  const [userData, setUserData] = useState(null);

  return (
    <>
      <h1>Sign In Page</h1>
      <a href="/auth/google">Google Sign In</a>
    </>
  );
};

export default SignIn;
