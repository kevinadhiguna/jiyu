import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: "Isagi",
    last: "Toichi"
  };

  const nameList = [
    { first: "Eiryu", last: "Jyubei" },
    { first: "Noel", last: "Neuer" },
    { first: "Etosi", last: "Sae" },
  ];

  return (
    <div className="App">
      <Greet name='Alvaro' unreadMessages={5} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
