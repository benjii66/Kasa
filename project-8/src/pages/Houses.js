import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from "axios";

import { Carousel } from '../components/carousel/carousel';
import { Collapse } from "../components/common/Collapse"
import {   Tags   } from "../components/common/Tags"
import {   Host   } from "../components/common/HostInfo"
import {   Rate   } from "../components/common/StarRating"


export const Houses = () => {

  const params = useParams();
  const navigate = useNavigate(); 

  const [house, setchosenAppart] = useState();
    
    useEffect(() => {
      const getData = async () => {

        const houseResponse = await axios.get("/logements.json");
        const houseChosen = houseResponse.data.find(({ id }) => id === params.id);
        houseResponse.data.map(() => setchosenAppart(houseChosen));
        if (houseChosen === undefined) navigate("/404", { state: { message: "Can't get data" } }); 
        
      };
      getData();
      
    }); 
    const housePics = house && house.pictures;
    const tags = house && house.tags;
    const equipments = house && house.equipments;
    const allEquipments =
      house &&
      equipments.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ));


    return (
      house && (
        <div key ={params.id} >
          <Carousel slides ={housePics} />
          <section >
            <div>
              <div>
                <h1>{house.title}</h1>
                <h3>{house.location}</h3>
                  <div className="tag">              
                    {tags.map((tag) => (
                      <Tags key={tag} tag={tag} />
                    ))}              
                  </div>
              </div>
            </div>
            <div>
              <div>
                <Host
                  hostName = {house.host.name}
                  hostPic = {house.host.picture}
                />
              </div>
              <div>
                <Rate score={house.rating}/>
              </div>
            </div>
          </section>
          <div>
          <Collapse title="Description" content={house.description} />
          <Collapse title="Equipements" content={allEquipments} />        
          </div>
        </div>
      )
    )
}