
import "./button.css";

function Button({ text, bgcolor, width, radius }) {
  return (
    <button
      className="btn"
      style={{ backgroundColor: bgcolor, width: width, borderRadius: radius }}
    >
      {text}
    </button>
  );
}

export default Button;