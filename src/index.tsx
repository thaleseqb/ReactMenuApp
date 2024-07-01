import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css"
import './index.css';
import Menu from './pages/Menu';
import Begin from 'pages/Begin';
import Router from "./routes"

const currentComponent = window.location.pathname === "/" ? <Begin/> : <Menu/>;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);
