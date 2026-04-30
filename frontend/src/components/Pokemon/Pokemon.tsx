interface PokemonProps {
  name: string
  id: number
}

export function filterPokemonsByName(pokemons: PokemonProps[], name: string): PokemonProps[] {
  return pokemons.filter(pokemon => pokemon.name.includes(name))
}

export const Pokemon = ({ name, id }: PokemonProps) => {
  const image = {
    src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    alt: name,
  }

  return (
    <div>
      <img src={image.src} alt={image.alt} />
      <p>Name: {name}</p>
      <p>Number: {id}</p>
    </div>
  )
}
