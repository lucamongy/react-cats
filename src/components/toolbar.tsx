import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import React, { useCallback, Component } from "react";
import { useNavigate } from "react-router-dom";


function routerButton(label:string, link:string, classname:string) {

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate(link, {replace: true}), [navigate]);
  
    return (
      <React.Fragment>
        <Button label={label} className={classname} onClick={handleOnClick} />
      </React.Fragment>
    );
  }

  export function ToolBar() {

    const leftcomponents = (
        <React.Fragment>
                {routerButton("Cats HyperFucker","/","p-button-text")}
        </React.Fragment>
      )

    const rightcomponents = (
        <React.Fragment>
                {routerButton("Elaborazioni","/elaborazioni","p-button-raised")}
        </React.Fragment>
    )

    
    return (
        <Toolbar left={leftcomponents} right={rightcomponents}/>
    )

  }