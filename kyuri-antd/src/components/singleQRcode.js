import { QRCode, theme, Button } from 'antd';
const { useToken } = theme;

function SingleQRcode() {
  const link = 'https://github.com/kevinadhiguna';
  const icon = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
  const { token } = useToken();
  const qrcodeName = 'qrcode-github.png';

  // Issue : Still unsuccesful downloading the QR code
  function downloadQRcode() {
    const canvas = document.getElementById('qrcode-container')?.querySelector('canvas');
    
    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement('a');
      a.download = qrcodeName;
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  return (
    <div className="App" id='qrcode-container'>
      <QRCode
        value={link}
        icon={icon}
        color={token.colorInfoText}
        style={{
          marginBottom: 16,
          backgroundColor: token.colorBgLayout
        }}
      />
      <Button type='primary' onClick={downloadQRcode}>
        Download
      </Button>
    </div>
  );
}

export default SingleQRcode;
