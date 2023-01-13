import logo from './logo.svg';
import './App.css';
import { QRCode, theme } from 'antd';
const { useToken } = theme;

function App() {
  const link = 'https://github.com/kevinadhiguna';
  const icon = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
  const { token } = useToken();

  return (
    <div className="App">
      <QRCode
        value={link}
        icon={icon}
        color={token.colorInfoText}
      />
    </div>
  );
}

export default App;
