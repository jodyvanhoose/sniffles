
function Display(props) {
  return(
      // Pollen type Heading
      <div className="pollen-display">
        <h1 className='pollen-heading'>{props.type}</h1>
          {/* Pollen type icon */}
          {props.icon}

          {/* pollen number value */}
          <div className='pollen-value'>
            <h1 className='pollen_value_text'>{props.pollenValue}</h1>
            <p>pp/m<span>3</span></p>
          </div>

          {/* pollen category text type */}
          <h1 style={{ color: props.catColor }}>{props.pollenCat}</h1>

          {/* animated indicator dispay */}
          <div className="color-box">
            <div className="color"></div>
            <div className="indicator" style={{left: props.indicatorPosition}}></div>
          </div>
          </div>
        
  )
}

export default Display;