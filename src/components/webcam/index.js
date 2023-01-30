import React, {useState,useRef,useCallback } from "react";

import Webcam from "react-webcam";
const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
  };
const WebcamComponent = () => {
    const webcamRef = useRef(null);
    const [isShowVideo, setIsShowVideo] = useState(false);
    const stopCam = () => {
      let stream = webcamRef.current.stream;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());;
      setIsShowVideo(true);
    };    
    const capture = useCallback(
        async () => {
          const imageSrc = webcamRef.current.getScreenshot();
          console.log(imageSrc,'Image Src');
          console.log(webcamRef.current);
          stopCam();
        },
        [webcamRef]
      );
     return( 
      <div>
        {!isShowVideo && 
          <div style={{width:'50%',height:'50%',backgroundColor:'red'}}>
              <Webcam
              audio={false}
              height={'100%'}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={'100%'}
              videoConstraints={videoConstraints}
              />
              <button onClick={capture}>Capture photo</button>
          </div>
        }
    </div>  

    )
  }; 
  export default WebcamComponent;