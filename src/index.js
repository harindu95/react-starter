require("./sass/main.scss");

import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout" ;

var l=2;


const app = document.getElementById("app");
ReactDOM.render(<Layout/>, app);
