import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Rates } from '../../interfaces/rates';
import CurrencyInput from '../CurrencyInput/CurrencyInput';

export const CurrencyConverter: React.FC = () => {
  const [amount1, setAmount1] = useState<string | number>(1);
  const [amount2, setAmount2] = useState<string | number>(1);
  const [currency1, setCurrency1] = useState<string>('CAD');
  const [currency2, setCurrency2] = useState<string>('CHF');
  const [rates, setRates] = useState<Rates>({ UAH: 1 });

  const format = (number: number): string => {
    return number.toFixed(2);
  };

  const handleAmount1Change = (amountFirst: number): void => {
    setAmount2(format((+amountFirst * rates[currency2]) / rates[currency1]));
    setAmount1(amountFirst);
  };

  const handleCurrency1Change = (currencyFirst: string): void => {
    setAmount2(format((+amount1 * rates[currency2]) / rates[currencyFirst]));
    setCurrency1(currencyFirst);
  };

  const handleAmount2Change = (amountSecond: number): void => {
    setAmount1(format((+amountSecond * rates[currency1]) / rates[currency2]));
    setAmount2(amountSecond);
  };

  const handleCurrency2Change = (currencySecond: string): void => {
    setAmount1(format((+amount2 * rates[currency1]) / rates[currencySecond]));
    setCurrency2(currencySecond);
  };

  useEffect(() => {
    axios.get('https://freecurrencyapi.net/api/v2/latest?apikey=1a1622c0-89a1-11ec-acef-312b1abd7534')
      .then(response => {
        setRates(response.data.data);
      });

    if (rates) {
      handleAmount1Change(1);
    }
  }, [rates]);

  return (
    <>
      <CurrencyInput
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
      />
      <CurrencyInput
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2}
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
      />
    </>
  );
};
