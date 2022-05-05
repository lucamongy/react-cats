import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../logo.svg'
import './home.css'

export default function Home(){

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/elaborazioni', {replace: true}), [navigate]);

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Cats!</p>
      </div>
      );
    }