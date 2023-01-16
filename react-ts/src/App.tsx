import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';

function App() {
  const personName = {
    first: "Isagi",
    last: "Toichi"
  };

  return (
    <div className="App">
      <Greet name='Alvaro' unreadMessages={5} isLoggedIn={false} />
      <Person name={personName} />
    </div>
  );
}

export default App;
