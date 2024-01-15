import React from 'react'
import PlusIcon from '@/icons/PlusIcon'
import {useState} from "react"
import { Column } from '@/types'

function Kanban() {
  const [columns, setColumns] = useState<Column[]>([])
  console.log(columns)
  return (
    <div className='m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]'>
      <div className='m-auto'>
        <button onClick={() => {
          createNewColumn();
        }}
        className='h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-grey-800 border-2 border-grey-900 p-4 ring-green-500 hover:ring-2 flex gap-2'>
          <PlusIcon/> Add Column
        </button>
      </div>
    </div>
  )

  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1},`
    }

    setColumns([...columns, columnToAdd])
  }
}

function generateId() {
  // Generate a random number btwn 0 and 1000
  return Math.floor(Math.random() * 1001)
}

export default Kanban