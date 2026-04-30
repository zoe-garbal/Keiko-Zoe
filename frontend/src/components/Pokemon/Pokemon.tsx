interface PokemonProps {
  name: string
  id: number
}

export const Pokemon = ({ name, id }: PokemonProps) => {
  const image = {
    src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    alt: name,
  }
  console.log(name)

  return (
    <div>
      <img src={image.src} alt={image.alt} />
      <p>Name: {name}</p>
      <p>Number: {id}</p>
    </div>
  )
}
