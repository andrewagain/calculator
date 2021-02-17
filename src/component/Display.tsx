import React from "react";
// import PropTypes from "prop-types";

import "./Display.css";

interface DisplayProps {
  value: string | null,
}

const Display = (props: DisplayProps): JSX.Element => {
  return (
    <div className="component-display">
      <div>{props.value}</div>
    </div>
  )
}

export default Display

// export default class Display extends React.Component {
//   static propTypes = {
//     value: PropTypes.string,
//   };

//   render() {
//     return (
//       <div className="component-display">
//         <div>{this.props.value}</div>
//       </div>
//     );
//   }
// }
