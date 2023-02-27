import React from 'react';
import ReactDOM from 'react-dom';

import "./content.css";

const container_id = 'sidecar_container';

// Create the container and add it to the body
const sidecar_container = document.createElement('div');
sidecar_container.id = container_id;
document.body.appendChild(sidecar_container);

// Load the sidecar into the container
ReactDOM.render(<Sidecar />, sidecar_container);

function Sidecar () {
  return <div id="sidecar">I'm a sidecar!  Vroom!</div>;
}