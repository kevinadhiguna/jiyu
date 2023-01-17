import { useState } from 'react';
import { AuthUser } from '../types/AuthUser.type';

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser); // <- Type Assertion
  // Type assesrtion, simply, tells TypeScript that a developer knows better than him.
  //  By lying that '{} is the type of AuthUser'. This happens if the developer is confident that user will not be null.

  function handleLogin() {
    setUser({
      name: 'Joe',
      email: 'Isagi'
    });
  }

  // function handleLogout() {
  //   setUser(null);
  // }

  return(
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      {/* optional chaining is after the user object (user.name) since user is possibly null */}
      <p>User name is {user?.name}</p>
      <p>User email is {user?.email}</p>
    </div>
  );
}
