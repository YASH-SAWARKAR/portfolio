import React from "react";
import {
  Github,
  Linkedin,
  Youtube,
  Instagram,
  MapPin,
  Mail,
  ExternalLink,
  Star,
  GitFork,
} from "lucide-react";

const Portfolio = () => {
  const skills = [
    "MERN",
    "tailwindcss",
    "vue",
    "JavaScript",
    "frappe framework",
    "Git",
    "Python",
    "C++",
    "Oops",
    "Data Structures",
    "SQL",
  ];

  const projects = [
    {
      name: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution built with React and Node.js, featuring user authentication, and real-time inventory management.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "#",
    },
    {
      name: "Blog Application",
      description:
        "A modern blog platform with user authentication, post creation, and commenting features.",
      tech: ["React", "Appwrite", "TailwindCSS"],
      link: "https://github.com/YASH-SAWARKAR/_React/tree/main/12MegaBlog",
    },
    {
      name: "Frappe CRM APP",
      description:
        "A CRM is an Open Source application built using the Frappe framework to manage customer relationships and sales processes.",
      tech: ["Vue", "Typescript", "python", "Git", "frappe framework"],
      link: "https://github.com/YASH-SAWARKAR/crm",
    },
    {
      name: "JOB PORTAL",
      description:
        "A comprehensive job portal application that connects job seekers with employers, featuring job listings, applications, and user profiles.",
      tech: ["React", "MongoDB", "Express", "Node.js"],
      link: "https://github.com/YASH-SAWARKAR/job_portal_full_stack",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex">
      {/* Left Sidebar - Profile Info */}
      <div className="w-80 bg-white/10 backdrop-blur-lg p-8 border-r border-white/20">
        {/* Profile Photo */}
        <div className="text-center mb-8">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 shadow-lg">
            <img
              src="/public/avatar.jpg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover object-center"
            />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Yash</h1>
          <p className="text-lg text-gray-300 mb-1">Software Engineer </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center text-gray-300">
            <Mail className="w-5 h-5 mr-4 text-gray-400" />
            <span className="text-sm">sawarkarwork@gamil.com</span>
          </div>
          <div className="flex items-center text-gray-300">
            <MapPin className="w-5 h-5 mr-4 text-gray-400" />
            <span className="text-sm">Nagpur, India</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
            Connect
          </h3>
          <div className="space-y-3">
            <a
              href="https://github.com/YASH-SAWARKAR"
              className="flex items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group border border-white/10"
            >
              <Github className="w-5 h-5 text-gray-400 group-hover:text-white mr-4 transition-colors" />
              <span className="text-gray-300 group-hover:text-white transition-colors">
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/yash-sawarkar-9b8857298/"
              className="flex items-center p-3 rounded-xl bg-white/5 hover:bg-blue-600/20 transition-all duration-300 group border border-white/10 hover:border-blue-400/50"
            >
              <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300 mr-4 transition-colors" />
              <span className="text-gray-300 group-hover:text-white transition-colors">
                LinkedIn
              </span>
            </a>

            <a
              href="https://www.instagram.com/s.yash_1/"
              className="flex items-center p-3 rounded-xl bg-white/5 hover:bg-pink-600/20 transition-all duration-300 group border border-white/10 hover:border-pink-400/50"
            >
              <Instagram className="w-5 h-5 text-pink-400 group-hover:text-pink-300 mr-4 transition-colors" />
              <span className="text-gray-300 group-hover:text-white transition-colors">
                Instagram
              </span>
            </a>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
            Education
          </h3>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="font-medium text-white">
              Shri Ramdeobaba College Of Engineering And Management , Nagpur
            </p>
            <p className="text-sm text-gray-300 mb-1">B.Tech</p>
            <p className="text-sm text-gray-400">2021 - 2025</p>
          </div>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {/* About Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <p className="text-gray-300 leading-relaxed">
                Passionate Software Engineer specializing in building web
                applications . I love creating elegant, efficient code and
                contribute to open source.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Skills & Technologies
            </h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/10 text-gray-300 rounded-xl text-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 group"
                >
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {project.name}
                    </h3>
                    <a
                      href={project.link}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                    </a>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-xs border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
