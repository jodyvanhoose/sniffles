function Main() {
  return(
    <main>
      {/* search bar  */}
      <div className="row">
        <form className="search-bar column" action="">
          <input type="text" name="city" placeholder="Search" />
          <a id="clear-btn" className="clear-btn" href="#">Cancel</a>
        </form>
        <p className="location-text">Check your location's pollen count</p>
      </div>

      {/* pollen display area */}
      {/* tree display */}
      <div className="display-wrap">
        <div className="pollen-display tree">
          <h1>Tree</h1>
          <h1 id="tree-box" className="box">None</h1>
          <div className="color-box">
            <div className="color"></div>
            <div className="indicator tree-indicator"></div>
          </div> 
        </div>
      </div>

      {/* weeds display */}
      <div className="display-wrap">
        <div className="pollen-display weed">
          <h1>Weeds</h1>
          <h1 id="tree-box" className="box">None</h1>
          <div className="color-box">
            <div className="color"></div>
            <div className="indicator weed-indicator"></div>
          </div> 
        </div>
      </div>

      {/* grass display */}
      <div className="display-wrap">
        <div className="pollen-display grass">
          <h1>Grass</h1>
          <h1 id="tree-box" className="box">None</h1>
          <div className="color-box">
            <div className="color"></div>
            <div className="indicator grass-indicator"></div>
          </div> 
        </div>
      </div>
      
    </main>
  )
}

export default Main