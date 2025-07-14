import { useState } from 'react';
import HeaderMenu from '../components/HeaderMenu';

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
  const toggleProductSelection = (product:any) => {
    setSelectedProducts((prev:any) =>
      prev.find((p:any) => p.id === product.id)
        ? prev.filter((p:any) => p.id !== product.id)
        : [...prev, product]
    );
  };

  const [selectedProducts, setSelectedProducts] = useState([]);


  const products:any = {
    electronics: [
      { id: 1, name: "Wireless Earbuds", price: 129.99, image: "https://images.unsplash.com/photo-1606220838315-056192d5e927" },
      { id: 2, name: "Smart Watch", price: 199.99, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a" },
      { id: 3, name: "Tablet", price: 349.99, image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9" }
    ],
    clothing: [
      { id: 4, name: "Denim Jacket", price: 79.99, image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2" },
      { id: 5, name: "Running Shoes", price: 89.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
      { id: 6, name: "Cotton T-Shirt", price: 24.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" }
    ],
    homeGoods: [
      { id: 7, name: "Coffee Maker", price: 69.99, image: "https://images.unsplash.com/photo-1595242293935-8c6b3f1e1e19" },
      { id: 8, name: "Throw Pillows", price: 29.99, image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6" },
      { id: 9, name: "Table Lamp", price: 49.99, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c" }
    ],
    sports: [
      { id: 10, name: "Yoga Mat", price: 39.99, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f" },
      { id: 11, name: "Dumbbells", price: 59.99, image: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a" },
      { id: 12, name: "Basketball", price: 29.99, image: "https://images.unsplash.com/photo-1519861531473-9200262188bf" }
    ],
    books: [
      { id: 13, name: "Fiction Novel", price: 19.99, image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e" },
      { id: 14, name: "Cookbook", price: 34.99, image: "https://images.unsplash.com/photo-1589998059171-988d887df646" },
      { id: 15, name: "Self-Help Book", price: 24.99, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c" }
    ]
  };


  return (
    <>
      <HeaderMenu />
      <div>

        {/* Product Sections */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          {Object.entries(products).map(([category, _]) => (
            <section
              key={category}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6 capitalize">{category.replace(/([A-Z])/g, " $1").trim()}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products[category].map((product:any) => (
                  <div
                    key={product.id}
                    className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${selectedProducts.find((p:any)=> p.id === product.id) ? "ring-2 ring-blue-500" : ""}`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-blue-600">${product.price}</span>
                        <button
                          onClick={() => toggleProductSelection(product)}
                          className={`px-4 py-2 rounded-full transition-colors ${selectedProducts.find(p => p.id === product.id) ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                        >
                          {selectedProducts.find((p:any) => p.id === product.id) ? "Selected" : "Select"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>

      </div>

    </>
  )
}
export default MenuPage;