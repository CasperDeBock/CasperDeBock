import React from "react";

import "../animations/fadeInUp.css";
import "../animations/pop.css";

function Transition(props) {
  React.useEffect(() => {
    const delay = props.timeout ? props.timeout : 0;
    const timer = setTimeout(() => {
      if (props.start) {
        setStartAnimation(true);
      } else {
        setStartAnimation(false);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  const [startAnimation, setStartAnimation] = React.useState(false);

  return (
    <div className={startAnimation ? `anim--${props.type}` : ""} style={startAnimation ? {} : {opacity: "0"}}>
      {props.children}
    </div>
  );
}
export default Transition;

/*
PROPS:
  - start: boolean
  - type: string
*/