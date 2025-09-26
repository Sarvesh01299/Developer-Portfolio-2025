// src/components/Contact.tsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="w-full max-w-4xl mx-auto py-20 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
      <p className="text-slate-400 max-w-xl mx-auto mb-8">
        I'm currently open to new opportunities and collaborations. My inbox is always open!
      </p>
      <a 
        href="mailto:your-email@example.com" 
        className="inline-block border border-accent text-accent font-semibold py-3 px-8 rounded-lg hover:bg-accent hover:text-white transition-colors"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;