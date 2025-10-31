import React from 'react';
import { Award, Target, Eye, Heart, Users, Sprout } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Quality',
      description: 'Every leaf is handpicked with care, ensuring only the finest quality reaches your cup.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We invest in our workers and local communities, creating opportunities for sustainable growth.',
    },
    {
      icon: Sprout,
      title: 'Environmental Stewardship',
      description: 'Our sustainable farming practices protect the land for future generations.',
    },
    {
      icon: Award,
      title: 'Heritage & Excellence',
      description: 'Combining traditional methods with modern innovation to deliver exceptional tea.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:"url('/images/mamanggabar.jpg')",

            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">Discover the story behind Sidamanik Heritage Tea</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1602020277972-99978250c8bd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHx0ZWElMjBwbGFudGF0aW9ufGVufDB8fHx8MTc2MTc0NzYxMnww&ixlib=rb-4.1.0&q=85"
                alt="Tea Plantation"
                className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-green-900">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in the early 1970s, Sidamanik Heritage Tea began as a small family-owned plantation in the lush highlands of North Sumatra. What started with just a few hectares of tea plants has grown into one of Indonesia's most respected tea producers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our name "Sidamanik" reflects the rich cultural heritage of the Batak people, honoring the land and traditions that have shaped our approach to tea cultivation. For over five decades, we've remained committed to producing premium quality tea while preserving the environment and supporting local communities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, our plantation spans over 1,200 hectares of pristine highland terrain, employing more than 500 skilled workers who bring passion and expertise to every harvest. Each cup of Sidamanik Heritage Tea carries the essence of our land, our people, and our dedication to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-3xl font-bold text-green-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To produce the finest quality Indonesian tea through sustainable farming practices, while empowering local communities and preserving our cultural heritage for future generations. We strive to be a beacon of excellence in the tea industry, setting standards for quality, sustainability, and social responsibility.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-3xl font-bold text-green-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become Indonesia's leading heritage tea brand, recognized globally for our commitment to quality, sustainability, and cultural preservation. We envision a future where every cup of Sidamanik tea creates a meaningful connection between our heritage and tea lovers worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-green-900">Commitment to Sustainability</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Sidamanik Heritage Tea, sustainability isn't just a buzzword—it's woven into every aspect of our operations. We implement organic farming methods, minimize water usage through efficient irrigation systems, and maintain biodiversity by preserving natural habitats within our plantation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Organic Certification:</strong> All our teas are certified organic, free from harmful pesticides and chemicals</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Community Programs:</strong> We invest 15% of profits into education and healthcare for our workers</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Environmental Protection:</strong> Over 200 hectares dedicated to forest conservation</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Fair Trade:</strong> Ensuring fair wages and safe working conditions for all employees</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/235925/pexels-photo-235925.jpeg"
                alt="Sustainable Tea Plantation"
                className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
