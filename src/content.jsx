import React from 'react';
import ReactDOM from 'react-dom';

import "./content.css";

container_id = 'sidecar_container';

if(document.getElementById(container_id)){
 	document.getElementById(id).parentNode.removeChild(document.getElementById(container_id));
} else {
  sidecar_container = document.createElement('div');
  sidecar_container.id = container_id;
  document.body.appendChild(sidecar_container);
}

ReactDOM.render(
  <Sidecar />,
  document.getElementById('sidecar_container')
);

function Sidecar () {
  return <div id="sidecar">I'm a sidecar!  Vroom!</div>;
}