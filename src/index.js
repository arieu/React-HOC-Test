import React from 'react';
import { render } from 'react-dom';
import ItemsCom from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: '',
};

const App = () => (
  <div style={styles}>
  <ul>
    <ItemsCom items={['item 1', 'item 2']} />
    </ul>
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
  </div>
);

render(<App />, document.getElementById('root'));
