import React, { useEffect, useState } from 'react'
import GlobalStats from '../components/HomeComponents/GlobalStats';
import '../styles/Home.css'
import '../index.css';
import axios from 'axios';
import Loader from '../components/Loader';
import TopTenCoins from '../components/HomeComponents/TopTenCoins';



const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "10",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "728cac0fc2msh3fd440b5ac1fa6dp1db2bfjsn23d2877f847d",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

const Home = () => {
  const [coinsData, setcoinsData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setLoading(false);
        setcoinsData(response.data.data);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    
    fetchData();
  }, []);

  if(loading) return <Loader />;

  return (
    <div className="home-wrapper">
      <h1 style={{textAlign:'center'}}>Home</h1>
      <div className="section-wrapper">
        <GlobalStats data={coinsData} />
        <TopTenCoins coinsData={coinsData} />
      </div>
    </div>
  );
}

export default Home;