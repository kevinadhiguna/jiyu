import "./App.css";
import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const generateQRcode = () => {
    QRCode.toDataURL(
      url,
      {
        // QR code properties
        width: 800,
        margin: 2,
        color: {
          dark: "#000000ff",
          light: "#ffffffff",
          // dark: "#335383FF",
          // light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) {
          return console.error("Something went wrong : ", err);
        }
        console.log("URL : ", url);
        setQrcode(url);
      }
    );
  };

  return (
    <div className="app">
      <h1 className="title">QR Code Generator</h1>
      <input
        className="url-input"
        type="text"
        placeholder="https://www.google.com"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
      <button className="generate-button" onClick={generateQRcode}>
        Generate QR code
      </button>

      {/* Only display a QR code if it shows */}
      {qrcode && (
        <>
          <img className="qrcode-image" src={qrcode} alt="QR code" />
          <a className="download-text" href={qrcode} download="qrcode.png">
            Download QR code
          </a>
        </>
      )}
    </div>
  );
}

export default App;
