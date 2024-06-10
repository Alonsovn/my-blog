import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD3W9CL3-89YV9sC3qMA9-W2bW7TJqaSBA",
  authDomain: "my-react-blog-bd13a.firebaseapp.com",
  projectId: "my-react-blog-bd13a",
  storageBucket: "my-react-blog-bd13a.appspot.com",
  messagingSenderId: "392332390686",
  appId: "1:392332390686:web:27096910d717dc3272190f",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
