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

import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Counter } from './components/state/Counter';

import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';

import { Counter as CounterClassComponent } from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';

import { List } from './components/generics/List';

import { RandomNumber } from './components/restriction/RandomNumber';

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

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>

      <DomRef />

      <MutableRef />

      <CounterClassComponent message='The counter value is' />

      {/* Learn to pass a component as a prop */}
      <Private isLoggedIn={true} component={Profile} />

      {/* Valid if <T extends {}> */}
      {/* 
      <List
        items={['Speaker', 'Microphone', 'Mouse', 'Keyboard']}
        onClick={item => console.log(item)}
      /> */}

      <List
        items={[
          {
            id: 1,
            first: 'Wayne',
            last: 'Rooney',
          },
          {
            id: 2,
            first: 'Cristiano',
            last: 'Ronaldo',
          },
          {
            id: 3,
            first: 'Ricardo',
            last: 'Kaka',
          },
        ]}
        onClick={item => console.log(item)}
      />

      {/* Error */}
      {/* <RandomNumber value={11} isPositive isNegative isZero /> */}

      <RandomNumber value={17} isPositive />
    </div>
  );
}

export default App;
