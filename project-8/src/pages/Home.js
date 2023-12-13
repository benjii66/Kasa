import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Banner } from "../components/banners/HomeBanner"
import { Card } from "../components/cards/HouseCard"
import { Link } from 'react-router-dom';

export const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => { 
    axios.get("/logements.json").then((response) => setData(response.data));
  }, []);

  // Contenu du composant Home
  return (
    <>
    <Banner/>
    <div>
      {data.map((house,id) => (
        <div>
          <Link to={`/logement/${house.id}`}>
          <Card key={id} cover={house.cover} title={house.title} />
          </Link>
        </div>
      ))}
    </div>
    </>
  );
}