import React, { createContext, useContext, useReducer } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import mock from './mockdata';
import Table from './components/Table';
import appReducer from './reducers/AppReducer';

export const AppContext = createContext({
  productData: mock,
});

const App = ({ className }) => {
  const initialState = useContext(AppContext);
  const [{ productData }, dispatch] = useReducer(
    appReducer,
    initialState,
  );
  const { Variants, ...rest } = productData[0];
  const keys = Object.keys(rest);
  const rows = productData.map(row => {
    const { Variants, ...rest } = row;
    return Object.values(rest);
  });
  const headings = keys.map(key => <h2 onClick={() => dispatch({ type: 'SORT', target: key })}>{key}</h2>);
  return (
    <AppContext.Provider value={{ productData, dispatch }}>
      <div className={className}>
        <input placeholder="Search here" type="text" onChange={e => dispatch({ type: 'FILTER', filter: e.target.value, target: 'SupplierName' })}/>
        <Table headings={headings} rows={rows}/>
      </div>   
    </AppContext.Provider>
  );
};

App.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(App)`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  h2 {
    color: maroon;
  }
  input {
    font-size: 18px;
    padding: 10px;
    margin: 8px;
    border-radius: 3px;
  }
  .App-link {
    color: #61dafb;
  }
  ul {
    padding: 0;
    list-style: none;
  }
`;
