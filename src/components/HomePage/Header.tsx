import { SiNetflix } from 'react-icons/si';
import styled from 'styled-components';
//import Link from 'next/link';

const Wrapper = styled.div`
  position: absolute;
  position: fixed;
  padding: 33px 0 15px 0;
  background-color: black;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  width: 375px;
  height: 35px;
  justify-content: space-around;
`;

const Text = styled.div`
  font-size: 17.2px;
  font-weight: 400;
  color: white;
  cursor: pointer;
`;

export default function Header() {
  return (
    <Wrapper>
      <Bar>
        <SiNetflix size={'35px'} color="#B1060F" />
        <Text>TV Shows</Text>
        <Text>Movies</Text>
        <Text>My List</Text>
      </Bar>
    </Wrapper>
  );
}
