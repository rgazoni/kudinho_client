import React from 'react'

export default function Card(props) {
  const classes = 'bg-bg_card_top rounded-lg shadow-sm shadow-gray-950 ' + props.className;
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}
