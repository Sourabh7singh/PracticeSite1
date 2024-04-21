import React from 'react'
import MainLeft from './MainLeft'
import MainRight from './MainRight'

const Main = () => {
  return (
    <div className='Main' style={{display: 'flex',marginTop: '3rem'}}>
        <MainLeft/>
        <MainRight/>
    </div>
  )
}

export default Main
