"use client"

import { slideInFromTop, slideInFromLeft, slideInFromRight } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import React from 'react'

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[12px] border border-[#7042F88B] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#B49BFF] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Pense melhor com Next JS 13
          </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Fazendo aplicativos com tecnologias modernas
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Nunca perca o prazo de uma tarefa ou ideia
      </motion.div>
    </div>
  )
}

export default SkillText