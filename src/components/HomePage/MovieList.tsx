'use client';

import { IMovie } from '@/interface/interface';
import styled from 'styled-components';

type MovieListProps = {
  title: string;
  videos: IMovie[] | undefined;
};

export default function MovieList({ title, videos }: MovieListProps) {
  return (
    <VideoListBox>
      <Title>{title}</Title>
      <ul>
        {videos &&
          videos!.map(video => (
            <VideoImg
              key={video.id}
              src={`https://image.tmdb.org/t/p/original${video.poster_path}`}
              alt="videoImg"
            />
          ))}
      </ul>
    </VideoListBox>
  );
}

const Title = styled.h2`
  font-size: 20.92px;
  font-weight: 700;
  color: #ffffff;
`;

const VideoImg = styled.img`
  width: 103px;
  height: 161px;
  border-radius: 2px;
`;

const VideoListBox = styled.div``;
