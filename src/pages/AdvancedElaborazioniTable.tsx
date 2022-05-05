import React, { useCallback, useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import axios from "axios";
import { getAllJSDocTags } from "typescript";
import internal from "stream";
import { Cats } from "../models/cats";
import { render } from "@testing-library/react";
import "./ElaborazioniTable.css"
import { useNavigate } from "react-router-dom";



const imageCat = (rowData:any) => {
    return <img src={rowData.url} className="cat-image"></img>
}

const actionBodyTemplate = (rowData:any) => {
  let id = rowData.id;
  console.log(id);
  return (
    routerButton("/elaborazioni/"+id)
  );
}

function routerButton(link:string) {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate(link, {replace: true}), [navigate]);

  return (
    <React.Fragment>
      <Button icon="pi pi-info-circle" className="p-button-rounded p-button-success mr-2" onClick={handleOnClick} />
    </React.Fragment>
  );
}

function AdvancedElaborazioniTable() {
  const defaultPosts: Cats[] = [];
  const [cats, setCats]: [Cats[], (posts: Cats[]) => void] = React.useState(
    defaultPosts
  );
  

  useEffect(() => {
    axios
      .get<Cats[]>("https://api.thecatapi.com/v1/images/search?limit=50", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setCats(res.data);
        return res.data;
      });
  }, []);

  return (
    <div>
      <div className="datatable-elab" style={{ height: 'calc(100vh - 87px)' }}>
        <DataTable  autoLayout scrollHeight="flex" scrollDirection="both" resizableColumns columnResizeMode="fit" value={cats} responsiveLayout="stack" breakpoint="900px" size="small">
          <Column field="id" header="ID" style={{width: '10%'}} align="left" ></Column>
          <Column field="url" header="URL" style={{width: '40%'}}></Column>
          <Column body={imageCat} header="IMAGE" style={{width: '25%'}}></Column>
          <Column body={actionBodyTemplate}  align="right"></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default AdvancedElaborazioniTable;
