import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you soon.',
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '0895603318877',
      link: 'tel:0895603318877',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'petensarman13@gmail.com',
      link: 'mailto:petensarman13@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'North Sumatra, Indonesia',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 8:00 AM - 5:00 PM',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1462892/pexels-photo-1462892.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-lg font-bold text-green-900 mb-2">{info.title}</h3>
                  {info.link !== '#' ? (
                    <a
                      href={info.link}
                      className="text-gray-600 hover:text-green-700 transition-colors duration-200"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-green-900 mb-4">Send Us a Message</h2>
                <p className="text-lg text-gray-600">
                  Have questions about our products or want to visit our plantation? Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-green-700 hover:bg-green-800 text-white group transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-green-900 mb-4">Visit Our Plantation</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Experience the beauty of our tea plantation firsthand. We offer guided tours where you can witness the tea-making process, from plucking to processing, and enjoy fresh tea tastings.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700"><strong>Tour Duration:</strong> 2-3 hours</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700"><strong>Best Time to Visit:</strong> Early morning (7-10 AM)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700"><strong>Booking:</strong> Required in advance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-gradient-to-br from-green-700 to-green-900 text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">For Business Inquiries</h3>
                  <p className="text-green-100 mb-6 leading-relaxed">
                    Interested in wholesale orders, partnerships, or distribution opportunities? Our business development team is ready to discuss how we can work together.
                  </p>
                  <a href="mailto:petensarman13@gmail.com">
                    <Button
                      size="lg"
                      className="w-full bg-white text-green-900 hover:bg-green-50 transition-all duration-300"
                    >
                      Contact Business Team
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1758390287060-aed62e4144f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHx0ZWElMjBoZXJpdGFnZXxlbnwwfHx8fDE3NjE3NDc2MTd8MA&ixlib=rb-4.1.0&q=85"
                  alt="Tea Plantation"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;