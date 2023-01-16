import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name='Alvaro' unreadMessages={5} isLoggedIn={false} />
    </div>
  );
}

export default App;
