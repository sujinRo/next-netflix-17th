'use client';

import { useQuery } from '@tanstack/react-query';
import {
  getUpcomingMovies,
  getNowPlayingMovies,
  getHorrorMovies,
} from '../../service/movies';
import { getAnimations, getTopRatedTvShows } from '../../service/tvshows';
import { IMovie, ITvShow } from '@/interface/interface';
import MovieList from '../../components/HomePage/MovieList';
import styled from 'styled-components';

export default function HomePage() {
  const { data: upcomingMovies } = useQuery<IMovie[]>(
    ['upcomingMovies'],
    getUpcomingMovies,
  );
  const { data: nowPlayingMovies } = useQuery<IMovie[]>(
    ['nowPlayingMovies'],
    getNowPlayingMovies,
  );
  const { data: horrorMovies } = useQuery<IMovie[]>(
    ['horrorMovies'],
    getHorrorMovies,
  );
  const { data: animations } = useQuery<ITvShow[]>(
    ['animations'],
    getAnimations,
  );
  const { data: topRatedTvShows } = useQuery<ITvShow[]>(
    ['topRatedTvShows'],
    getTopRatedTvShows,
  );

  return (
    <>
      <MovieList title={'Previews'} videos={upcomingMovies} />
      {/*
      <VideoListBox>
        <h2>Now Playing</h2>
        <ul>
          {nowPlayingMovies &&
            nowPlayingMovies!.map(video => (
              <VideoImg
                key={video.id}
                src={`https://image.tmdb.org/t/p/original${video.poster_path}`}
                alt="videoImg"
              />
            ))}
        </ul>
      </VideoListBox>
      */}
    </>
  );
}

const VideoImg = styled.img`
  width: 103px;
  height: 161px;
  border-radius: 2px;
`;

const VideoListBox = styled.div``;
