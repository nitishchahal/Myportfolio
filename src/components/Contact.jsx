import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({ message: "", type: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setFormStatus({ message: "", type: "" });

    try {
      const response = await fetch(
        "https://server-portfolio-3.onrender.com/api/contact/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setFormStatus({ message: "Message sent successfully!", type: "success" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus({ message: error.message, type: "error" });
    } finally {
      setIsSending(false);
    }
  };

  // Variants for animations
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 mt-5 font-poppins"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Get In <span className="text-teal">Touch</span>
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </motion.p>

        {/* Main Container */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <motion.div
            className="lg:w-1/2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeUp} custom={0.2}>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal bg-white dark:bg-gray-800"
                  />
                </motion.div>
                <motion.div variants={fadeUp} custom={0.3}>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal bg-white dark:bg-gray-800"
                  />
                </motion.div>
              </div>

              <motion.div variants={fadeUp} custom={0.4}>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal bg-white dark:bg-gray-800"
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={0.5}>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal bg-white dark:bg-gray-800"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSending}
                className="w-full md:w-auto px-8 py-3 bg-teal text-white rounded-lg font-medium hover:bg-teal-600 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSending ? "Sending..." : "Send Message"}
              </motion.button>
            </form>

            {formStatus.message && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mt-6 p-4 rounded-lg ${
                  formStatus.type === "success"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                }`}
              >
                {formStatus.message}
              </motion.div>
            )}
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg h-full">
              <motion.h3
                className="text-2xl font-bold mb-6 font-poppins"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Contact Information
              </motion.h3>

              <div className="space-y-6">
                {[
                  {
                    icon: "fa-map-marker-alt",
                    title: "Location",
                    info: "Kathua, J&K",
                  },
                  {
                    icon: "fa-envelope",
                    title: "Email",
                    info: "nitishchoudharyc2@gmail.com",
                  },
                  { icon: "fa-phone-alt", title: "Phone", info: "+91 (600) 655-6223" },
                  {
                    icon: "fa-clock",
                    title: "Working Hours",
                    info: "Mon-Fri: 9AM - 5PM",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start"
                    variants={fadeUp}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="bg-teal/10 p-3 rounded-lg mr-4">
                      <i className={`fas ${item.icon} text-teal`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{item.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    {
                      href: "https://x.com/NitishChahal_",
                      icon: "fab fa-twitter",
                    },
                    {
                      href: "https://www.linkedin.com/in/nitish-choudhary-mr-13-jatt/",
                      icon: "fab fa-linkedin-in",
                    },
                    {
                      href: "https://www.instagram.com/jk08edits/",
                      icon: "fab fa-instagram",
                    },
                    {
                      href: "https://github.com/nitishchahal",
                      icon: "fab fa-github",
                    },
                    {
                      href: "https://www.behance.net/nitishchoudhary11/appreciated",
                      icon: "fab fa-behance",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon text-xl text-gray-600 dark:text-gray-300 hover:text-teal transition"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className={social.icon}></i>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
