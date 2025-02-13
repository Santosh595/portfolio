import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:2002santoshkar@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className=" bg-black text-white md:h-screen flex items-center justify-center">
      <div className="py-12 px-6 md:px-16 lg:px-32 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Discuss Your Project</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="md:w-1/2 bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name *" className="w-full p-2 mb-4 bg-gray-800 rounded" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email *" className="w-full p-2 mb-4 bg-gray-800 rounded" onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject *" className="w-full p-2 mb-4 bg-gray-800 rounded" onChange={handleChange} required />
            <textarea name="message" placeholder="Your message *" className="w-full p-2 mb-4 bg-gray-800 rounded" rows={4} onChange={handleChange} required></textarea>
            <button type="submit" className="w-full bg-lime-500 text-black py-2 rounded font-semibold hover:bg-lime-600 transition">Send Message</button>
          </form>
        </div>
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <p className="text-lg mb-2">📍 Bhubaneswar, Odisha, India</p>
            <p className="mb-2">📧 <a href="mailto:2002santoshkar@gmail.com" className="text-lime-500 hover:underline">2002santoshkar@gmail.com</a></p>
            <p className="mb-4">🔗 <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-lime-500 hover:underline"> <FaLinkedin size={24} />LinkedIn</a>  <a href="https://github.com/yourgithub" target="_blank" className="text-lime-500 hover:underline"> <FaGithub size={24} />GitHub</a></p>
          </div>
          <iframe className="w-full h-64 rounded-lg" src="https://www.google.com/maps?q=Bhubaneswar,Odisha,India&output=embed" allowFullScreen></iframe>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
