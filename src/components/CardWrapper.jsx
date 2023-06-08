import React from 'react'
import Card from './Card'
const CardWrapper = ({base_title,list}) => {


    React.useEffect(() => {
           console.log(list)

    }, [list])
    
  return (
    <div className="">
    <div
      className="max-w-screen-lg mx-auto pr-8 flex flex-col 
           justify-center w-full h-full text-white"
    >
      <div>
        <p
          className="text-4xl font-bold inline border-gray-500">
         {base_title}
        </p>
      </div>
      <div
        className="w-full grid grid-cols-2 sm:grid-cols-3 
          gap-8 text-center py-8 px-8 sm:px-0 "
      >
      {list&&list.map((c)=><Card src={c.src} id={c.id} title={c.title} qty={c.qty}/>
      )} 

      </div>
    </div>
  </div>
  )
}

export default CardWrapper