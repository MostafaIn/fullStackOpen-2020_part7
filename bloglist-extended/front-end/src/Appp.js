import React from 'react'

export default function App() {
    const [query, setQuery] = React.useState("charizard");
    const [pokemon, setPokemon] = React.useState(null);
    const [hasError, setHasError] = React.useState(false);
  
    React.useEffect(() => {
      getPokemon(query);
    }, []);
  
    async function getPokemon(name) {
      if (name !== "") {
        setHasError(false);
        try {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}
          `);
          const data = await res.json();
          setPokemon(data);
        } catch (err) {
          setHasError("No pokemon found!");
        }
      }
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      getPokemon(query);
    }
    //immediate change: real time search
    function handleChange(e) {
      setQuery(e.target.value);
      getPokemon(e.target.value);
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search the pokemons..."
            value={query}
            onChange={handleChange}
          ></input>
          <input type="submit" value="Search"></input>
        </form>
  
        {hasError && "No pokemon found!"}
        {!hasError && pokemon && <Pokemon character={pokemon} />}
      </div>
    );
  }
  
  function Pokemon({ character }) {
    return (
      <div className="pokemon">
        <div className="info">
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${character.id}.png`}
            width="300"
          />
  
          <h2>{character.name}</h2>
        </div>
  
        <div className="stats">
          {character.stats.map((stat, index) => (
            <p key={index}>
              {stat.stat.name}:{stat.base_stat}
            </p>
          ))}
        </div>
      </div>
    );
  }