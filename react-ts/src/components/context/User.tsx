import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const User = () => {
  const userContext = useContext(UserContext);

  function handleLogin() {
    if (userContext) {
      userContext.setUser({
        name: 'Joe Ryusei',
        email: 'joe@ryusei.jp',
      });
    }
  }

  function handleLogout() {
    if (userContext) {
      userContext.setUser(null);
    }
  }

  return(
    <div>
      <p>User component - context</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      <p>User name is {userContext?.user?.name}</p>
      <p>User email is {userContext?.user?.email}</p>
    </div>
  );
}
