import React, { useEffect, useState } from 'react'

const index = () => {
    const [productsList, setProductsList] = useState([]);
    const [loading, setLoading] = useState(true);
    //to call api as soon as page loads
    useEffect(()=>{
        ProductListFunc()
    },[])
    const ProductListFunc=()=>{
        setLoading(true)
        fetch('https://fakestoreapi.com/products')
        .then((response)=>response.json())
        .then((result)=>setProductsList(result))
        .catch((err)=>console.error(err))
        .finally(()=>setLoading(false))
    }
    console.log(productsList,"productList")
  return (
    <>
       <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Product Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productsList.map(product => (
         <div 
  key={product.id}
  className="border rounded-xl shadow-md p-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
>
  <img
    src={product.image}
    alt={product.title}
    className="h-24 object-contain w-full mb-4"
  />
  <h4 className="font-semibold text-lg mb-2">{product.title}</h4>
  <h5 className="text-gray-600 mb-2 text-[20px]">${product.price}</h5>
  <div className="text-[6px] text-gray-500 line-clamp-2 ">{product.description}</div>
</div>

        ))}
      </div>
    </div>
    </>
  )
}

export default index
