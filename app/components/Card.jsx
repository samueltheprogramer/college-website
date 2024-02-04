import Image from 'next/image'
import React from 'react'

export default function Card({Name,words}) {
  return (
    <div>
        <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body h-auto ">
    <h1 className="card-title font-extrabold">{Name}</h1>
    <h2 className='h-auto '>{words}</h2>
    <div className="card-actions justify-end">
      <button className="btn bg-green-500">more...</button>
    </div>
  </div>
</div>
    </div>
  )
}
