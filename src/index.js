import React from "react";
import  ReactDOM  from "react-dom";

//import the main file
import App from './App';
//Router is important for pagination in react
import { BrowserRouter as Router } from 'react-router-dom'; 
import 'antd/dist/antd.css';

ReactDOM.render(
    <Router>
         <App />
    </Router>, 
    document.getElementById('root')
);