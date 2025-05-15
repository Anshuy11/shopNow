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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsList.map(product => (
          <div key={product.id} className="border rounded-xl shadow-md p-4">
            <img src={product.image} alt={product.title} className="h-48 object-contain w-full mb-4" />
            <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default index
