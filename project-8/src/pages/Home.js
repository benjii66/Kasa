import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Banner } from "../components/banners/HomeBanner"
import { Card } from "../components/cards/HouseCard"
import { Link } from 'react-router-dom';

export const Home = () => {

  // State for the houses data and loading state.
  const [data, setData] = useState([]);

  //useEffect to load the houses at the assembly of the component
  useEffect(() => { 
    //get the houses data from the JSON file          Update of the state with the datas
    axios.get("/logements.json").then((axiosResponse) => setData(axiosResponse.data));
  }, []);

  return (
    <>
    {/* just to display the banner  */}
    
    <Banner/>
    <div>
      {/* mapping of the houses and display their cards  */}

      {data.map((house,id) => (
        <div>

          {/* use Link to create a link on the houses page */}
          <Link to={`/logement/${house.id}`}>

            {/* Card house Rendering with his cover image and title */}
          <Card key={id} cover={house.cover} title={house.title} />
          </Link>
        </div>
      ))}
    </div>
    </>
  );
}