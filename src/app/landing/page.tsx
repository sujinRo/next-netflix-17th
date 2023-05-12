import Lottie from 'lottie-web';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  height: 46rem;
  width: 23.4375rem;
  align-items: center;
  margin-bottom: 3.261875rem;
`;

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/home');
    }, 3600);
  });

  const logo = useRef<HTMLDivElement>(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: logo.current as HTMLDivElement,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('../../../public/Lottie/29313-netflix-logo-swoop.json'),
    });
  });

  return (
    <Wrapper>
      <Content>
        <div ref={logo} />
      </Content>
    </Wrapper>
  );
}
