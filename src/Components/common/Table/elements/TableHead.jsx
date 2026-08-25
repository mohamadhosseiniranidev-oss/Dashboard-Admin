import React from 'react'

function TableHead({children}) {
  return (
    <div className='w-full rounded-t-md bg-[var(--bg-primary)] flex justify-between items-center *:flex-1 p-5  text-[var(--text-muted)] '>{children}</div>
  )
}

export default TableHead