"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop, slideInFromLeft, slideInFromRight } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';


const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-[#7042F88B] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#B49BFF] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            UX/UI & Frontend Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Fornecendo
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> a melhor </span>
            experiência de projeto
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Sou UX/UI Designer e Desenvolvedor Front-End com experiência em Websites, Mobile e Software. Confira meus projetos e habilidades.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Saber mais!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          width={650}
          height={650}
          draggable="false"
        />
      </motion.div>
    </motion.div>
  )
}

export default HeroContent