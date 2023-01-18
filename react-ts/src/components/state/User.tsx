import { useState, useContext } from 'react';
import { AuthUser } from '../types/AuthUser.type';
import { UserContext } from '../context/UserContext';

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const userContext = useContext(UserContext);

  function handleLogin() {
    setUser({
      name: 'Joe Ryusei',
      email: 'joe@ryusei.jp'
    });
  }

  function handleLogout() {
    setUser(null);
  }

  return(
    <div>
      <p>User component - state</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      {/* optional chaining is after the user object (user.name) since user is possibly null */}
      <p>User name is {user?.name}</p>
      <p>User email is {user?.email}</p> 
    </div>
  );
}
