import React from 'react'
import brackets from '../assets/svg/Brackets'

type Props = {
    className: string;
    children: React.ReactNode
}

const Tagline = ({className, children}: Props) => {
  return (
    <div className={`${className} tagline flex items-center`}>
    {brackets('left')}
    <div className='mx-3 text-n-3'>
    {children}
    </div>
    {brackets('right')}
    </div>
  )
}

export default Tagline