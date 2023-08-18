import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';

import './App.css'

function App() {
  const [url, setUrl] = useState('');
  const [qrlink, setQrlink] = useState('');

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, (err, url) => {
      if (!err) setQrlink(url);
    })
  }

  function handleQRcode(ev) {
    setUrl(ev.target.value);
    if (ev.target.value) {
      handleGenerate(ev.target.value);
    }
  }

  return (
    <div className='container'>
      <QRCode
        value={url}
      />
      <input
        className='input'
        placeholder='Digite a URL...'
        value={url}
        onChange={(e) => handleQRcode(e)}
      />
      <a href={qrlink} download={`qrcode.png`}>Baixar QRcode</a>
    </div>
  )
}

export default App
