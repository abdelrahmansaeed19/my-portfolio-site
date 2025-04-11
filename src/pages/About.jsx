
import React from "react";
import { motion } from "framer-motion";
import { Server, Database, Code } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-4xl py-12">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Background</h3>
            <p className="text-muted-foreground">
              Passionate backend developer with a strong foundation in server-side technologies.
              Focused on creating efficient and scalable solutions while continuously learning
              new technologies and best practices.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Server className="h-5 w-5 mr-2 text-primary" />
                <span>Node.js</span>
              </div>
              <div className="flex items-center">
                <Database className="h-5 w-5 mr-2 text-primary" />
                <span>SQL</span>
              </div>
              <div className="flex items-center">
                <Code className="h-5 w-5 mr-2 text-primary" />
                <span>API Design</span>
              </div>
              <div className="flex items-center">
                <Server className="h-5 w-5 mr-2 text-primary" />
                <span>Express.js</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
