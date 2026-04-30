import styles from "./Home.module.css"
import { Pokemon } from "../../components/Pokemon"

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
  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <div style={{ display: "flex", gap: "1rem" }}>
        {pokemonList.map(({ name, id }) => (
          <Pokemon key={id} name={name} id={id} />
        ))}
      </div>
    </div>
  )
}
