import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AppContext } from '../App';

const Row = ({ className, values }) => {
  /* Deconstructing our dispatch function from the Context provided in App.js */
  const { dispatch } = useContext(AppContext);
  return (
    <tr className={className}>
      {/* Mapping all the values in the row to individual table cells */}
      {values.map((value, index) => <td key={index}>{value}</td>)}
      {/* Placing the delete button inside a table cell */}
      <td>
        <button onClick={() => dispatch({ type: 'DELETE', target: values[0] })}>Delete</button>
      </td>
    </tr>
  );
};

/* Defining which parameters/props the component will accept, and marking them as required */
Row.propTypes = {
  className: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
};

export default styled(Row)`
  width: 100%;
  button {
    display: block;
    padding: 14px 8px;
    height: 100%;
    width: 100%;
    font-size: 16px;
    border: 2px solid maroon;
    border-radius: 5px;
    background-color: transparent;
    color: maroon;
    cursor: pointer;
    opacity: 0.1;
    &:hover {
      opacity: 0.8;
    }
  }
`;