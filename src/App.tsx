import React from 'react';

import './App.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { CurrencyConverter } from './component/CurrencyConvertor/CurrencyConverter';
import CurrencyList from './component/CurrencyList/CurrencyList';

interface Props {
  onClick: () => void;
}

export const Provider: React.FC<Props> = React.memo(
  ({ onClick, children }) => (
    <button
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  ),
);

export const App: React.FC = () => {
  return (
    <>
      <div className="content">
        <div className="switcher">
          <Link className="link" to="/">Currency converter</Link>
          <Link className="link" to="/currency-list">Currency list</Link>
        </div>

        <div className="pages">
          <Routes>
            <Route path="/" element={<CurrencyConverter />} />
            <Route path="/currency-list" element={<CurrencyList />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
