import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import { useState } from 'react';
import './App.css';

function App() {
  const [link, setLink] = useState('');
  const [download, setDownload] = useState('');


  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function(erro, url){
      setDownload(url);
    })
  }

  function handleQRCode(event){
    setLink(event.target.value);
    handleGenerate(event.target.value);
  }

  return (
    <div className="container">
      <QRCode 
        value={link}
      />
      
      <input 
        className="input"
        placeholder="Digite o Link..."
        value={link}
        onChange={(event)=> handleQRCode(event)}
      />

      <a href={download} download={`qrcode.png`}> Baixar QR-Code </a>
    </div>
  );
}

export default App;
