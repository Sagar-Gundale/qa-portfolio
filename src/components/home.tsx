import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectCard from "./ProjectCard";
import ContactForm from "./ContactForm";

const Home = () => {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "QAFox",
      description:
        "The main goal of this project is to automated tasks and website's key features — such as navigation, alerts, Screenshot etc",
      image:
        "https://www.qafox.com/wp-content/uploads/2019/07/Navigate-URL-Task.png",
      technologies: ["Java", "Selenium", "Eclipse"],
      link: "https://github.com/Sagar-Gundale/Selenium-Project",
    },
    {
      id: 2,
      title: "Automated Testing Framework using TestNG",
      description:
        "This project focuses on developing an automated testing framework using TestNG",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*FPDZl0xTJNEucEkedlxmtw.jpeg",
      technologies: ["Java", "TestNG"],
      link: "https://github.com/Sagar-Gundale/TestNG-Project",
    },
    {
      id: 3,
      title: "WebShop",
      description:
        "A productivity application for organizing tasks and managing deadlines.",
      image:
        "https://documentation.tricentis.com/sap/tta_cloud_solex/en/content/create_tests/images/webshop.png",
      technologies: ["Tosca", "Automation testing"],
      link: "https://github.com/Sagar-Gundale",
    },
  ];

  // Skills data
  const skills = [
    {
      category: "Manual Testing",
      items: [
        "Test Case Execution",
        "Regression Testing",
        "Bug Identification",
        "Functional Testing",
        "User Acceptance Testing (UAT)",
        "Cross-browser",
      ],
    },
    {
      category: "Automation Testing",
      items: [
        "Selenium WebDriver",
        "TestNG",
        "Data-Driven Testing",
        "Page Object Model",
        "Java",
      ],
    },
    {
      category: "Methodologies",
      items: ["Waterfall", "Agile", "V- Model", "STLC"],
    },
    {
      category: "Tools",
      items: ["GitHub", "Selenium", "TesNG", "Eclipse", "Tosca"],
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <HeroSection />

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 mb-4">
                I am a results-driven Software Test Engineer with a strong
                foundation in both manual and automated testing. With
                proficiency in Java, Selenium, TestNG, and Eclipse, I leverage
                industry-standard testing methodologies to ensure software
                quality and performance across all stages of the SDLC (Software
                Development Life Cycle).
              </p>
              <p className="text-lg text-gray-600">
                In manual testing, I excel in test case design, regression
                testing, exploratory testing, and bug tracking to uncover
                critical issues and guarantee a seamless user experience. On the
                automation front, I specialize in building robust, scalable test
                frameworks using Selenium WebDriver and TestNG, optimizing test
                efficiency and enhancing the CI/CD pipeline for continuous
                integration and delivery.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://i.postimg.cc/vTYYV3S9/1722612109087-01-removebg-preview-modified-removebg-preview-1.png"
                alt="Profile"
                className="rounded-lg shadow-lg w-full max-w-md h-auto"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              My Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Here's a selection of my recent work. Each project presented
              unique challenges and opportunities to create something meaningful
              and impactful.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  link={project.link}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mb-12">
            I've developed a diverse set of skills throughout my career,
            allowing me to tackle projects from multiple angles and deliver
            comprehensive solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mb-12">
              Interested in working together? Feel free to reach out using the
              contact form below. I'm always open to discussing new projects,
              creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <ContactForm />
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <p className="flex items-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      sagarpg823@gmail.com
                    </p>
                    <p className="flex items-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      +91 (8080921173)
                    </p>
                    <p className="flex items-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Pune, Maharashtra India
                    </p>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-medium mb-3 text-gray-800">
                      Connect
                    </h4>
                    <div className="flex space-x-4">
                      <a
                        href="https://github.com/Sagar-Gundale"
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/sagar-gundale1/"
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
