import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import "./App.css";
import music from "../public/Bazzi - Mine [Official Music Video] [ ezmp3.cc ].mp3";
function App() {
  const [appState, setAppState] = useState(0);
  const buttonRef = useRef(null);
  const finalStep = () => {
    setAppState(2);
    // const audio = new Audio(
    //   "../public/Bazzi - Mine [Official Music Video] [ ezmp3.cc ].mp3"
    // );
    // audio.play();
  };
  const audioPlayer = () => {
    setAppState(1);
  };
  const moveButton = () => {
    if (buttonRef.current) {
      const button = buttonRef.current;
      const x = Math.random() * (window.innerWidth - button.offsetWidth - 20); // Adjust for padding
      const y = Math.random() * (window.innerHeight - button.offsetHeight - 20); // Adjust for padding
      button.style.position = "absolute";
      button.style.left = `${x}px`;
      button.style.top = `${y}px`;
    }
  };
  if (appState === 0) {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-pink-100">
        <div>
          <p className="finger-paint-regular light-color-texts px-5 py-5">
            Will you be my Valentine and make my day as beautiful as you(Ammu)?
          </p>
          <div className="px-15 flex flex-col justify-center items-center">
            <img
              src="https://i.pinimg.com/736x/7f/a7/9e/7fa79ea49605a083b0f62fe1d51f9ec3.jpg"
              alt="Shinchan on his knees"
              height="400px"
              width="400px"
            />
            <div className="flex py-10 px-14">
              <div className="flex px-4">
                <img
                  src="../public/sparkle.png"
                  alt="Shinchan on his knees"
                  height="5px"
                  width="30px"
                />
                <button
                  // style={{ backgroundColor: "#FFB6C1", color: "white" }}
                  className="yes-button"
                  onClick={audioPlayer}
                >
                  Fuck Yes
                </button>
                <a href=""></a>
                <img
                  src="../public/sparkle.png"
                  alt="Get it on pink sparkle drawing painting coloring png download"
                  height="30px"
                  width="30px"
                />
              </div>
              <div className="px-4">
                <button
                  id="neverSayNo"
                  className="no-button"
                  onMouseOverCapture={moveButton}
                  ref={buttonRef}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (appState === 1) {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-pink-100">
        <div className="flex flex-col">
          <div className="flex flex-rows">
            <img
              className="flex pl-16"
              src="../public/aww.jpeg"
              alt="Shinchan on his knees"
              height="400px"
              width="400px"
            />
          </div>

          <p className="finger-paint-regular light-color-texts px-2 py-5">
            Aww you said YES! (There's no other choice haha XD!)
          </p>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={finalStep}
          >
            Epic Montage
          </button>
        </div>
      </div>
    );
  }
  if (appState === 2) {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-pink-100">
        <div className="flex flex-col">
          <ReactPlayer
            playing={true}
            url="../public/EpicVideo.mp4"
            height="500px"
            width="750px"
          />
        </div>
      </div>
    );
  }
}

export default App;
