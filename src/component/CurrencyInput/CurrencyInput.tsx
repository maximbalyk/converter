import React from 'react';
import './currencyInput.scss';

interface Props {
  amount: number|string,
  currency: string,
  currencies: string[],
  onAmountChange(prop: number|string): void,
  onCurrencyChange(prop: string): void,
}

const CurrencyInput = ({
  amount,
  currency,
  currencies,
  onAmountChange,
  onCurrencyChange,
} : Props) => {
  return (
    <div className="group">
      <input
        type="number"
        value={amount}
        onChange={e => onAmountChange(e.target.value)}
      />
      <select
        value={currency}
        onChange={e => onCurrencyChange(e.target.value)}
      >
        {currencies.map((currencyForList: string) => (
          <option value={currencyForList} key={currencyForList}>{currencyForList}</option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
