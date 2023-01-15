import logo from './logo.svg';
import './App.css';

import SingleQRcode from './components/singleQRcode';
import PopoverQRcode from './components/popoverQRcode';

function App() {
  return (
    <div className="App">
      <SingleQRcode />
      <PopoverQRcode />
    </div>
  );
}

export default App;
