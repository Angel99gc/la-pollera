import { useState } from 'react';
import HeaderMenu from '../components/HeaderMenu';
import menuJson from '../../assets/menu.json'
import { FiImage, FiShare2, FiShoppingCart, FiStar } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import { BsArrowRight } from 'react-icons/bs';

interface Product {
  name: string;
  price: string;
  image: string;
}

export const MenuPage = () => {


  //   const filteredProducts = (category) => {
  //   return products[category].filter(product =>
  //     product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
  //     product.price >= priceRange.min &&
  //     product.price <= priceRange.max
  //   ).sort((a, b) => {
  //     if (sortBy === "name") return a.name.localeCompare(b.name);
  //     if (sortBy === "price") return a.price - b.price;
  //     return 0;
  //   });
  // };
  const toggleProductSelection = (product: Product) => {
    setSelectedProduct((!!selectedProduct && selectedProduct.name === product.name) ? undefined : product);
  };
  const onClose = () => {
    setSelectedProduct(undefined);
  };
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(undefined);


  // const products:any = {
  //   electronics: [
  //     { id: 1, name: "Wireless Earbuds", price: 129.99, image: "https://images.unsplash.com/photo-1606220838315-056192d5e927" },
  //     { id: 2, name: "Smart Watch", price: 199.99, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a" },
  //     { id: 3, name: "Tablet", price: 349.99, image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9" }
  //   ],
  //   clothing: [
  //     { id: 4, name: "Denim Jacket", price: 79.99, image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2" },
  //     { id: 5, name: "Running Shoes", price: 89.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
  //     { id: 6, name: "Cotton T-Shirt", price: 24.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" }
  //   ],
  //   homeGoods: [
  //     { id: 7, name: "Coffee Maker", price: 69.99, image: "https://images.unsplash.com/photo-1595242293935-8c6b3f1e1e19" },
  //     { id: 8, name: "Throw Pillows", price: 29.99, image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6" },
  //     { id: 9, name: "Table Lamp", price: 49.99, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c" }
  //   ],
  //   sports: [
  //     { id: 10, name: "Yoga Mat", price: 39.99, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f" },
  //     { id: 11, name: "Dumbbells", price: 59.99, image: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a" },
  //     { id: 12, name: "Basketball", price: 29.99, image: "https://images.unsplash.com/photo-1519861531473-9200262188bf" }
  //   ],
  //   books: [
  //     { id: 13, name: "Fiction Novel", price: 19.99, image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e" },
  //     { id: 14, name: "Cookbook", price: 34.99, image: "https://images.unsplash.com/photo-1589998059171-988d887df646" },
  //     { id: 15, name: "Self-Help Book", price: 24.99, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c" }
  //   ]
  // };
  // menuJson.menu.map(({ category, items }: any) => console.log(category, items))



  return (
    <>
      <HeaderMenu />
      <div>

        <ProductCard product={selectedProduct} onClose={onClose} />

        {/* Product Sections */}
        <main className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1616348436168-de43ad0db179"
                alt="Product Background"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" />
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
                The Future of Technology is Here
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 mb-8">
                Experience innovation like never before
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-blue-700 hover:scale-105 flex items-center mx-auto">
                Pre-order Now <BsArrowRight className="ml-2" />
              </button>
            </div>
          </section>

          {
            menuJson.menu.map(({ category, items }: any) => (
              <section
                key={category}
                className="max-w-7xl mx-auto px-4 py-8 mb-12"
              >
                {
                  !!category &&
                  <>
                    <h2 className="text-2xl font-bold mb-6 capitalize">{category}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {
                        items.map((product: Product) => (
                          <div
                            key={product.name}
                            onClick={() => toggleProductSelection(product)}

                            className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform cursor-pointer hover:scale-105 ${(!!selectedProduct && selectedProduct.name === product.name) ? "ring-2 ring-blue-500" : ""}`}
                          >
                            {
                              product.image === "" ?

                                <div className='flex w-full h-48 items-center'>
                                  <FiImage
                                    className="w-full h-32 object-cover"
                                  />
                                </div>
                                : <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full h-48 object-cover"
                                  loading="lazy"
                                />

                            }
                            <div className="p-4">
                              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                              <div className="flex items-center justify-between">
                                {/* TODO: COLONES O DOLARES */}
                                <span className="text-xl font-bold text-blue-600">{product.price}</span>
                                {/* <button
                                  onClick={() => toggleProductSelection(product)}
                                  className={`px-4 py-2 rounded-full transition-colors ${(!!selectedProduct && selectedProduct.name === product.name) ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                                >
                                  {!!selectedProduct ? "Selected" : "Select"}
                                </button> */}
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </>

                }
              </section>
            ))
          }
          {/* Section Bebidas. */}

          {/* Footer */}
          <footer className="bg-gray-500 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Acerca de nosotros</h3>
                <p className="text-gray-400">Innovating for a better tomorrow</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Conecta</h3>
                <div className="flex space-x-4">
                  <FiShare2 className="w-6 h-6 cursor-pointer hover:text-blue-400" />
                  <FiStar className="w-6 h-6 cursor-pointer hover:text-blue-400" />
                  {/* <FiShoppingCart className="w-6 h-6 cursor-pointer hover:text-blue-400" /> */}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contáctenos</h3>

                {/* FALTA LOGO */}
                <p className="text-gray-400">support@example.com</p>
                <p className="text-gray-400">2478-0213</p>
                <p className="text-gray-400">Centro de Monterrey, Frente al Super Cristian #3</p>

              </div>
            </div>
          </footer>

        </main>
      </div >

    </>
  )
}
export default MenuPage;