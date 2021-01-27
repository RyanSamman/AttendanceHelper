import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './popup/App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var mountNode = document.getElementById("popup");
ReactDOM.render(<App />, mountNode);
