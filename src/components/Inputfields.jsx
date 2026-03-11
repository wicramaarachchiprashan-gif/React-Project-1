//input field component

import "./inputfields.css"


function InputField({ type, placeholder, border, width}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input-field"
      style={{ borderRadius:border , width : width}}
    />
  );
}

export default InputField;