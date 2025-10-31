import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Leaf, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { mockProducts, mockNews } from '../mockData';

const Home = () => {
  const stats = [
    { icon: Award, label: 'Years of Excellence', value: '50+' },
    { icon: Users, label: 'Tea Workers', value: '500+' },
    { icon: Leaf, label: 'Hectares of Plantation', value: '1,200+' },
    { icon: TrendingUp, label: 'Annual Production (Tons)', value: '800+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/namagamba.jpg')",

            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Sidamanik Heritage Tea
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Experience the rich tradition of Indonesian tea, cultivated with passion and preserved through generations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg group transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn Our Story
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-none bg-white"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-3xl font-bold text-green-900 mb-2">{stat.value}</h3>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight">
                Our Heritage, Your Experience
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                For over five decades, Sidamanik Heritage Tea has been at the forefront of Indonesian tea cultivation. Nestled in the lush highlands of North Sumatra, our plantations benefit from ideal climate conditions that produce tea of exceptional quality.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We combine traditional tea-making methods passed down through generations with modern sustainable farming practices, ensuring every cup tells a story of heritage and excellence.
              </p>
              <Link to="/about">
                <Button
                  size="lg"
                  className="bg-green-700 hover:bg-green-800 text-white group transition-all duration-300"
                >
                  Discover More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1758390276194-3e400df2b224?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHx0ZWElMjBoZXJpdGFnZXxlbnwwfHx8fDE3NjE3NDc2MTd8MA&ixlib=rb-4.1.0&q=85"
                  alt="Tea Heritage"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">Our Premium Selection</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our range of carefully crafted teas, each with its unique character and flavor profile
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockProducts.slice(0, 3).map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-none"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-700 font-semibold">{product.type}</span>
                    <Link to="/products">
                      <Button variant="ghost" size="sm" className="text-green-700 hover:text-green-900">
                        Learn More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">Latest News & Updates</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed about our latest initiatives, community programs, and sustainability efforts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockNews.slice(0, 3).map((news) => (
              <Card
                key={news.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-none"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                      {news.category}
                    </span>
                    <span className="text-xs text-gray-500">{news.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-green-900 mb-2 line-clamp-2">{news.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{news.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Our Heritage?</h2>
          <p className="text-xl mb-8 text-green-100">
            Get in touch with us to learn more about our products or visit our plantation
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-green-900 hover:bg-green-50 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
