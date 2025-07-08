import GlobalSearch from "@/components/GlobalSearch";
import React, { useEffect, useMemo, useState } from "react";

const index = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300); // 300ms debounce time

    return () => clearTimeout(timer); // Clear timeout on unmount or query change
  }, [query]);

  //to call api as soon as page loads
  useEffect(() => {
    ProductListFunc();
  }, []);
  // fetch api data
  const ProductListFunc = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setProductsList(result))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };
  // filter logic for universal search with debounce logic
  const filteredData = useMemo(() => {
    if (!debouncedQuery) return productsList;

    return productsList.filter((item) =>
      Object.values(item).some((value) =>
        value?.toString().toLowerCase().includes(debouncedQuery.toLowerCase())
      )
    );
  }, [debouncedQuery, productsList]);

  return (
    <>
      <div className="p-6">
        <div className="w-full">
          <GlobalSearch
            filteredData={filteredData}
            setQuery={setQuery}
            query={query}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {filteredData.map((product) => (
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
              <h5 className="text-gray-600 mb-2 text-[20px]">
                ${product.price}
              </h5>
              <div className="text-[6px] text-gray-500 line-clamp-2 ">
                {product.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
