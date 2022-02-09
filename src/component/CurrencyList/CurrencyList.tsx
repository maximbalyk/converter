import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Rates } from '../../interfaces/rates';
import './CurrencyList.scss';

const CurrencyList = () => {
  const [currency1, setCurrency1] = useState<string>('CAD');
  const [ratesInitial, setRatesInitial] = useState<Rates>({ CAD: 1 });
  const [ratesList, setRatesList] = useState<Rates>({ CHF: 1 });

  const currencyChange = (currency: string): void => {
    let newObj = {};

    Object.keys(ratesInitial).forEach((key) => {
      const newValue = ratesInitial[key] / ratesInitial[currency];

      newObj = {
        ...newObj,
        [key]: newValue,
      };
    });

    setRatesList(newObj);
  };

  useEffect(() => {
    axios.get('https://freecurrencyapi.net/api/v2/latest?apikey=1a1622c0-89a1-11ec-acef-312b1abd7534')
      .then(response => {
        setRatesInitial(response.data.data);
        setRatesList(response.data.data);
      });
  }, []);

  return (
    <>
      <div className="content-list">
        <select
          className="selector"
          value={currency1}
          onChange={e => {
            setCurrency1(e.target.value);
            currencyChange(e.target.value);
          }}
        >
          {Object.keys(ratesInitial).map((currencyForList: string) => (
            <option value={currencyForList} key={currencyForList}>{currencyForList}</option>
          ))}
        </select>

        <div className="list">
          {Object.entries(ratesList).map((cur) => (
            <div
              className="item"
              key={Math.random().toString()}
            >
              {cur[1].toFixed(2)}
              {' '}
              {cur[0]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CurrencyList;
