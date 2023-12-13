import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from "axios";

import { Carousel } from '../components/carousel/carousel';
import { Collapse } from "../components/common/Collapse"
import {   Tags   } from "../components/common/Tags"
import {   Host   } from "../components/common/HostInfo"
import {   Rate   } from "../components/common/StarRating"


export const Houses = () => {

  //get the navigation parameters and the URL too
  const params = useParams();
  const navigate = useNavigate(); 

  //state to stock the chosen house
  const [house, setHousePicked] = useState();
    
    useEffect(() => {
    //async function to get the data from the chosen house
      const getData = async () => {

        try {
          //request to fetch the datas from the JSON
          const houseResponse = await axios.get("/logements.json");
          //find the house by the ID
          const houseChosen = houseResponse.data.find(({ id }) => id === params.id);
          //update the state with the house datas
          setHousePicked(houseChosen);

          //goto error page if the house doesn't exist
          if (houseChosen === undefined) {
            navigate("/404", { state: { message: "Impossible de récupérer les données" } });
          }
        } catch (error) {
          console.error(error);
        }
      };
      //call the function to have the datas when the composant is ready
      getData();
      
      //ensure the function is called when the composant is ready
    }, [params.id, navigate]); 

    //extract the house datas (if exist)
    const housePics = house && house.pictures;
    const tags = house && house.tags;
    const equipments = house && house.equipments;
    const allEquipments =
      house &&
      equipments.map((item, equipmentIndex) => (
        <li key={equipmentIndex}>
          {item}
        </li>
      ));


    return (
      //condition if the datas are available
      house && (
        <div key ={params.id} >
          {/* display the carrousel with the house images */}
          <Carousel slides ={housePics} />
          <section >
            <div>
              <div>
                {/* title and location of the house */}
                <h1>{house.title}</h1>
                <h3>{house.location}</h3>
                  <div className="tag">  
                  {/* his tags */}
                    {tags.map((tag) => (
                      <Tags key={tag} tag={tag} />
                    ))}              
                  </div>
              </div>
            </div>
            <div>
              <div>
                {/* display hosts informations  */}
                <Host
                  hostName = {house.host.name}
                  hostPic = {house.host.picture}
                />
              </div>
              <div>
                {/* display the rate  */}
                <Rate score={house.rating}/>
              </div>
            </div>
          </section>
          <div>
            {/* display the description and the equipments through an accordion  */}
          <Collapse title="Description" content={house.description} />
          <Collapse title="Equipements" content={allEquipments} />        
          </div>
        </div>
      )
    )
}