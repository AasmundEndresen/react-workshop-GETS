import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Row from '../src/components/Row';
import Table from '../src/components/Table';

const keys = ['a', 'b', 'c'];
const values = ['1', '2', '3'];
const rows = Array(8).fill(values);

storiesOf('Welcome', module)
  .add('Table Row', () => <Row values={values}/>)
  .add('Table', () => <Table keys={keys} rows={rows}/>)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
