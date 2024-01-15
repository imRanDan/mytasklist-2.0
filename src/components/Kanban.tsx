import React from 'react'
import PlusIcon from '@/icons/PlusIcon'

function Kanban() {
  return (
    <div className='m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]'>
      <div className='m-auto'>
        <button className='h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-grey-800 border-2 border-grey-900 p-4 ring-green-500 hover:ring-2 flex gap-2'>
          <PlusIcon/> Add Column
        </button>
      </div>
    </div>
  )
}

export default Kanban