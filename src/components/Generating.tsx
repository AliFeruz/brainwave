import loading from '../assets/loading.png'

type Props = {
    className: string;
}

const Generating = (className: Props) => {
  return (
    <div className={`${className || ''} flex items-center text-base h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem]`}>
    <img src={loading} alt="loading" className='w-5 h-5 mr-4' />
    AI is generating
    </div>
  )
}

export default Generating