import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Balondor } from './components/Balondor';
import { Button } from './components/Button';

function App() {
  const personName = {
    first: 'Isagi',
    last: 'Toichi'
  };

  const nameList = [
    { first: 'Eiryu', last: 'Jyubei' },
    { first: 'Noel', last: 'Neuer' },
    { first: 'Etosi', last: 'Sae' },
  ];

  function isClicked() {
    console.log('Button is clicked!');
  }

  return (
    <div className='App'>
      <Greet name='Alvaro' unreadMessages={5} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='success' />
      
      {/* Type '{ children: string; }' has no properties in common with type 'IntrinsicAttributes'. */}
      {/* <Heading>Another placeholder text</Heading> */}
      
      {/* No error */}
      <Heading>Brewlock</Heading>

      <Balondor>
        <Heading>Balond'or winner is Isagi Toichi</Heading>
      </Balondor>

      <Button handleClick={isClicked} />
    </div>
  );
}

export default App;
