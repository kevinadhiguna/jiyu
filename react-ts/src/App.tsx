import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Balondor } from './components/Balondor';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './state/LoggedIn';
import { User } from './state/User';
import { Counter } from './state/Counter';

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

      <Button handleClick={(event, id) => console.log('Button is clicked', event, id)} />

      <Input value='' handleChange={(event) => console.log('Input is changed', event)} />

      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      {/* By specifying 'styles: React.CSSProperties', one can not add an invalid CSS property such as following: */}
      {/* <Container styles={{ border: '1px solid black', pading: '1rem' }} />   <--   Type '{ border: string; pading: string; }' is not assignable to type 'Properties<string | number, string & {}>'. */}

      <LoggedIn />

      <User />

      <Counter />
    </div>
  );
}

export default App;
