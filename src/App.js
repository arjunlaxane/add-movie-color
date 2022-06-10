import { useState } from 'react';
import './App.css';

function App() {
  const initial_Movie_List = [
    {
      name: 'RRR',
      poster:
        'https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG',
      rating: 8.8,
      summary:
        'RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.',
    },
    {
      name: 'Iron man 2',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg',
      rating: 7,
      summary:
        'With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.',
    },
    {
      name: 'No Country for Old Men',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg',
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    },
    {
      name: 'Jai Bhim',
      poster:
        'https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg',
      summary:
        'A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case',
      rating: 8.8,
    },
    {
      name: 'The Avengers',
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        'https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg',
    },
    {
      name: 'Interstellar',
      poster: 'https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg',
      rating: 8.6,
      summary:
        'When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.',
    },
    {
      name: 'Baahubali',
      poster: 'https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg',
      rating: 8,
      summary:
        'In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.',
    },
    {
      name: 'Ratatouille',
      poster:
        'https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=',
      rating: 8,
      summary:
        'Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.',
    },
  ];
  const [movieList, setMovieList] = useState(initial_Movie_List);
  return (
    <div className="App">
      {/* component + loop */}
      <MovieList movieList={movieList} setMovieList={setMovieList} />
      {/* <AddColor /> */}
    </div>
  );
}

function Movie({ movie }) {
  // console.log(movie);
  //conditional styling
  const styles = {
    color: movie.rating > 8 ? 'green' : 'red',
  };
  const [show, setShow] = useState(true);

  const parastyles = {
    display: show ? 'block' : 'none',
  };

  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}🎇🎈🎈🖼</h2>
        <p style={styles} className="movie-rating">
          {movie.rating}
        </p>
      </div>
      <button onClick={() => setShow(!show)}>summary</button>
      <p style={parastyles} className="movie-summary">
        {movie.summary}
      </p>

      {/* conditional rendering */}

      {/* {show ? <p className="movie-summary">{movie.summary}</p> : null} */}

      <Counter />
    </div>
  );
}

//counter------//

// import { useState } from 'react'; should be at top
//hook- it is a function, that make react listen to change. This function uses prefix use e.g useState

//const [state,setState]=useState(InitialValue)
//state-current value or current scenario-state of the art tech
//setState-It is a function-It update state-It informs react that state is changed
function Counter() {
  const [Like, setLike] = useState(0);
  const [disLike, setdisLike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(Like + 1)}>👍{Like}</button>
      <button onClick={() => setdisLike(disLike + 1)}>👎{disLike}</button>
    </div>
  );
}
//------------------------ function movie---------------------------

function MovieList({ movieList, setMovieList }) {
  const [name, setName] = useState('');
  const [poster, setPoster] = useState('');
  const [rating, setRating] = useState('');
  const [summary, setSummary] = useState('');
  const AddMovies = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
    };

    setMovieList([...movieList, newMovie]);
  };
  return (
    <>
      <div className="add-movie-form">
        <input
          onChange={event => {
            setName(event.target.value);
          }}
          placeholder="Name"
        />
        <input
          onChange={event => {
            setPoster(event.target.value);
          }}
          placeholder="Poster"
        />
        <input
          onChange={event => {
            setRating(event.target.value);
          }}
          placeholder="Rating"
        />
        <input
          onChange={event => {
            setSummary(event.target.value);
          }}
          placeholder="Summary"
        />

        <p>name:{name}</p>
        <p>poster:{poster}</p>
        <p>rating:{rating}</p>
        <p>summary:{summary}</p>

        <button onClick={AddMovies}>Add Movie</button>
      </div>

      <div className="movie-list">
        {movieList.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
    </>
  );
}
//---------------------------------color------

function AddColor() {
  // const [color, setColor] = useState('deepskyblue');
  const [color, setColor] = useState('color');

  const styles = {
    backgroundColor: color,
  };

  // const colorList = ['deepskyblue', 'orange', 'crimson'];

  const initial_color = ['deepskyblue', 'blue', 'crimson'];
  const [colorList, setColorList] = useState(initial_color);

  return (
    <div>
      <input
        value={color}
        onChange={event => setColor(event.target.value)}
        style={styles}
      />
      <button
        onClick={() => {
          setColorList([...colorList, color]);
          // we r copying colorList---immutability...lets developer sleep
        }}
      >
        Add color
      </button>
      {colorList.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
      {/* value of color is updated by react */}
    </div>
  );
}

function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: '25px',
    width: '200px',
    marginTop: '10px',
  };

  return <div style={styles}></div>;
}
export default App;
