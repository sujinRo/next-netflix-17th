'use client';

import { useQuery } from '@tanstack/react-query';
import {
  getUpcomingMovies,
  getNowPlayingMovies,
  getHorrorMovies,
} from '../../service/movies';
import { getAnimations, getTopRatedTvShows } from '../../service/tvshows';
import { IMovie, ITvShow } from '@/interface/interface';
import Bar from '@/components/HomePage/Bar';
import MovieList from '../../components/HomePage/MovieList';
import TvShowList from '../../components/HomePage/TvShowList';
import Footer from '../../components/Footer';
import styled from 'styled-components';

const HomePageBox = styled.div`
  width: 375px;
`;

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  object-fit: cover;
  height: 415px;
  width: 375px;
`;

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
    <HomePageBox>
      <Wrapper>
        {/* 이미지 */}
        <Bar />
      </Wrapper>

      <MovieList title={'Previews'} videos={upcomingMovies} isCircle={true} />
      <MovieList
        title={'Now Playing'}
        videos={nowPlayingMovies}
        isCircle={false}
      />
      <MovieList
        title={'Horror Movies'}
        videos={horrorMovies}
        isCircle={false}
      />
      <TvShowList title={'Animations'} videos={animations} />
      <TvShowList title={'Top Rated TV Shows'} videos={topRatedTvShows} />

      <Footer />
    </HomePageBox>
  );
}
