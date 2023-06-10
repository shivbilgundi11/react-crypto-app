import React from 'react'
import Coin from '../Coin';
import { Link } from 'react-router-dom';

const TopTenCoins = ({coinsData}) => {
    console.log(coinsData);
  return (
    <div className="ttc-container">
      <div className="ttc-header">
        <h2>Top Ten Coins</h2>

        <Link to={"/coins"}>
          More Coins <i className="ri-arrow-right-s-line"></i>
        </Link>
      </div>

      <div className="coins-wrapper">
        {coinsData.coins.map((coin, index) => {
          return <Coin coin={coin} key={coin.uuid} />;
        })}
      </div>
    </div>
  );
}

export default TopTenCoins;