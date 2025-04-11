
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-4xl py-12">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Portfolio
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 overflow-hidden rounded-lg">
              <img  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" alt="E-commerce API project" src="https://images.unsplash.com/photo-1686061592689-312bbfb5c055" />
            </div>
            <h3 className="text-xl font-semibold mb-2">E-commerce API</h3>
            <p className="text-muted-foreground mb-4">
              RESTful API for an e-commerce platform built with Node.js and Express.
              Features include product management, user authentication, and order processing.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">View Project</Button>
              <a href="https://github.com/username/ecommerce-api" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-4 overflow-hidden rounded-lg">
              <img  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" alt="Task Management System project" src="https://images.unsplash.com/photo-1608403810239-ac22e2c3bac7" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Task Management System</h3>
            <p className="text-muted-foreground mb-4">
              Backend service for task management with authentication and authorization.
              Includes real-time updates and team collaboration features.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">View Project</Button>
              <a href="https://github.com/username/task-management" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
