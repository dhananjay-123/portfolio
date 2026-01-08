import React,{useRef} from 'react'
import { Description } from '../../constants'

import { useScroll,motion, useTransform } from 'framer-motion'

export default function Paragraph({value}) {


    const element = useRef(null);
    const{scrollYProgress} = useScroll({
        target:element,
        offset:['start 0.9','start 0.25']

    })

    const words = value.split(" ");
  return (
    <p className='text-text-primary flex flex-wrap leading-[14px] py-10 justify-center '
    ref={element}
    
    >
       {
        words.map((word,i) => {
            const start = i/words.length;
            const end = start + (1/words.length)
            return <Word key={i}
            range={[start,end]}
            progress={scrollYProgress}
            >{word}</Word>
        })
       } 
    </p>
  )
}

const Word = ({children,progress,range}) => {
    const characters = children.split("");
    const amount = range[1] - range[0];
    const step = amount/children.length
    return (
        <span
        className='mr-[12px] mt-[12px] relative'
        >
           
            {
                characters.map((character,i) =>{
                    const start = range[0] + (step*i);
                    const end = range[0] + (step*(i+1))
                    return <Character key={i} range={[start,end]} progress={progress} >{character}</Character>
                } )
            }
        

         </span>
    )
}

const Character = ({children,range,progress}) => {
    const opacity = useTransform(progress,range,[0,1])
    return (
        <span className='relative'>
            <span
            className='opacity-[0.1] absolute'
            >{children}</span>
            <motion.span style={{opacity:opacity}}>
            {children}
            </motion.span>
        </span>
    )
}