import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

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
      <Status status='success' />
    </div>
  );
}

export default App;
