import React from 'react'
import clsx from 'clsx'

function TableRow({children ,isEven}) {
  return (
    <div className={clsx("w-full flex justify-between items-center p-5  text-[var(--text-muted)]  *:flex-1", isEven ? "" : "bg-[var(--bg-primary)]")}>
      {children}
    </div>
  )
}

export default TableRow