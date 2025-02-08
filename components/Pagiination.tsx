"use client"; // Mark this file as a Client Component

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

// Fetch data from Sanity (can still be done in a Server Component or an API route)
async function getData() {
  const query = `*[_type == "product"]{id, title, description, price, "imageUrl": productImage.asset->url}`;
  const fetchData = await client.fetch(query);
  return fetchData;
}

export default function Pagination() {
  const [data, setData] = useState<Product[]>([]); // Store the fetched products
  const [currentPage, setCurrentPage] = useState<number>(1);// Manage the current page
  const itemsPerPage = 6; // Number of items per page

  // Fetch data on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getData();
      setData(products);
    };
    fetchProducts();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get products for the current page
  const currentProducts = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers for pagination
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <div className="flex flex-wrap gap-4 justify-center bg-white w-full max-w-screen-lg h-full relative overflow-hidden">
        {currentProducts.map((val: Product, i: number) => (
          <div
            key={val.id || i}
            className="flex flex-col bg-white w-1/4 h-72 justify-start items-center relative overflow-hidden gap-2.5 px-6 pt-6 pb-8 shadow-md"
          >
           <Link href = {`/Products/${val.id}`} ><Image
            id={`image_${i}`}
            width={250} // Set consistent width
            height={250} // Set consistent height
            alt="Product Image"
            src={val.imageUrl}
            className="w-10 h-10 object-cover" // Ensure all images have the same size
/></Link>
            <p className="flex-grow-0 flex-shrink-0 w-[131px] text-base font-bold text-center text-[#252b42]">{val.title}</p>
            
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px] px-[3px] py-[5px]">
              <p className="flex-grow-0 flex-shrink-0 w-[52px] text-base font-bold text-center text-[#bdbdbd]">$16.48</p>
              <p className="flex-grow-0 flex-shrink-0 w-[45px] text-base font-bold text-center text-[#23856d]">{val.price}</p>
            </div>
            <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[6.07692289352417px]"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.88464" cy="8" r="8" fill="#23A6F0"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.96155" cy="8" r="8" fill="#23856D"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.03851" cy="8" r="8" fill="#E77C40"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.11542" cy="8" r="8" fill="#23856D"></circle>
                </svg>
              </div>
          </div>
        ))}
      </div>
          {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-6 mt-10">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-6 py-2 font-medium text-black rounded-full shadow-md transition-all duration-300 ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          ◀ Previous
        </button>

        {/* Page Indicator */}
        <span className="text-lg font-semibold text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-6 py-2 font-medium text-black rounded-full shadow-md transition-all duration-300 ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}
