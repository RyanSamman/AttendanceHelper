import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './settings/App'

import './settings/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

var mountNode = document.getElementById("settings");

ReactDOM.render(<App />, mountNode);
