import styles from "./Home.module.css"

interface Pokemon {
  name: string
  number: number
  image: {
    src: string
    alt: string
  }
}

export const Home = () => {
  const pokemon: Pokemon = {
    name: "Carapuce",
    number: 7,
    image: {
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      alt: "Carapuce",
    },
  }

  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <div className={styles.pokemon}>
        <img src={pokemon.image.src} alt={pokemon.image.alt} />
        <p>Name: {pokemon.name}</p>
        <p>Number: {pokemon.number}</p>
      </div>
    </div>
  )
}
