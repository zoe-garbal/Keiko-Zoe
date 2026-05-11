import styles from "./Home.module.css"
import { Pokemon, filterPokemonsByName } from "../../components/Pokemon"
import React, { useEffect } from "react"
import { Loader } from "../../components/Loader"

interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}

function fetchPokemons() {
  return fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
}

export const Home = () => {
  const [filterValue, setFiltervalue] = React.useState("")
  const [pokemonList, updatePokemonList] = React.useState<PokemonInfo[]>([])
  const [isLoading, setIsLoading] = React.useState(true)

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltervalue(event.target.value)
  }

  const filteredPokemons = filterPokemonsByName(pokemonList, filterValue)

  useEffect(() => {
    fetchPokemons()
      .then(response => response.json())
      .then(pokemonData => {
        updatePokemonList(pokemonData)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className={styles.intro}>
      <div>Pokedex!</div>
      <input className={styles.input} onChange={onInputChange} value={filterValue} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {isLoading ? (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Loader />
          </div>
        ) : (
          filteredPokemons.map(({ name, id, weight, height }) => (
            <Pokemon key={id} name={name} id={id} weight={weight} height={height} />
          ))
        )}
      </div>
    </div>
  )
}
