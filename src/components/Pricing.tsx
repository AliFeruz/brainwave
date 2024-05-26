import Section from "./Section"
import smallSphere from '../assets/4-small.png'
import stars from '../assets/pricing/stars.svg'
import Heading from "./Heading"
import PricingList from "./PricingList"
import { LeftLine, RightLine } from "./design/Pricing"


const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
    <div className="container relative z-2">
        <div className="hidden relative lg:flex justify-center mb-[6.5rem]">
        <img src={smallSphere} alt="smallsphere" className="relative z-1"
        width={255} height={255}/>
        <div className="absolute top-1/2 left-1/2 w-[60rem] 
        -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <img src={stars} alt="stars" className="w-full" width={950} height={400}/>
        </div>
        </div>
        <Heading title="Pay once use forever" className=""
        tag='Get started with Brainwave'/>
        <div className="relative">
            <PricingList/>
            <LeftLine/>
            <RightLine/>
        </div>
        <div className="flex justify-center mt-10">
            <a href="/pricing" className="text-xs font-code font-bold tracking-wider uppercase">See the full details</a>
        </div>
    </div>
    </Section>
  )
}

export default Pricing