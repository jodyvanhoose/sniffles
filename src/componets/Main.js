import { useState } from 'react'
import { FaVirus, FaTree } from 'react-icons/fa';
import { GiFireFlower, GiHighGrass } from "react-icons/gi";



function Main() {

  // setting input value
const [searchVal, setSearchVal] = useState('')




// setting use state for pollen level and values
  const [treeCategory, setTreeCategory] = useState('')
  const [grassCategory, setGrassCategory] = useState('')
  const [weedCategory, setWeedCategory] = useState('')
  const [moldCategory, setMoldCategory] = useState('')
  const [treeValue, setTreeValue] = useState(null)
  const [grassValue, setGrassValue] = useState(null)
  const [weedValue, setWeedValue] = useState(null)
  const [moldValue, setMoldValue] = useState(null)


  const [ treeColor, setTreeColor ] = useState('blue')
  const [ grassColor, setGrassColor ] = useState('blue')
  const [ weedColor, setWeedColor ] = useState('blue')
  const [ moldColor, setMoldColor ] = useState('blue')

  const [ treePosition, setTreePosition ] = useState('2%')
  const [ grassPosition, setGrassPosition ] = useState('2%')
  const [ weedPosition, setWeedPosition ] = useState('2%')
  const [ moldPosition, setMoldPosition ] = useState('2%')


  // setting pollen value color
 
  // const pollenCatTextColor = (category) =>{
    // let color;
    // switch(data.DailyForecasts[0].AirAndPollen[4].Category){
    //   case 'Good':
    //     setTreeColor('darkgreen')
    //     break;
    //   case 'Low':
    //     setTreeColor('green')
    //     break;
    //   case 'Moderate':
    //     setTreeColor('yellow')
    //     break;
    //   case 'High':
    //     setTreeColor('orangered')
    //     break;
    //   case 'Unhealthy':
    //     setTreeColor('red')
    //     break;
    //   case 'Hazardous':
    //     setTreeColor('darkred')
    //     break;
    //   default:
    //     break;
    // }

  // }



  // setting animation indicator
  // let r = document.querySelector(':root')


  // const pollenAnimateIndicator = (category, pollenVar) =>{
    
  //   switch(category){
  //     case 'Good':
  //       r.style.setProperty(pollenVar, '5%') 
  //       break;
  //     case 'Low':
  //       r.style.setProperty(pollenVar, '25%') 
  //       break;
  //     case 'Moderate':
  //       r.style.setProperty(pollenVar, '50%') 
  //       break;
  //     case 'High':
  //       r.style.setProperty(pollenVar, '70%') 
  //       break;
  //     case 'Unhealthy':
  //       r.style.setProperty(pollenVar, '85%') 
  //       break;
  //     case 'Hazardous':
  //       r.style.setProperty(pollenVar, '95%') 
  //       break;
  //     default:
  //       break;
  //   }
  // }

  
 
  // targeting pollen text by class name
  // let treeCatText = document.querySelector('.tree-box')
  // let weedCatText = document.querySelector('.weed-box')
  // let grassCatText = document.querySelector('.grass-box')
  // let moldCatText = document.querySelector('.mold-box')

  // pollenCatTextColor(treeCategory)
  // pollenCatTextColor(grassCategory, grassCatText)
  // pollenCatTextColor(weedCategory, weedCatText)
  // pollenCatTextColor(moldCategory, moldCatText)
  
  // pollenAnimateIndicator(treeCategory, '--tree')
  // pollenAnimateIndicator(grassCategory, '--grass')
  // pollenAnimateIndicator(weedCategory, '--weed')
  // pollenAnimateIndicator(moldCategory, '--mold')

 
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

  const response = await fetch(`${baseLocationURL}?apikey=${apiKey}&q=${searchVal}&offset=1`)
  let data = await response.json()


  // cityCode is needed for pollen api
  let cityCode = data[0].Key

  console.log(data[0].EnglishName)
  console.log(data[0].AdministrativeArea.ID)
  console.log(data[0])


  // setting location text from location api
  setLocation(data[0].EnglishName + ', ' + data[0].AdministrativeArea.ID)


  // clears input field 
  setSearchVal('')


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

  const changeTextColor = (category, catText) => {
    switch(category){
      case 'Good':
        catText('darkgreen')
        break;
      case 'Low':
        catText('green')
        break;
      case 'Moderate':
        catText('yellow')
        break;
      case 'High':
        catText('orangered')
        break;
      case 'Unhealthy':
        catText('red')
        break;
      case 'Hazardous':
        catText('darkred')
        break;
      default:
        break;
    }
  }

  changeTextColor(data.DailyForecasts[0].AirAndPollen[4].Category, setTreeColor)
  changeTextColor(data.DailyForecasts[0].AirAndPollen[1].Category, setGrassColor)
  changeTextColor(data.DailyForecasts[0].AirAndPollen[3].Category, setWeedColor)
  changeTextColor(data.DailyForecasts[0].AirAndPollen[2].Category, setMoldColor)

  const pollenAnimateIndicator = (category, catPosition) =>{
    
    switch(category){
      case 'Good':
        catPosition('5%') 
        break;
      case 'Low':
        catPosition('25%')
        break;
      case 'Moderate':
        catPosition('50%') 
        break;
      case 'High':
        catPosition('70%')  
        break;
      case 'Unhealthy':
        catPosition('85%')  
        break;
      case 'Hazardous':
        catPosition('90%')  
        break;
      default:
        break;
    }
  }

  

  pollenAnimateIndicator(data.DailyForecasts[0].AirAndPollen[4].Category, setTreePosition)
  pollenAnimateIndicator(data.DailyForecasts[0].AirAndPollen[1].Category, setGrassPosition)
  pollenAnimateIndicator(data.DailyForecasts[0].AirAndPollen[3].Category, setWeedPosition)
  pollenAnimateIndicator(data.DailyForecasts[0].AirAndPollen[2].Category, setMoldPosition)
  console.log(treePosition)
  
  

} catch (error) {
  console.log(error)
  
}
  
}





  return(
    <main>
      {/* search bar  */}
      <div className="row">
        <form onSubmit={getLocation} className="search-bar column" action="">
          <input value={searchVal} onChange={e =>  setSearchVal(e.target.value)} type="text" name="city" placeholder='Search' />
          {searchVal.length > 0 && <button onClick={() => setSearchVal('')} id="clear-btn" className="clear-btn" href="#" type='button'>Cancel</button>}
          
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
          <h1 id="tree-box" className="tree-box" style={{ color: treeColor }}>{treeCategory}</h1>
          <div className="color-box">
            <div className="color"></div>
            <div className="indicator tree-indicator" style={{left: treePosition}}></div>
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
          <h1 id="weed-box" className="weed-box" style={{ color: weedColor }}>{weedCategory}</h1>
          <div className="color-box">
            <div className="color"></div>
            <div className="indicator weed-indicator" style={{left: weedPosition}}></div>
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
          
          <h1 id="grass-box" className="grass-box" style={{ color: grassColor }}>{grassCategory}</h1>
          <div className="color-box">
            <div className="color"></div>
            <div className="indicator grass-indicator" style={{left: grassPosition}}></div>
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
          <h1 id="mold-box" className="mold-box" style={{ color: moldColor }}>{moldCategory}</h1>
          <div className="color-box">
            <div className="color"></div>
            <div className="indicator mold-indicator" style={{left: moldPosition}}></div>
          </div> 
        </div>

        </div>
      
    </div>
    </main>
  )
}

export default Main