import { useState } from "react"

export default function StarshipSearch({searchFunc}) {
    const [search, setSearch] = useState('')
    const [prevSearchTerm, setPrevSearchTerm] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        searchFunc(search)
        setPrevSearchTerm(search)
        setSearch('')
    }

    function resetStarships() {
        setPrevSearchTerm('')
        setSearch('')
        searchFunc(search)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search term: </label>
                <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button type='submit'>Search</button>
            </form>
            {prevSearchTerm ?  
                <>
                    <p>{prevSearchTerm}</p>
                    <button onClick={resetStarships}>Show all starships</button>
                </>
                : <p>Search for a starship by name.</p>
            }
        </>

    )
}
