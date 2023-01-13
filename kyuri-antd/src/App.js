import logo from './logo.svg';
import './App.css';
import { QRCode } from 'antd';

function App() {
  const link = 'https://github.com/kevinadhiguna';

  return (
    <div className="App">
      <QRCode
        value={link}
      />
    </div>
  );
}

export default App;
