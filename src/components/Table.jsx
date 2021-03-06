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
  max-width: 100%;
  border-spacing: 0;
  th {
    padding: 4px 0px;
    border-bottom: 2px solid darkslategrey;
    cursor: pointer;
    h2 {
      font-family: Helvetica;
      font-size: 14px;
      font-weight: bold;
    }
  }
  td {
    padding: 4px 0px;
    text-align: center;
  }
  thead {
    background-color: lightsteelblue;
  }
  tbody {
    > :nth-child(even) {
      background-color: whitesmoke;
      &:hover {
        background-color: lightgray;
      }
    }
  }
`;