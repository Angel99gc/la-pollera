import { useState } from "react";
import { FaHeart, FaStar, FaRegStar } from "react-icons/fa";

function ProductCard() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const product = {
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    shortTitle: "Premium Wireless Headphones",
    fullTitle: "Studio Pro Noise Cancelling Bluetooth Headphones - Latest Edition",
    rating: 4.5,
    totalReviews: 128,
    description: "Experience crystal-clear audio with our premium wireless headphones. Featuring advanced noise cancellation technology, comfortable over-ear design, and up to 30 hours of battery life. Perfect for music enthusiasts and professionals alike. Includes quick charging capability and premium carrying case.",
    price: 299.99,
    discountedPrice: 249.99
  };

  const RatingStars = ({ rating }: any) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="text-yellow-400" />
        ) : (
          <FaRegStar key={i} className="text-yellow-400" />
        )
      );
    }
    return <div className="flex gap-1">{stars}</div>;
  };

  const handleAddToCart = () => {
    console.log("Added to cart");
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/2 group">
          <img
            src={product.image}
            alt={product.shortTitle}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm transition-colors duration-300 hover:bg-white"
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <FaHeart
              className={`text-2xl ${isWishlisted ? "text-red-500" : "text-gray-400"}`}
            />
          </button>
        </div>

        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 truncate">
                {product.shortTitle}
              </h2>
              <p className="text-gray-600 mt-1">{product.fullTitle}</p>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center gap-2">
                <RatingStars rating={product.rating} />
                <span className="text-gray-600">
                  ({product.rating} / {product.totalReviews} reviews)
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <p className={`text-gray-700 ${isExpanded ? "" : "line-clamp-3"}`}>
                {product.description}
              </p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.discountedPrice}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  ${product.price}
                </span>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transform active:scale-95 transition-all duration-200"
                aria-label="Add to Cart"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;