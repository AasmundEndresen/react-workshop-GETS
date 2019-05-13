import React from 'react';
import { storiesOf } from '@storybook/react';
import Row from '../src/components/Row';
import Table from '../src/components/Table';

const keys = ['a', 'b', 'c'];
const values = ['1', '2', '3'];
const rows = Array(8).fill(values);

storiesOf('MCU Avengers!', module)
  .add('Table Row', () => <Row values={values}/>)
  .add('Table', () => <Table keys={keys} rows={rows}/>);
