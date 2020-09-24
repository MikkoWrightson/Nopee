import React from 'react';
import Webcam from 'react-webcam';

import { app } from './App.module.css';


const App = () => {
  const webcam = React.useRef<Webcam & HTMLVideoElement>(null);

  const capture = React.useCallback(() => {
    const image = webcam.current?.getScreenshot();
    console.log(image);
  }, [webcam]);

  return (
    <div className={app}>
      <button onClick={capture}>Cheese</button>
      <Webcam ref={webcam} height="100%" width="100%" />
    </div>
  );
}


export default App;
