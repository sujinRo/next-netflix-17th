'use client';

import { ITvShow } from '@/interface/interface';
import styled from 'styled-components';

type TvShowListProps = {
  title: string;
  videos: ITvShow[] | undefined;
};

export default function TvShowList({ title, videos }: TvShowListProps) {
  return (
    <VideoListContainer>
      <Title>{title}</Title>
      <VideoListBox>
        {videos &&
          videos!.map(video => (
            <VideoImg
              key={video.id}
              src={`https://image.tmdb.org/t/p/original${video.poster_path}`}
              alt="videoImg"
            />
          ))}
      </VideoListBox>
    </VideoListContainer>
  );
}

const VideoListContainer = styled.div``;

const Title = styled.h2`
  font-size: 20.92px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0 16px;
`;

const VideoImg = styled.img`
  width: 103px;
  height: 161px;
  border-radius: 2px;
  margin-right: 7px;
  object-fit: cover;

  cursor: pointer;
`;

const VideoListBox = styled.ul`
  margin: 14px 0 22px 0;
  display: flex;
  overflow-x: auto;
  padding-left: 12px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
