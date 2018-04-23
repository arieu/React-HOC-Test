import React from 'react';
import HOC from './HOC'

const ItemsCom = ({ items, other }) => {

  return (
    items.map(item => {
      return <li>{item}</li>
    })
  )
}

export default HOC('items')(ItemsCom,);
