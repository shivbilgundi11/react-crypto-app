import React from 'react';
import '../App.css';

const Coin = ({coin}) => {
  return (
    <div className="coin-box">
      <div className="coin-header">
        <img src={coin.iconUrl} alt="" width={30} />
        <p className="coin-name">{coin.name}</p>
      </div>

      <p className="coin-price">
        $ {((coin.price * 100) / 100).toFixed(2)} {coin.symbol}
      </p>

      <div className="coin-status">
        {(coin.change > 0) ? (
          <span className="status-icon-green">
            <i className="ri-arrow-right-up-line"></i>
          </span>
        ) : (
          <span className="status-icon-red">
            <i className="ri-arrow-right-down-line"></i>
          </span>
        )}
        <span className="coin-status">{coin.change}%</span>
      </div>
    </div>
  );
}

export default Coin;