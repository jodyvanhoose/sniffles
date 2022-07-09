import { useState } from 'react'


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

  const [treeCategory, setTreeCategory] = useState('')
  const [grassCategory, setGrassCategory] = useState('')
  const [weedCategory, setWeedCategory] = useState('')
  const [moldCategory, setMoldCategory] = useState('')
  const [treeValue, setTreeValue] = useState(null)
  const [grassValue, setGrassValue] = useState(null)
  const [weedValue, setWeedValue] = useState(null)
  const [moldValue, setMoldValue] = useState(null)

const getLocation = async (e) => {
  e.preventDefault()

  // get location api
  const apiKey = process.env.REACT_APP_API_KEY
  const baseLocationURL = 'http://dataservice.accuweather.com/locations/v1/cities/search'
  let citySearchText = document.querySelector('input').value

  const response = await fetch(`${baseLocationURL}?apikey=${apiKey}&q=${citySearchText}&offset=1`)
  let data = await response.json()
  let cityCode = data[0].Key
  
  await getPollenCount(cityCode)

}

const getPollenCount = async (c) => {
  const apiKey = process.env.REACT_APP_API_KEY
  const basePollenURL = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/'
  let city = c


  const response = await fetch(`${basePollenURL}${city}?apikey=${apiKey}&details=true`)
  let data = await response.json()
  console.log(data.DailyForecasts[0].AirAndPollen[1].Category)
  console.log(data.DailyForecasts[0].AirAndPollen[2].Category)
  console.log(data.DailyForecasts[0].AirAndPollen[3].Category)
  console.log(data.DailyForecasts[0].AirAndPollen[4].Category)
  console.log(data.DailyForecasts[0].AirAndPollen)

  setTreeCategory(data.DailyForecasts[0].AirAndPollen[4].Category)
  setGrassCategory(data.DailyForecasts[0].AirAndPollen[1].Category)
  setWeedCategory(data.DailyForecasts[0].AirAndPollen[3].Category)
  setMoldCategory(data.DailyForecasts[0].AirAndPollen[2].Category)
  setTreeValue(data.DailyForecasts[0].AirAndPollen[4].Value)
  setGrassValue(data.DailyForecasts[0].AirAndPollen[1].Value)
  setWeedValue(data.DailyForecasts[0].AirAndPollen[3].Value)
  setMoldValue(data.DailyForecasts[0].AirAndPollen[2].Value)
  


}



  return(
    <main>
      {/* search bar  */}
      <div className="row">
        <form onSubmit={getLocation} className="search-bar column" action="">
          <input onMouseDown={showCancelBtn} type="text" name="city" placeholder="Search" />
          <a onClick={cancelBtn} id="clear-btn" className="clear-btn" href="#">Cancel</a>
        </form>
        <p className="location-text">Check your location's pollen count</p>
      </div>

      {/* pollen display area */}
      {/* tree display */}
      <div className="display-wrap">
        <div className="pollen-display tree">
          <h1 className='pollen-heading'>Tree</h1>
          <div className='pollen-value'>
            <h1 className='pollen_value_text'>{treeValue}</h1>
            <p>pp/m<span>3</span></p>
          </div>
          <h1 id="tree-box" className="tree-box">{treeCategory}</h1>
          <div className="color-box">
            <div className="color"></div>
            <div className="indicator tree-indicator"></div>
          </div> 
        </div>
      

      {/* weeds display */}
        <div className="pollen-display weed">
          <h1 className='pollen-heading'>Weeds</h1>
          <div className='pollen-value'>
            <h1 className='pollen_value_text'>{weedValue}</h1>
            <p>pp/m<span>3</span></p>
          </div>
          <h1 id="weed-box" className="weed-box">{weedCategory}</h1>
          <div className="color-box">
            <div className="color"></div>
            <div className="indicator weed-indicator"></div>
          </div> 
        </div>

      {/* grass display */}
        <div className="pollen-display grass">
          <h1 className='pollen-heading'>Grass</h1>
          <div className='pollen-value'>
            <h1 className='pollen_value_text'>{grassValue}</h1>
            <p>pp/m<span>3</span></p>
          </div>
          
          <h1 id="grass-box" className="grass-box">{grassCategory}</h1>
          <div className="color-box">
            <div className="color"></div>
            <div className="indicator grass-indicator"></div>
          </div> 
        </div>

      {/* mold display */}
        <div className="pollen-display mold">
          <h1 className='pollen-heading'>Mold</h1>
          <div className='pollen-value'>
            <h1 className='pollen_value_text'>{moldValue}</h1>
            <p>spores</p>
          </div>
          <h1 id="mold-box" className="mold-box">{moldCategory}</h1>
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