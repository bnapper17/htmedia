// import testimony from '../resources/video/carboard-testimony-hd.mp4'
import './Landing.css';


function Landing() {


  return (
    <div className="container">
        <video src='https://heavenly-treasures.s3.us-east-2.amazonaws.com/carboard-testimony-hd.mp4' autoPlay loop muted />
    </div>
  );
}

export {Landing};
