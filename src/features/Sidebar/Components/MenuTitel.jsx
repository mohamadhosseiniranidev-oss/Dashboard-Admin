import React from 'react'

function MenuTitel({id,title}) {
  return (
    <div className='w-full h-[40px] text-[#333] px-3 flex items-center cursor-default'>{title + " :"}</div>
  )
}

export default MenuTitel