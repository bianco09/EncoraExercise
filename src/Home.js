import { useEffect, useState } from 'react';

import './Home.css'

const Home = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
          const response = await fetch('https://rickandmortyapi.com/api/character');
          console.log(response);
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.log(error);
        }
    };

    return (
        <article className='characters'>
            {data && data.results.map(({ image, name }) => (
                <figure className='image'>
                    <img src={image} alt={name} />
                </figure>
            ))}
        </article>
    )
};

export default Home;