import StarshipSearch from './components/StarshipSearch/StarshipSearch.jsx'
import StarshipList from './components/StarshipList/StarshipList.jsx'
import starshipService from './services/starshipService.js'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [starshipsData, setStarshipsData] = useState([])
  const [displayedStarships, setDisplayedStarships] = useState([])

  useEffect(() => {
    async function getInitialData() {
      console.log('loding...')
      try {
        const response = await starshipService()
        console.log(response.data)
        setStarshipsData(response.data)
        setDisplayedStarships(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        console.log('finsished loding')
      }
    }
    getInitialData()
  }, [])

  function searchStarships(searchTerm) {
    const results = starshipsData.filter(starship => starship.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setDisplayedStarships(results)
  }


  return (
    <>
      <h1>Star Wars API</h1>
      <h2>Search</h2>
      <StarshipSearch searchFunc={searchStarships}/>
      <h2>Starships</h2>
      <p>Number of results: {displayedStarships.length}</p>
      <StarshipList starships={displayedStarships}/>
    </>

  );
}

export default App
