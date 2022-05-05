import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";


export default function Home(){

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/elaborazioni', {replace: true}), [navigate]);

    return (
        <div>
            <h2>Ciao Gatti!</h2>
        </div>
      );
    }