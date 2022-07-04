function Main() {
// animiate input and show cancel btn
const showCancelBtn = () =>{
  document.getElementById('clear-btn').style.display = 'block'
}



// cancels and clears input
const cancelBtn = () =>{
  document.querySelector('input').value = ''
  document.getElementById('clear-btn').style.display = 'none'
}


  return(
    <main>
      {/* search bar  */}
      <div className="row">
        <form className="search-bar column" action="">
          <input onMouseDown={showCancelBtn} type="text" name="city" placeholder="Search" />
          <a onClick={cancelBtn} id="clear-btn" className="clear-btn" href="#">Cancel</a>
        </form>
        <p className="location-text">Check your location's pollen count</p>
      </div>

      {/* pollen display area */}
      {/* tree display */}
      <div className="display-wrap">
        <div className="pollen-display tree">
          <h1>Tree</h1>

          <h1 id="tree-box" className="tree-box">Low</h1>
          <div className="color-box">
            <div className="color"></div>
            <div className="indicator tree-indicator"></div>
          </div> 
        </div>
      

      {/* weeds display */}
        <div className="pollen-display weed">
          <h1>Weeds</h1>
          <h1 id="weed-box" className="weed-box">None</h1>
          <div className="color-box">
            <div className="color"></div>
            <div className="indicator weed-indicator"></div>
          </div> 
        </div>

      {/* grass display */}
        <div className="pollen-display grass">
          <h1>Grass</h1>
          <h1 id="grass-box" className="grass-box">None</h1>
          <div className="color-box">
            <div className="color"></div>
            <div className="indicator grass-indicator"></div>
          </div> 
        </div>

        <div className="pollen-display mold">
          <h1>Mold</h1>
          <h1 id="mold-box" className="mold-box">None</h1>
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