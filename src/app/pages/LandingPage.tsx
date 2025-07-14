import { useEffect, useState } from "react";
import { BsArrowRight, BsLightning, BsShieldCheck } from "react-icons/bs";
import { FiClock, FiShare2, FiShoppingCart, FiStar } from "react-icons/fi";


function LandingPage() {
  const [timeLeft, setTimeLeft] = useState(259200);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <BsLightning className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Exceptional performance with minimal latency"
    },
    {
      icon: <BsShieldCheck className="w-8 h-8" />,
      title: "Secure Design",
      description: "Built with top-tier security protocols"
    },
    {
      icon: <FiStar className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Crafted with premium materials for durability"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Tech Enthusiast",
      content: "This product has completely transformed my workflow!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Michael Chen",
      role: "Product Designer",
      content: "Incredible build quality and attention to detail.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
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

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Product Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">Innovating for a better tomorrow</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <FiShare2 className="w-6 h-6 cursor-pointer hover:text-blue-400" />
              <FiStar className="w-6 h-6 cursor-pointer hover:text-blue-400" />
              <FiShoppingCart className="w-6 h-6 cursor-pointer hover:text-blue-400" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">support@example.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage
