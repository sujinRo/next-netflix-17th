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
      <h2>{title}</h2>
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

const VideoImg = styled.img`
  width: 103px;
  height: 161px;
  border-radius: 2px;
`;

const VideoListBox = styled.div``;
