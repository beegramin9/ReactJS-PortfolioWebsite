import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Portrait from '../components/Portrait/Portrait';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Contact from '../components/Contact/Contact';
import Popup from '../components/Popup/Popup';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

import React, {useState, useEffect} from 'react'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect( () => {
    setTimeout( () => {
      setIsOpen(true);
    }, 3000);
  }, [])
  
  // 5초있다가 어떻게...? framer의 delay?
  // 5초있다가...? useState를 쓴다면 https://youtu.be/i8fAO_zyFAM, 12:47초
  // 와 여기서 setTimeout과 useEffect를 볼 줄은 몰랐네
  //todo 반응형, Section grid 수정 필요
  //todo Portrait Component 필요
  //todo Hero, BgAnimation 겹치게 해야 함
  return (
    <Layout>
        <Section /* grid */ flex row>
          <Hero/>
          {/* <BgAnimation/> */}
          <Portrait/> 
          <Popup isOpen={isOpen} setIsOpen={setIsOpen}/>
        </Section>
        <Projects />
        <Technologies/>
        <Timeline />
        <Acomplishments />
        <Contact/>
    </Layout>
  );
};

export default Home;
