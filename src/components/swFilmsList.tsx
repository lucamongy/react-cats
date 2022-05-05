import React from 'react'
import { useGetFilmByIdQuery, useGetFilmsQuery } from '../services/starWarsApi'

const FilmsList = () => {

  
  
  const { data, isLoading, error } = useGetFilmsQuery(null);

  console.log(data);
  

  return (
    <div>
      <h3>Star Wars Movies</h3>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div>
          {data.results.map((movie: { episode_id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; opening_crawl: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
            <section key={movie.episode_id}>
              <h2>{movie.title}</h2>
              <p>{movie.opening_crawl}</p>
            </section>
          ))}
        </div>        
      ) : null}
  </div>
  )
}

export default FilmsList;