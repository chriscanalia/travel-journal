
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Card from './components/Card'
import './App.css'
import data from '../data'
// import data from './data.jsx'

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <section className='cards'>
        {data.map(place => {
          return (
            <Card 
            key={place.id}
            place={place}
            // imgUrl={place.imageUrl}
            // location={place.location}
            // title={place.title}
            // googleMapsUrl= {place.googleMapsUrl}
            // startDate= {place.startDate}
            // endDate= {place.endDate}
            // description={place.description}
        />
          )
        })}
        
      </section>
      
    </div>
  )
}

export default App
