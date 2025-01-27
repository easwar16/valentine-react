import { useRef } from "react";
import "./App.css";
function App() {
  const buttonRef = useRef(null);
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

export default App;
