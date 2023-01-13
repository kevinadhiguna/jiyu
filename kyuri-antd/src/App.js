import logo from './logo.svg';
import './App.css';
import { QRCode } from 'antd';

function App() {
  const link = 'https://github.com/kevinadhiguna';
  const icon = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';

  return (
    <div className="App">
      <QRCode
        value={link}
        icon={icon}
      />
    </div>
  );
}

export default App;
