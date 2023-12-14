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
  const [house, setHouse] = useState();
    
    useEffect(() => {
    //async function to get the data from the chosen house
      const getData = async () => {

        try {
          //request to fetch the datas from the JSON
          const houseResponse = await axios.get("/logements.json");
          //find the house by the ID
          const houseChosen = houseResponse.data.find(({ id }) => id === params.id);
          //goto error page if the house doesn't exist
          if (houseChosen === undefined) {
            navigate("/404", { state: { message: "Impossible to fetch the datas" } });
          }else {
          //update the state with the house datas
          setHouse(houseChosen);
          }
        } catch (error) {
          console.error(error);
        }
      };
      //call the function to have the datas when the composant is ready
      getData();      
      //ensure the function is called when the composant is ready
    }, [params.id, navigate]);
    
    //ensure axios get the house datas
    if (!house) return null;

    //extract the house datas if house is defined
    const { pictures: housePics, tags, equipments} = house;
    const allEquipments = equipments.map((item, index) => (
      <li key={index} className='equipList'>{item}</li>
    ));
    
    return (
      //condition if the datas are available
      house && (
        <div key ={params.id} className='house-container' >
          {/* display the carrousel with the house images */}
          <Carousel slides ={housePics} />
          <section className='hostInfo-container'>
            <div className='title-tags-container'>
              <div className='title-container redFont'>
                {/* title and location of the house */}
                <h1 className='location'>{house.title}</h1>
                <h3 className='location'>{house.location}</h3>
                  <div className="tag-container">  
                  {/* his tags */}
                    {tags.map((tag) => (
                      <Tags key={tag} tag={tag} />
                    ))}              
                  </div>
              </div>
            <div className='rate-host-container'>
              <div className='host-container redFont'>
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
            </div>
          </section>
          <div className='collapse-container'>
            {/* display the description and the equipments through an accordion  */}
          <Collapse title="Description" content={house.description} />
          <Collapse title="Équipements" content={allEquipments} />        
          </div>
        </div>
      )
    )
}