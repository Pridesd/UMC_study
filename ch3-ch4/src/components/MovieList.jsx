import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMovie } from "../api/request/movie";

const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  z-index: 1;
`;
const Title = styled.h1`
  font-weight: 400;
  @media screen and (max-width: 426px) {
    font-size: 1.25rem;
  }
`;
const MovieListContainer = styled.div`
  position: relative;
  display: flex;
  gap: 7px;
  right: ${({ loc }) => loc}px;
  transition: all 0.4s ease-in-out;
`;

const PrevBtn = styled.div`
  position: absolute;
  z-index: 2;
  background-color: #ffffff85;
  color: black;
  padding: 1rem 0.5rem;
  border-radius: 10px;
  top: 50%;
  :hover {
    background-color: #fff;
  }
  left: 1rem;
`;

const NextBtn = styled.div`
  z-index: 2;
  position: absolute;
  background-color: #ffffff85;
  color: black;
  padding: 1rem 0.5rem;
  border-radius: 10px;
  top: 50%;
  :hover {
    background-color: #fff;
  }
  right: 1rem;
`;

const imgURL = "https://image.tmdb.org/t/p/w200";

const MovieImg = styled.img`
  position: relative;
  border-radius: 10px;
  width: 40vw;
  top: 0;
  transition: all 0.4s ease-in-out;
  :hover {
    top: -20px;
  }
  @media screen and (max-width: 426px) {
    width: 20vw;
  }
`;

function MovieList({ genre }) {
  const [movies, setMovies] = useState([]);
  const [loc, setLoc] = useState(0);
  useEffect(() => {
    getMovieData(genre);
  }, [genre]);

  const prev = () => {
    if (loc <= 0) return;
    setLoc((prev) => (prev -= 1000));
  };

  const next = () => {
    if (loc + 1000 > (movies.length - 4) * 200) return;
    setLoc((prev) => (prev += 1000));
  };
  const getMovieData = async (genre) => {
    const response = await getMovie(genre);
    setMovies([...response.data.results]);
  };

  return (
    <Container>
      <Title>{genre}</Title>
      <PrevBtn onClick={prev}>{"<"}</PrevBtn>
      <MovieListContainer loc={loc}>
        {movies?.map((movie, index) => (
          <MovieImg
            key={`${index}-${genre}movie`}
            src={`${imgURL}${movie.poster_path}`}
          />
        ))}
      </MovieListContainer>
      <NextBtn onClick={next}>{">"}</NextBtn>
    </Container>
  );
}

export default MovieList;
