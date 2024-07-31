import React from 'react'

function Cards({item}) {

  return (
    <>
    <div className='mt-4 my-3 max-w-screen-2xl container mx-auto md:px-20 px'>
    <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border-e-zinc-800">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white px-6 py-5">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards