import React from 'react'
import {Link} from 'react-router'

function SectionFooter({count , button }) {
  return (
    <div className='border-t flex justify-between items-center border-[var(--border-light)] pt-8'>
        <div className='text-[var(--text-muted)] mb-3'>
            {count} آیتم یافت شد .
        </div>

        <Link className='px-4 py-3 border-[var(--border-light)] rounded-md text-[var(--text-primary)] border-[1px] text-sm font-medium hover:bg-[#ffffff10] ' to={button.link}>{button.title}</Link >
    </div>
  )
}

export default SectionFooter