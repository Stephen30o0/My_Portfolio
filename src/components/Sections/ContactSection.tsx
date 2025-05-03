import React, { useEffect, useState } from 'react';
import { GithubIcon, MailIcon, MapPinIcon } from 'lucide-react';

export const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    const section = document.getElementById('contact');
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch('https://formspree.io/f/mjkwypwp', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess('Thanks for reaching out! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSuccess(data.error || 'Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      setSuccess('Oops! Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#1D1E2C] dark:bg-[#0A0A0F] text-[#F8F4E3]">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F8F4E3] inline-block relative">
            Get In Touch
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#EB6424]"></span>
          </h2>
          <p className="text-[#F8F4E3]/70 max-w-2xl mx-auto">
            Interested in working together or have questions about my projects?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-[#F8F4E3]/5 backdrop-blur-sm p-6 rounded-lg border border-[#F8F4E3]/10">
              <h3 className="text-xl font-semibold mb-6 text-[#F8F4E3] flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#EB6424] flex items-center justify-center mr-3">
                  <MailIcon className="w-4 h-4 text-white" />
                </span>
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#F8F4E3]/10 flex items-center justify-center mr-4 mt-1">
                    <MailIcon className="w-5 h-5 text-[#EB6424]" />
                  </div>
                  <div>
                    <h4 className="text-[#F8F4E3] font-medium mb-1">Email</h4>
                    <a href="mailto:koreolurinola@gmail.com" className="text-[#F8F4E3]/70 hover:text-[#EB6424] transition-colors duration-300">
                      koreolurinola@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#F8F4E3]/10 flex items-center justify-center mr-4 mt-1">
                    <MapPinIcon className="w-5 h-5 text-[#EB6424]" />
                  </div>
                  <div>
                    <h4 className="text-[#F8F4E3] font-medium mb-1">
                      Location
                    </h4>
                    <p className="text-[#F8F4E3]/70">Kigali, Rwanda</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#F8F4E3]/10 flex items-center justify-center mr-4 mt-1">
                    <GithubIcon className="w-5 h-5 text-[#EB6424]" />
                  </div>
                  <div>
                    <h4 className="text-[#F8F4E3] font-medium mb-1">GitHub</h4>
                    <a href="https://github.com/Stephen30o0" target="_blank" rel="noopener noreferrer" className="text-[#F8F4E3]/70 hover:text-[#EB6424] transition-colors duration-300">
                      github.com/Stephen30o0
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-[#F8F4E3] font-medium mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#F8F4E3]/10 rounded-full text-sm">
                    English (Fluent)
                  </span>
                  <span className="px-3 py-1 bg-[#F8F4E3]/10 rounded-full text-sm">
                    Yoruba (Native)
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-[#F8F4E3]/5 backdrop-blur-sm p-6 rounded-lg border border-[#F8F4E3]/10">
              <h3 className="text-xl font-semibold mb-6 text-[#F8F4E3] flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#086375] flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="m10 13-2 2 2 2"></path>
                    <path d="m14 17 2-2-2-2"></path>
                  </svg>
                </span>
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#F8F4E3]/70 mb-1" htmlFor="name">
                    Name
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-[#F8F4E3]/40">{'>'}</span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#F8F4E3]/10 border border-[#F8F4E3]/20 rounded-lg py-2 pl-8 pr-4 text-[#F8F4E3] placeholder-[#F8F4E3]/30 focus:outline-none focus:ring-2 focus:ring-[#086375] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F8F4E3]/70 mb-1" htmlFor="email">
                    Email
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-[#F8F4E3]/40">{'>'}</span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#F8F4E3]/10 border border-[#F8F4E3]/20 rounded-lg py-2 pl-8 pr-4 text-[#F8F4E3] placeholder-[#F8F4E3]/30 focus:outline-none focus:ring-2 focus:ring-[#086375] focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F8F4E3]/70 mb-1" htmlFor="message">
                    Message
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-[#F8F4E3]/40">{'>'}</span>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-[#F8F4E3]/10 border border-[#F8F4E3]/20 rounded-lg py-2 pl-8 pr-4 text-[#F8F4E3] placeholder-[#F8F4E3]/30 focus:outline-none focus:ring-2 focus:ring-[#086375] focus:border-transparent"
                      placeholder="Type your message here..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#086375] hover:bg-[#086375]/90 text-white rounded-lg transition-colors duration-300 flex items-center justify-center group"
                  disabled={loading}
                >
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                {success && (
                  <div className="text-center text-sm mt-2" style={{ color: success.startsWith('Thanks') ? '#8DB580' : '#EB6424' }}>
                    {success}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
