import styles from "./Pokemon.module.css"

interface PokemonProps {
  name: string
  id: number
  weight: number
  height: number
}

export function filterPokemonsByName(pokemons: PokemonProps[], name: string): PokemonProps[] {
  return pokemons.filter(pokemon => pokemon.name.includes(name))
}

export const Pokemon = ({ name, id, weight, height }: PokemonProps) => {
  const image = {
    src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    alt: name,
  }

  return (
    <div className={styles.pokemon}>
      <p>{name}</p>
      <img src={image.src} alt={image.alt} />
      <p>Id: {id}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
    </div>
  )
}
