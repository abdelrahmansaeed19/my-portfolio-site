
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-4xl py-12">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to new opportunities and collaborations.
                Feel free to reach out!
              </p>
              <div className="space-y-4">
                <a href="mailto:contact@example.com" className="flex items-center hover:text-primary">
                  <Mail className="h-5 w-5 mr-2" />
                  contact@example.com
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <img alt="Contact illustration" className="w-full h-auto rounded-lg" src="https://images.unsplash.com/photo-1581303708722-80d3c511d9eb" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
