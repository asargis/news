import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from "./containers/Root";
import Root from "./containers/Root";
import './index.css';

ReactDOM.render(
    <div>
        <Root/>
    </div>,
    document.getElementById("root"));