import React from 'react'
import './Discover.css';

const Discover = ({isIconClicked}) => {
  return (
    <>
    <div className={`discover-container ${isIconClicked ? 'icon-clicked' : ''}`}>
      <h1>This is Discover page</h1>
    </div>
    </>
  )
}

export default Discover;
