import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AppContext } from '../App';

const Row = ({ className, values }) => {
  /* Deconstructing our dispatch function from the Context provided in App.js */
  const { dispatch } = useContext(AppContext);
  return (
    <tr className={className}>
      {values.map((value, index) => <td key={index}>{value}</td>)}
      <td>
        <button onClick={() => dispatch({ type: 'DELETE', target: values[0] })}>Delete</button>
      </td>
    </tr>
  );
};

Row.propTypes = {
  className: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
};

export default styled(Row)`
  width: 100%;
  font-size: 14px;
  font-family: 'Trebuchet MS';
  color: darkslategrey;
  opacity: 0.8;
  button {
    padding: 2px 4px;
    font-size: 12px;
    border: 2px solid maroon;
    border-radius: 5px;
    background-color: transparent;
    color: maroon;
    cursor: pointer;
    opacity: 0.1;
  }
  &:hover {
    background-color: lightgray;
    opacity: 1;
    button {
      opacity: 0.8;
    }
  }
`;