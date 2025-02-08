"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import Image from "next/image";
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface CartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  quantity: number;
}

export default function ProductPage({ params }: { params: { productDetails: string } }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "product" && id == $id]{id, title, price, description, "imageUrl": productImage.asset->url}`;
      const data = await client.fetch(query, { id: Number(params.productDetails) });

      const foundProduct = data.find((item: Product) => item.id === Number(params.productDetails));
      setProduct(foundProduct || null);
    };

    fetchProduct();
  }, [params.productDetails]);

  const addToCart = () => {
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProduct = cart.find((item: CartItem) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold text-red-600">Product Not Found!</h1>
        <p className="text-lg text-gray-500 mt-2">It seems the product youre looking for does not exist.</p>
        <Link href="/">
          <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Go Back Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="p-8 max-w-4xl mx-auto">
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-28 items-center">
          <Image
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-[500px] rounded-lg shadow-md"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-lg text-gray-600 mt-4 w-[500px]">
            Elevate your streetwear game with our Premium Cotton Cloths, designed for ultimate comfort and effortless style. Crafted from a soft, breathable cotton blend, this delivers a cozy feel while maintaining durability for everyday wear.
            </p>
            <h1 className="text-4xl font-bold text-gray-800">${product.price.toFixed(2)}</h1>
            <div className="mt-6 flex items-center space-x-4">
              <button
                onClick={addToCart}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 shadow-md"
              >
                Add to Cart
              </button>
              <Link href="/CheckoutPage">
                <button className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 shadow-md">
                  View Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
