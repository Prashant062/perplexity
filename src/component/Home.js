import React, { useState } from 'react'
import './Home.css';


const Home = ({ isIconClicked }) => {
  const [text, setText] = useState('');
  const [changeCss, setChangeCss] = useState(false)
   
  const handleChange = (event) => {
    setText(event.target.value);
  };
 const handleChangeCss =()=> {
  setChangeCss(!changeCss);
 }
  return (
    <>
      <div className={`home-container ${isIconClicked ? 'icon-clicked' : ''}`}>
        <div className="home-content">
          <div className="home-title" >
            <h1 style={{ fontSize: '36px' }}>Where knowledge begins</h1>
          </div>
          <div className="Search-textarea">
            <div className="dynamic-textarea-container">
              <textarea
                value={text}
                onChange={handleChange}
                placeholder="Ask Anything..."
                className="dynamic-textarea"
              />

              <div className="right-search-icon">
                <div className="search-focus">
                  <i className="fa-solid fa-magnifying-glass mx-1"></i>Focus
                </div>
                <div className="add-file">
                  <i class="fa-solid fa-circle-plus"></i> File
                </div>
              </div>

              <div className="form-check form-switch ">
                <input className="form-check-input mx-2 " style={{ backgroundColor: '#292927' }} type="checkbox" role="switch" id="flexSwitchCheckDisabled" onClick={handleChangeCss} />
                <label className="form-check-label mx-1 " for="flexSwitchCheckDisabled">Copilot</label>
                <div className="arrow-icon">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className='try-copilot-box'>
            <i class="fa-solid fa-arrow-right-to-bracket mx-2"></i>
            <p style={{ display: !changeCss ? "none" : "" }}>Try Asking</p>
            <p  style={{ display: changeCss ? "none" : "" ,color:''}}>Try <span style={{color:'rgba(141, 168, 211, 0.5)'}}>Copilot</span></p>
          </div>
          <div className="content-try-asking"  style={{ display: !changeCss ? "none" : "" }}>
            <a href="/" >
              <div >
                history of Argentin
              </div>
            </a>
            <a href="/" >
              <div >
                unique colorado flowers
              </div>
            </a>
            <a href="/" >
              <div >
                checkout time w hotel cdmx
              </div>
            </a>
            <a href="/" >
              <div >
                how to center a div
              </div>
            </a>
            <a href="/" >
              <div >
                brown dog name ideas
              </div>
            </a>
            <a href="/" >
              <div  >
                healthy restaurants in sf
              </div>
            </a>
            <a href="/" >
              <div >
                d/dx x^2 y^4, d/dy x^2 y^4
              </div>
            </a>
          </div>

          <div className="content-try-asking"  style={{ display: changeCss ? "none" : "" }}>
            <a href="/" >
              <div >
              plan trip to tokyo
              </div>
            </a>
            <a href="/" >
              <div >
              guide on how to ski
              </div>
            </a>
            <a href="/" >
              <div >
              design garbage collector c++
              </div>
            </a>
            <a href="/" >
              <div >
              savory scone recipe
              </div>
            </a>
            <a href="/" >
              <div >
              nuclear fission essay
              </div>
            </a>
            <a href="/" >
              <div  >
              help me buy headphones
              </div>
            </a>
            <a href="/" >
              <div >
              analyze Wandering Aengus
              </div>
            </a>
          </div>
     <div className="bottom-home">
       <a href="/pro">Try Pro</a>
       <a href="/careers">Careers</a>
       <a href="/playground">Playground</a>
       <a href="/blog">Blog</a>
     </div>
        </div>

      </div>
    </>
  )
}

export default Home;
