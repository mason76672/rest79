import React from 'react';

const MeetChefs = () => {
  return (
    <section className="bg-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Meet Our <span className="text-orange-400">Chefs</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-700 rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&w=500"
                alt="Head Chef"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-white text-3xl font-bold">Our Expert Chef Team</h3>
              <p className="text-gray-300 leading-relaxed">
                Our expert chefs bring passion and creativity to every dish, ensuring an unforgettable dining experience. With years of experience and a love for culinary excellence, they create masterpieces that tell a story with every bite.
              </p>
              <div className="space-y-2">
                <div className="text-orange-400 font-semibold">Chef Marco Antonio</div>
                <div className="text-gray-400 text-sm">Head Chef & Culinary Director</div>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetChefs;