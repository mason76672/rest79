import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Experience the{' '}
            <span className="text-orange-400">Taste</span>{' '}
            of the World
          </h1>
          <p className="text-gray-300 text-lg">
            From classic favorites to exotic delights, explore a diverse
            menu inspired by cuisines from across the globe.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Order Now
          </button>
        </div>
        
        <div className="relative">
          <div className="relative z-10">
            <img
              src="https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Delicious ramen bowl"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-20"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-400 rounded-full opacity-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;