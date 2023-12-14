// src > components > Button.jsx

import "./Button.css"

export default function Button({color, text, children}) {
  const onClick = (e) => {
    console.log(e);
  };

  return (
    <div style={{backgroundColor: color }} className="button">
      <button className="button" onClick={onClick}>{children}</button>
    </div>
  )
}