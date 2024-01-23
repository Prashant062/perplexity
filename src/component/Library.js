import React from 'react'
import './Library.css';

const Library = ({isIconClicked}) => {
  return (
    <div>
      <div className={`library-container ${isIconClicked ? 'icon-clicked' : ''}`}>
<h1>This is Our Library</h1>
      </div>
    </div>
  )
}

export default Library;
