import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ2Fim0Zy151SJAY2u6M0twUe0JU80t6U",
  authDomain: "coderhouse-ecommerce-9366b.firebaseapp.com",
  projectId: "coderhouse-ecommerce-9366b",
  storageBucket: "coderhouse-ecommerce-9366b.appspot.com",
  messagingSenderId: "302968146937",
  appId: "1:302968146937:web:9af5f587b55efbc5450b28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
