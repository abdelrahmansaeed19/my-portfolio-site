
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronDown, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PersonalImage from "./Prof photo.png";

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img  
            className="w-full h-full object-cover opacity-20"
            alt="Abstract background"
            src="https://images.unsplash.com/photo-1529661197280-63dc545366c8" 
          />
        </div>
        <motion.div 
          className="text-center z-10 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-8">
            <img  
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-primary shadow-xl"
              alt="Personal profile picture"
             src={PersonalImage} />
          </div>
          <h1 className="hero-text mb-6">
            Abdelrahman Saeed
          </h1>
          <p className="hero-subtitle max-w-2xl mx-auto">
            Crafting robust and scalable backend solutions with a passion for clean code and efficient systems
          </p>
          <motion.div 
            className="mt-8 flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/contact">
              <Button size="lg" className="text-lg">
                Get in Touch
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="text-lg">
                View Projects
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div 
          className="scroll-indicator"
          onClick={scrollToContent}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </section>

      {/* Bio Section */}
      <section className="section-wrapper">
        <div className="gradient-bg" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm a passionate backend developer with a strong foundation in server-side technologies.
              My journey in software development has been driven by a desire to build efficient,
              scalable solutions that make a real impact. With expertise in database design,
              API development, and system architecture, I strive to create robust applications
              that deliver exceptional performance and reliability.
            </p>
            <Link to="/resume">
              <Button size="lg" variant="outline" className="text-lg">
                <FileText className="mr-2 h-5 w-5" />
                View My Resume
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-wrapper bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">My Story</h2>
            <p className="text-lg text-muted-foreground">
              Watch this short video to learn more about my journey and passion for backend development
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
          >
            <img   
              className="w-full h-full object-cover"
              alt="Developer video placeholder"
             src="https://images.unsplash.com/photo-1665215079809-de01c6824f70" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-wrapper bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg mb-8 opacity-90">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg border-white text-white hover:bg-white hover:text-primary"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
