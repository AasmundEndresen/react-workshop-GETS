import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Row from './Row';

const Table = ({ className, headings, rows }) => (
  <table className={className}>
    <thead><tr>{headings.map((heading, index) => <th key={index}>{heading}</th>)}<th /></tr></thead>
    <tbody>
      {rows.map((row, index) => <Row key={index} values={row}/>)}
    </tbody>
  </table>
);

Table.propTypes = {
  className: PropTypes.string.isRequired,
  keys: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
}

export default styled(Table)`
  width: 100%;
  border-spacing: 0;
  th {
    padding: 20px 10px;
    border-bottom: 3p solid black;
    cursor: pointer;
  }
  td {
    padding: 10px;
    text-align: center;
  }
  thead, tfoot {
    box-sizing: border-box;
    background-color: lightsteelblue;
  }
  tbody {
    > :nth-child(even) {
      background-color: whitesmoke;
    }
  }
`;