
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Server, Database, Code, Github, Languages } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-4xl py-12">
        <div className="flex items-center justify-between mb-6">
          <motion.h2 
            className="section-title !mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Resume
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="/path-to-your-cv.pdf" download>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="skill-card">
                <Server className="h-6 w-6 text-primary" />
                <span>Node.js</span>
              </div>
              <div className="skill-card">
                <Database className="h-6 w-6 text-primary" />
                <span>SQL</span>
              </div>
              <div className="skill-card">
                <Code className="h-6 w-6 text-primary" />
                <span>API Design</span>
              </div>
              <div className="skill-card">
                <Github className="h-6 w-6 text-primary" />
                <span>Git</span>
              </div>
            </div>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <div className="space-y-4">
              <div className="skill-card">
                <Languages className="h-6 w-6 text-primary" />
                <span>English (Professional)</span>
              </div>
              <div className="skill-card">
                <Languages className="h-6 w-6 text-primary" />
                <span>Spanish (Intermediate)</span>
              </div>
              <div className="skill-card">
                <Languages className="h-6 w-6 text-primary" />
                <span>French (Basic)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div 
          className="card mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">Experience</h3>
          <div className="mb-4">
            <h4 className="font-medium">Junior Backend Developer</h4>
            <p className="text-muted-foreground">TechCorp • 2023 - Present</p>
            <ul className="list-disc list-inside mt-2 text-muted-foreground">
              <li>Developed and maintained RESTful APIs</li>
              <li>Implemented database optimizations</li>
              <li>Collaborated with frontend teams</li>
            </ul>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <div>
            <h4 className="font-medium">Bachelor of Computer Science</h4>
            <p className="text-muted-foreground">Tech University • 2019 - 2023</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
