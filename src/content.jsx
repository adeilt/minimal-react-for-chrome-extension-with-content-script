import React from 'react';
import ReactDOM from 'react-dom';

import "./content.css";

ReactDOM.render(
  <Sidecar />,
  document.getElementById('sidecar_container')
);

function Sidecar () {
  return <div id="sidecar">I'm a sidecar!  Vroom!</div>;
}