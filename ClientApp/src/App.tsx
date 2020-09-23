import React from 'react';
import Webcam from 'react-webcam';


const App = () => {
  const webcam = React.useRef<Webcam & HTMLVideoElement>(null);

  const capture = React.useCallback(() => {
    const image = webcam.current?.getScreenshot();
    console.log(image);
  }, [webcam]);

  return (
    <React.Fragment>
      <button onClick={capture}>Cheese</button>
      <Webcam ref={webcam} height="100%" width="100%" />
    </React.Fragment>
  );
}


export default App;
