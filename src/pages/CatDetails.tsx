import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Image } from 'primereact/image';
import  FilmsList  from '../components/swFilmsList'
import './AccordionDemo.css';



function CatDetails(){
    let { id } = useParams();

    const baseURL = ("https://api.thecatapi.com/v1/images/"+id);

    console.log(baseURL);

    const imageCat = (url:any) => {
        return <Image src={url} alt="Image" height='300px' preview />
    }
    const [cats, setCats]:any = React.useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
        setCats(response.data);
        });
    }, []);

    if (!cats) return null;

    return(
        <div>
            {imageCat(cats.url)}
            <div className="card">
                <Accordion multiple activeIndex={[0]}>
                    <AccordionTab header="Data">
                        <p>ID: {cats.id}</p>
                        <p>Width: {cats.width}</p>
                        <p>Height: {cats.height}</p>
                        { cats.categories != null &&
                        <><p>Category ID: {cats.categories[0].id}</p><p>Category Name: {cats.categories[0].name}</p></>}
                    </AccordionTab>
                </Accordion>
            </div>
            < FilmsList/>
        </div>
    )

}

export default CatDetails
