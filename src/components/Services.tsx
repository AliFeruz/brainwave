import Heading from "./Heading"
import Section from "./Section"
import service1 from '../assets/services/service-1.png'
import service2 from '../assets/services/service-2.png'
import { brainwaveServices } from "../constants"
import check from '../assets/check.svg'
import Generating from "./Generating"


const Services = () => {
  return (
    <Section id="how-to-use" crosses>
    <div className="container">
        <Heading title="Generative AI made for creators" className=""
        text="Brainwave unlocks the potential of Ai-powered applications"/>
    <div className="relative">
        <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8
        border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                <img src={service1} alt="servisec" className="w-full h-full object-cover md:object-right" 
                width={800} height={730}/>
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
                <h4 className="h4 mb-4">Smartest Ai</h4>
                <p className="body-2 mb-[3rem] text-n-3">Brainwave unlocks the potential of AI-powered applications</p>
                <ul className="body-2">
                    {brainwaveServices.map((item, index) => (
                        <li key={index} className="flex items-start py-4 border-t border-n-6">
                            <img src={check} alt="check" width={24} height={24}/>
                            <p className="ml-4">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4
            border border-n-1/10 lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2"/>
        </div>
        <div className="relative z-1 grid gap-5 lg:grid-cols-2">
        <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
                <img src={service2} alt="picture" className="h-full w-full object-cover" 
                width={630} height={750} />
            </div>
        </div>
        </div>
    </div>
    </div>
    </Section>
  )
}

export default Services