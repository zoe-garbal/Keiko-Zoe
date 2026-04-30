import styles from "./Home.module.css"
import { Pokemon, filterPokemonsByName } from "../../components/Pokemon"
import React from "react"

const pokemonList = [
  {
    name: "Carapuce",
    id: 7,
  },
  {
    name: "Carabaffe",
    id: 8,
  },
  {
    name: "Tortank",
    id: 9,
  },
]

export const Home = () => {
  const [filterValue, setFiltervalue] = React.useState("")

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltervalue(event.target.value)
  }

  const filteredPokemons = filterPokemonsByName(pokemonList, filterValue)

  console.log(filterValue)

  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <input className={styles.input} onChange={onInputChange} value={filterValue} />
      <div style={{ display: "flex", gap: "1rem" }}>
        {filteredPokemons.map(({ name, id }) => (
          <Pokemon key={id} name={name} id={id} />
        ))}
      </div>
    </div>
  )
}
