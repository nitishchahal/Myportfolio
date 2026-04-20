import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formStatus, setFormStatus] = useState({ message: "", type: "" });
  const [isSending, setIsSending] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setFormStatus({ message: "", type: "" });

    emailjs
      .sendForm(
        "service_yu5ybeu",
        "template_fn27s7i",
        form.current,
        "02VVeEUEAX3ncdVXS"
      )
      .then(
        () => {
          setFormStatus({
            message: "✅ Message sent successfully!",
            type: "success",
          });
          form.current.reset();
        },
        () => {
          setFormStatus({
            message: "❌ Failed to send message. Try again later.",
            type: "error",
          });
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 mt-5 font-poppins text-light-text dark:text-dark-text">
          Get In{" "}
          <span className="text-light-accent dark:text-dark-accent">
            Touch
          </span>
        </h2>

        <p className="text-center mb-12 max-w-2xl mx-auto
                      text-light-textMuted dark:text-dark-textMuted">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* ===== Contact Form ===== */}
          <div className="lg:w-1/2">
       <form ref={form} onSubmit={handleSubmit} className="space-y-6">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* NAME */}
    <div>
      <label className="block mb-2 font-medium text-light-text dark:text-dark-text">
        Your Name
      </label>

      <div className="relative group">
        <i className="
          fas fa-user
          absolute left-4 top-1/2 -translate-y-1/2
          text-light-textMuted dark:text-dark-textMuted
          group-focus-within:text-light-accent dark:group-focus-within:text-dark-accent
          transition
        " />

        <input
          type="text"
          name="user_name"
          placeholder="Enter your name"
          required
          className="
            w-full pl-12 pr-4 py-3 rounded-lg
            bg-light-surface dark:bg-dark-surface
            border border-light-border dark:border-dark-border
            text-light-text dark:text-dark-text
            placeholder:text-light-textMuted dark:placeholder:text-dark-textMuted

            focus:ring-2 focus:ring-light-accent
            focus:border-light-accent

            transition-all duration-300
          "
        />
      </div>
    </div>

    {/* EMAIL */}
    <div>
      <label className="block mb-2 font-medium text-light-text dark:text-dark-text">
        Email Address
      </label>

      <div className="relative group">
        <i className="
          fas fa-envelope
          absolute left-4 top-1/2 -translate-y-1/2
          text-light-textMuted dark:text-dark-textMuted
          group-focus-within:text-light-accent dark:group-focus-within:text-dark-accent
          transition
        " />

        <input
          type="email"
          name="user_email"
          placeholder="Enter your email"
          required
          className="
            w-full pl-12 pr-4 py-3 rounded-lg
            bg-light-surface dark:bg-dark-surface
            border border-light-border dark:border-dark-border
            text-light-text dark:text-dark-text
            placeholder:text-light-textMuted dark:placeholder:text-dark-textMuted

            focus:ring-2 focus:ring-light-accent
            focus:border-light-accent

            transition-all duration-300
          "
        />
      </div>
    </div>
  </div>

  {/* SUBJECT */}
  <div>
    <label className="block mb-2 font-medium text-light-text dark:text-dark-text">
      Subject
    </label>

    <div className="relative group">
      <i className="
        fas fa-tag
        absolute left-4 top-1/2 -translate-y-1/2
        text-light-textMuted dark:text-dark-textMuted
        group-focus-within:text-light-accent dark:group-focus-within:text-dark-accent
        transition
      " />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="
          w-full pl-12 pr-4 py-3 rounded-lg
          bg-light-surface dark:bg-dark-surface
          border border-light-border dark:border-dark-border
          text-light-text dark:text-dark-text
          placeholder:text-light-textMuted dark:placeholder:text-dark-textMuted

          focus:ring-2 focus:ring-light-accent
          focus:border-light-accent

          transition-all duration-300
        "
      />
    </div>
  </div>

  {/* MESSAGE */}
  <div>
    <label className="block mb-2 font-medium text-light-text dark:text-dark-text">
      Your Message
    </label>

    <div className="relative group">
      <i className="
        fas fa-comment
        absolute left-4 top-4
        text-light-textMuted dark:text-dark-textMuted
        group-focus-within:text-light-accent dark:group-focus-within:text-dark-accent
        transition
      " />

      <textarea
        name="message"
        rows="5"
        placeholder="Write your message..."
        required
        className="
          w-full pl-12 pr-4 py-3 rounded-lg
          bg-light-surface dark:bg-dark-surface
          border border-light-border dark:border-dark-border
          text-light-text dark:text-dark-text
          placeholder:text-light-textMuted dark:placeholder:text-dark-textMuted

          focus:ring-2 focus:ring-light-accent
          focus:border-light-accent

          transition-all duration-300
        "
      />
    </div>
  </div>

  {/* BUTTON */}
  <button
    type="submit"
    disabled={isSending}
    className="
      w-full md:w-auto px-8 py-3 rounded-lg font-medium
      bg-light-accent text-snow
      dark:bg-dark-accent dark:text-charcoal
      hover:opacity-90 transition
    "
  >
    {isSending ? "Sending..." : "Send Message"}
  </button>
</form>

            {formStatus.message && (
              <div
                className={`mt-6 p-4 rounded-lg ${
                  formStatus.type === "success"
                    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                    : "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200"
                }`}
              >
                {formStatus.message}
              </div>
            )}
          </div>

          {/* ===== Contact Info ===== */}
          <div className="lg:w-1/2">
            <div
              className="
                p-8 rounded-xl shadow-lg h-full
                bg-light-surface dark:bg-dark-surface
                border border-light-border dark:border-dark-border
              "
            >
              <h3 className="text-2xl font-bold mb-6 font-poppins text-light-text dark:text-dark-text">
                Contact Information
              </h3>

              <div className="space-y-6">
                {[
                  { icon: "map-marker-alt", label: "Location", value: "Kathua, J&K" },
                  { icon: "envelope", label: "Email", value: "nitishchoudharyc2@gmail.com" },
                  
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div
                      className="
                        p-3 rounded-lg mr-4
                        bg-light-accent/10 dark:bg-dark-accent/10
                      "
                    >
                      <i
                        className={`fas fa-${item.icon}
                                    text-light-accent dark:text-dark-accent`}
                      ></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-light-text dark:text-dark-text">
                        {item.label}
                      </h4>
                     <p className="text-light-textMuted dark:text-dark-textMuted">
  {item.label === "Email" ? (
    <a
      href={`mailto:${item.value}`}
      className="hover:text-light-accent dark:hover:text-dark-accent transition"
    >
      {item.value}
    </a>
  ) : item.label === "Phone" ? (
    <a
      href={`tel:${item.value.replace(/\D/g, "")}`}
      className="hover:text-light-accent dark:hover:text-dark-accent transition"
    >
      {item.value}
    </a>
  ) : (
    item.value
  )}
</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div className="mt-8">
                <h4 className="font-bold mb-4 text-light-text dark:text-dark-text">
                  Follow Me
                </h4>
                <div className="flex space-x-4 text-light-accent dark:text-dark-accent">
                  <a href="https://x.com/NitishChahal_" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/nitish-choudhary-mr-13-jatt/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </a>
                  <a href="https://www.instagram.com/jk08edits/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="https://github.com/nitishchahal" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github text-xl"></i>
                  </a>
                  <a href="https://www.behance.net/nitishchoudhary11/appreciated" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-behance text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
