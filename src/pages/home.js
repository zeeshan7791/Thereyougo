import React from 'react'

function Home() {
  return (
    <>
     <div>
  <header id="nav-wrapper">
    <nav id="nav">
      <div className="nav left">
        
        <button id="menu" className="btn-nav"><span className="fas fa-bars" /></button>
      </div>
      <div className="nav right">
        <a href="#home" className="nav-link active"><span className="nav-link-span"><span className="u-nav">Home</span></span></a>
        <a href='landing/*'className="nav-link"><span className="nav-link-span"><span className="u-nav">Landing Page</span></span></a>
        <a href="#work" className="nav-link"><span className="nav-link-span"><span className="u-nav">Work</span></span></a>
        <a href="#contact" className="nav-link"><span className="nav-link-span"><span className="u-nav">Contact</span></span></a>
      </div>
    </nav>
  </header>
 
</div>


    </>
  )
}

export default Home
