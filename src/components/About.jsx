import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col
          justify-evenly items-center'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'
          >{title}</h3>
        </div>

      </motion.div>
    </Tilt>

  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>소개</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("","", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        저는 개인 쇼핑몰, 암호화폐 거래소, 게임, 코인 등을 만들면서 코딩을 공부해왔습니다.
        특히 자바스크립트를 활용한 리액트 라이브러리에 관심이 많습니다. 최근에는 three.js를
        공부중에 있으며, 더불어 블렌더를 학습하면서 추후 원하는 3d 모델링을 구현할 계획입니다.
        보다 창의적인 프로젝트에 흥미가 많으며 앞으로도 다양한 프로젝트에 도전할 계획입니다.
        아래는 제가 그동안 공부했던 스택 및 프로젝트 입니다.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>

    </>
    
  )
}

export default SectionWrapper(About, "about");