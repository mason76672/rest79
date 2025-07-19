import React from 'react';

const BestDelivered = () => {
  return (
    <section className="bg-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Best <span className="text-orange-400">Delivered</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Breakfast Specials Card */}
          <div className="bg-gray-700 rounded-3xl p-8 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Breakfast special"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold mb-4">Breakfast Specials</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Explore our top-rated food categories, crafted to satisfy every craving from delicious breakfasts
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 text-3xl font-bold">$99/-</span>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Second Breakfast Special */}
          <div className="bg-gray-700 rounded-3xl p-8 relative overflow-hidden">
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">Breakfast Specials</h3>
              <p className="text-gray-300 text-sm mb-6">
                Explore our top-rated food categories, crafted to satisfy every craving from delicious breakfasts
              </p>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Pizza special"
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Hot Deal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestDelivered;