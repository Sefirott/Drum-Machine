import React from "react";

function App() {
  document.addEventListener("keydown", function (e) {
    switch (e.keyCode) {
      case 81:
        document.getElementById("Q").play();
        let q = document.getElementById("1");
        q.style.backgroundColor = "#8B0000";
        setTimeout(() => {
          q.style.backgroundColor = "grey";
        }, 300);
        setName("Heater 1");
        break;
      case 87:
        document.getElementById("W").play();
        let w = document.getElementById("2");
        w.style.backgroundColor = "#191970";
        setTimeout(() => {
          w.style.backgroundColor = "grey";
        }, 300);
        setName("Heater 2");
        break;
      case 69:
        document.getElementById("E").play();
        let e = document.getElementById("3");
        e.style.backgroundColor = "#D27D2D";
        setTimeout(() => {
          e.style.backgroundColor = "grey";
        }, 300);
        setName("Heater 3");
        break;
      case 65:
        document.getElementById("A").play();
        let a = document.getElementById("4");
        a.style.backgroundColor = "#808000";
        setTimeout(() => {
          a.style.backgroundColor = "grey";
        }, 300);
        setName("Heater 4");
        break;
      case 83:
        document.getElementById("S").play();
        let s = document.getElementById("5");
        s.style.backgroundColor = "#0BDA51";
        setTimeout(() => {
          s.style.backgroundColor = "grey";
        }, 300);
        setName("Clap");
        break;
      case 68:
        document.getElementById("D").play();
        let d = document.getElementById("6");
        d.style.backgroundColor = "#FF5F1F";
        setTimeout(() => {
          d.style.backgroundColor = "grey";
        }, 300);
        setName("Open HH");
        break;
      case 90:
        document.getElementById("Z").play();
        let z = document.getElementById("7");
        z.style.backgroundColor = "#9F2B68";
        setTimeout(() => {
          z.style.backgroundColor = "grey";
        }, 300);
        setName("Kick n' Hat");
        break;
      case 88:
        document.getElementById("X").play();
        let x = document.getElementById("8");
        x.style.backgroundColor = "#FF2400";
        setTimeout(() => {
          x.style.backgroundColor = "grey";
        }, 300);
        setName("Kick");
        break;
      case 67:
        document.getElementById("C").play();
        let c = document.getElementById("9");
        c.style.backgroundColor = "#E0115F";
        setTimeout(() => {
          c.style.backgroundColor = "grey";
        }, 300);
        setName("Closed HH");
        break;
    }
  });

  const [name, setName] = React.useState("");

  const handleClick = (e) => {
    const audio = e.target.children[0];
    audio.play();
  };

  const onMouse = (e) => {
    e.target.style.background = "orange";
  };

  const offMouse = (e) => {
    e.target.style.background = "grey";
  };

  return (
    <>
      <div className="display">{name}</div>
      <section className="container">
        <button
          className="pads"
          id="1"
          onClick={(e) => {
            handleClick(e);
            setName("Heater 1");
          }}
          onMouseOver={onMouse}
          onMouseLeave={offMouse}
        >
          Q
          <audio
            class="clip"
            id="Q"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            type="audio/mpeg"
          ></audio>
        </button>
        <button
          className="pads"
          id="2"
          onClick={(e) => {
            handleClick(e);
            setName("Heater 2");
          }}
          onMouseOver={onMouse}
          onMouseLeave={offMouse}
        >
          W
          <audio
            class="clip"
            id="W"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            type="audio/mpeg"
          ></audio>
        </button>
        <button
          className="pads"
          id="3"
          onClick={(e) => {
            handleClick(e);
            setName("Heater 3");
          }}
          onMouseOver={onMouse}
          onMouseLeave={offMouse}
        >
          E
          <audio
            class="clip"
            id="E"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            type="audio/mpeg"
          ></audio>
        </button>
        <button
          className="pads"
          id="4"
          onClick={(e) => {
            handleClick(e);
            setName("Heater 4");
          }}
          onMouseOver={onMouse}
          onMouseLeave={offMouse}
        >
          A
          <audio
            class="clip"
            id="A"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            type="audio/mpeg"
          ></audio>
        </button>
        <button
          className="pads"
          id="5"
          onClick={(e) => {
            handleClick(e);
            setName("Clap");
          }}
          onMouseOver={onMouse}
          onMouseLeave={offMouse}
        >
          S
          <audio
            class="clip"
            id="S"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            type="audio/mpeg"
          ></audio>
        </button>
        <button
          className="pads"
          id="6"
          onClick={(e) => {
            handleClick(e);
            setName("Open HH");
          }}
          onMouseOver={onMouse}
          onMouseLeave={offMouse}
        >
          D
          <audio
            class="clip"
            id="D"
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            type="audio/mpeg"
          ></audio>
        </button>
        <button
          className="pads"
          id="7"
          onClick={(e) => {
            handleClick(e);
            setName("Kick n' Hat");
          }}
          onMouseOver={onMouse}
          onMouseLeave={offMouse}
        >
          Z
          <audio
            class="clip"
            id="Z"
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            type="audio/mpeg"
          ></audio>
        </button>
        <button
          className="pads"
          id="8"
          onClick={(e) => {
            handleClick(e);
            setName("Kick");
          }}
          onMouseOver={onMouse}
          onMouseLeave={offMouse}
        >
          X
          <audio
            class="clip"
            id="X"
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            type="audio/mpeg"
          ></audio>
        </button>
        <button
          className="pads"
          id="9"
          onClick={(e) => {
            handleClick(e);
            setName("Closed HH");
          }}
          onMouseOver={onMouse}
          onMouseLeave={offMouse}
        >
          C
          <audio
            class="clip"
            id="C"
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            type="audio/mpeg"
          ></audio>
        </button>
      </section>
    </>
  );
}
export default App;
