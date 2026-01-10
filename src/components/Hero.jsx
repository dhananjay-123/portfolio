
import { logo ,herobanner} from '../assets'
import { Description } from '../constants'
import AnimatedText from './TextVariations/AnimatedText'
import Paragraph from './TextVariations/Paragraph'
import HouseCanvas from './Canvas/hero3d'

const Hero = () => {
  return (
    <div className='w-full py-1 bg-bg-primary justify-center p-7 sm:px-24 lg:px-40 '>
      <div className='flex flex-col lg:flex-row pt-25 pb-5 '>
        <div className='w-full flex flex-row py-2 justify-center lg:w-[50%]' >
        <img src={logo} alt="" className='w-20 h-20 bg-white pr-0'
          initial={{ width: 0 }}
          animate={{ width: "68px" }}
          transition={{
            duration: 2, ease: "easeInOut"
          }}

        />
        <AnimatedText
          className="text-text-primary px-8 text-lg sm:text-2xl "
          text={`Hi, I'm Dhananjay, designing products developing and always learning something new`}
        />
        

      </div>
      <div className="w-full h-[30vh] items-center justify-center flex lg:w-[50%] ">
          <img src={herobanner} alt="" />
        </div>
      </div>

      <div className='pl-5 pr-5 pt-10'>

        <div className='text-text-primary text-5xl lg:text-7xl'>Frontend <span className='text-text-muted'>Web</span> Developer</div>
      </div>

      <div className='text-accent-success pt-17 flex flex-col-reverse lg:flex-row-reverse gap-y-3 lg:items-center justify-center'>
        <div className='flex'>


          <div className=''>OPEN TO WORK</div></div>
        <div className='w-full lg:w-[25%] h-[1px] lg:m-4 bg-gray-500'></div>
        <div className='text-text-muted'>Gwalior , india</div>
        <div className='w-full lg:w-[25%] h-[1px] lg:m-4 bg-gray-500'></div>
        <div className='text-text-muted'>IST (UTC+05:30)</div>
      </div>
      <div className='flex lg:pt-20 flex-col lg:flex-row lg:text-2xl'>
        <div className='lg:w-[40%]'> <Paragraph
          value={Description} /></div>
          <div className="w-full h-[70vh] py-5 lg:h-[100vh] lg:lg:w-[60%]">
          <HouseCanvas />
        </div>
       
      </div>
      
    </div>

  )
}

export default Hero