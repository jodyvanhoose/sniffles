import { useState } from 'react'
import { FaVirus, FaTree } from 'react-icons/fa';
import { GiFireFlower, GiHighGrass, GiBeech } from "react-icons/gi";


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


// setting use state for pollen level and values
  const [treeCategory, setTreeCategory] = useState('')
  const [grassCategory, setGrassCategory] = useState('')
  const [weedCategory, setWeedCategory] = useState('')
  const [moldCategory, setMoldCategory] = useState('')
  const [treeValue, setTreeValue] = useState(null)
  const [grassValue, setGrassValue] = useState(null)
  const [weedValue, setWeedValue] = useState(null)
  const [moldValue, setMoldValue] = useState(null)



  // setting pollen value color
 
  const pollenCatTextColor = (category, catText) =>{
    
    switch(category){
      case 'Good':
        catText.style.color = 'darkgreen'
        break;
      case 'Low':
        catText.style.color = 'green'
        break;
      case 'Moderate':
        catText.style.color = 'yellow'
        break;
      case 'High':
        catText.style.color = 'orangered'
        break;
      case 'Unhealthy':
        catText.style.color = 'red'
        break;
      case 'Hazardous':
        catText.style.color = 'darkred'
    }
   
  }

  // setting animation indicator
  let r = document.querySelector(':root')

  const pollenAnimateIndicator = (category, pollenVar) =>{
    
    switch(category){
      case 'Good':
        r.style.setProperty(pollenVar, '5%') 
        break;
      case 'Low':
        r.style.setProperty(pollenVar, '25%') 
        break;
      case 'Moderate':
        r.style.setProperty(pollenVar, '50%') 
        break;
      case 'High':
        r.style.setProperty(pollenVar, '70%') 
        break;
      case 'Unhealthy':
        r.style.setProperty(pollenVar, '85%') 
        break;
      case 'Hazardous':
        r.style.setProperty(pollenVar, '95%') 
    }
   
  }
  
 
  // targeting pollen text by class name
  let treeCatText = document.querySelector('.tree-box')
  let weedCatText = document.querySelector('.weed-box')
  let grassCatText = document.querySelector('.grass-box')
  let moldCatText = document.querySelector('.mold-box')


  pollenCatTextColor(treeCategory, treeCatText)
  pollenCatTextColor(grassCategory, grassCatText)
  pollenCatTextColor(weedCategory, weedCatText)
  pollenCatTextColor(moldCategory, moldCatText)
  
  pollenAnimateIndicator(treeCategory, '--tree')
  pollenAnimateIndicator(grassCategory, '--grass')
  pollenAnimateIndicator(weedCategory, '--weed')
  pollenAnimateIndicator(moldCategory, '--mold')

 
  // setting location display text
  const [location, setLocation] = useState(`Check your location's pollen count`)


  // getting api info for location and pollen count

  // location api
const getLocation = async (e) => {
  e.preventDefault()

  try {
    // get location api
  const apiKey = process.env.REACT_APP_API_KEY
  const baseLocationURL = 'http://dataservice.accuweather.com/locations/v1/cities/search'
  let citySearchText = document.querySelector('input').value

  const response = await fetch(`${baseLocationURL}?apikey=${apiKey}&q=${citySearchText}&offset=1`)
  let data = await response.json()


  // cityCode is needed for pollen api
  let cityCode = data[0].Key

  console.log(data[0].EnglishName)
  console.log(data[0].AdministrativeArea.ID)
  console.log(data[0])


  // setting location text from location api
  setLocation(data[0].EnglishName + ', ' + data[0].AdministrativeArea.ID)


  // clears input field 
  cancelBtn()


  // calling pollen api
  await getPollenCount(cityCode, apiKey)
  } catch (error) {
    console.log(error)
    if(TypeError){
      setLocation('Please enter a valid location')
    }
    
  }

  

}

// get pollen count from api
const getPollenCount = async (c, key) => {


try {
  const apiKey = key
  const basePollenURL = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/'
  let city = c


  const response = await fetch(`${basePollenURL}${city}?apikey=${apiKey}&details=true`)
  let data = await response.json()
  console.log(data.DailyForecasts[0].AirAndPollen[1].Category)
  console.log(data.DailyForecasts[0].AirAndPollen[2].Category)
  console.log(data.DailyForecasts[0].AirAndPollen[3].Category)
  console.log(data.DailyForecasts[0].AirAndPollen[4].Category)
  console.log(data.DailyForecasts[0].AirAndPollen)


  // setting pollen categorys and values to display
  setTreeCategory(data.DailyForecasts[0].AirAndPollen[4].Category)
  setGrassCategory(data.DailyForecasts[0].AirAndPollen[1].Category)
  setWeedCategory(data.DailyForecasts[0].AirAndPollen[3].Category)
  setMoldCategory(data.DailyForecasts[0].AirAndPollen[2].Category)
  setTreeValue(data.DailyForecasts[0].AirAndPollen[4].Value)
  setGrassValue(data.DailyForecasts[0].AirAndPollen[1].Value)
  setWeedValue(data.DailyForecasts[0].AirAndPollen[3].Value)
  setMoldValue(data.DailyForecasts[0].AirAndPollen[2].Value)

  // pollenCatTextColor()
} catch (error) {
  console.log(error)
  
}
  
}


  return(
    <main>
      {/* search bar  */}
      <div className="row">
        <form onSubmit={getLocation} className="search-bar column" action="">
          <input onMouseDown={showCancelBtn} type="text" name="city" placeholder="Search" />
          <a onClick={cancelBtn} id="clear-btn" className="clear-btn" href="#">Cancel</a>
        </form>
        <p className="location-text">{location}</p>
      </div>

      {/* pollen display area */}

      {/* tree display */}
      <div className="display-wrap">

        <div className="tree-weed-wrap">

        
        <div className="pollen-display tree">
          <h1 className='pollen-heading'>Trees</h1>
          <FaTree />
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
          <GiFireFlower />
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
        </div>


        <div className="grass-mold-wrap">

        
        {/* grass display */}
        <div className="pollen-display grass">
          <h1 className='pollen-heading'>Grass</h1>
          <GiHighGrass />
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
          <FaVirus />
          <div className='pollen-value'>
            <h1 className='pollen_value_text'>{moldValue}</h1>
            <p>pp/m<span>3</span></p>
          </div>
          <h1 id="mold-box" className="mold-box">{moldCategory}</h1>
          <div className="color-box">
            <div className="color"></div>
            <div className="indicator mold-indicator"></div>
          </div> 
        </div>

        </div>
      
    </div>
    </main>
  )
}

export default Main