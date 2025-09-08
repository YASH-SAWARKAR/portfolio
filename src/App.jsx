import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Youtube,
  Instagram,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Star,
  GitFork,
  Sun,
  Moon,
  Code,
  Lightbulb,
  Globe,
  GraduationCap,
} from "lucide-react";

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);

  const skills = [
    "MERN",
    "TailwindCSS",
    "Vue",
    "JavaScript",
    "Frappe Framework",
    "Git",
    "Python",
    "C++",
    "OOP",
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
      name: "Contribution toFrappe CRM APP",
      description:
        "A CRM is an Open Source application built using the Frappe framework to manage customer relationships and sales processes.",
      tech: ["Vue", "TypeScript", "Python", "Git", "Frappe Framework"],
      link: "https://github.com/YASH-SAWARKAR/crm",
    },
    {
      name: "Job Portal",
      description:
        "A comprehensive job portal application that connects job seekers with employers, featuring job listings, applications, and user profiles.",
      tech: ["React", "MongoDB", "Express", "Node.js"],
      link: "https://github.com/YASH-SAWARKAR/job_portal_full_stack",
    },
  ];

  const themeClasses = {
    bg: isDark ? "bg-black" : "bg-white",
    text: isDark ? "text-white" : "text-black",
    textSecondary: isDark ? "text-gray-400" : "text-gray-600",
    textMuted: isDark ? "text-gray-500" : "text-gray-500",
    border: isDark ? "border-gray-800" : "border-gray-200",
    cardBg: isDark ? "bg-black" : "bg-white",
    hoverBg: isDark ? "hover:bg-gray-800" : "hover:bg-gray-100",
    accent: isDark ? "text-white" : "text-black",
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${themeClasses.bg}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${themeClasses.bg} ${themeClasses.border} border-b backdrop-blur-sm bg-opacity-80`}
      >
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className={`text-xl font-bold ${themeClasses.text}`}>
                Portfolio
              </h1>
              <div className="hidden md:flex space-x-6">
                <a
                  href="#about"
                  className={`${themeClasses.textSecondary} hover:${themeClasses.accent} transition-colors`}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className={`${themeClasses.textSecondary} hover:${themeClasses.accent} transition-colors`}
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className={`${themeClasses.textSecondary} hover:${themeClasses.accent} transition-colors`}
                >
                  Skills
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/YASH-SAWARKAR"
                className={`p-2 rounded-lg ${themeClasses.textSecondary} ${themeClasses.hoverBg} transition-colors`}
              >
                <Github className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${themeClasses.textSecondary} ${themeClasses.hoverBg} transition-colors`}
              >
                {isDark ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero Section */}
          <section className="text-center py-16">
            <div className="mb-8 flex flex-row">
              <div className="w-42 h-42 mx-auto mb-6 rounded-full overflow-hidden">
                <div
                  className={`w-full h-full ${themeClasses.cardBg} flex items-center justify-center text-4xl font-bold ${themeClasses.text}`}
                >
                  <img src="/public/avatar.png" alt="avatar" />
                </div>
              </div>
              <div className="max-w-md mx-auto flex flex-col items-center py-4">
                <h1
                  className={`text-4xl md:text-5xl font-bold mb-4 ${themeClasses.text}`}
                >
                  Yash
                </h1>
                <p className={`text-lg ${themeClasses.textSecondary} mb-6`}>
                  Software Engineer & Open Source Contributor
                </p>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto py-4">
              <div
                className={`p-4 rounded-lg ${themeClasses.cardBg} ${themeClasses.border} border text-left`}
              >
                <div className="flex items-center mb-2">
                  <Code className={`w-4 h-4 mr-2 ${themeClasses.textMuted}`} />
                  <span className={`text-sm ${themeClasses.textMuted}`}>
                    ROLE
                  </span>
                </div>
                <p className={`font-medium ${themeClasses.text}`}>
                  Software Engineer
                </p>
              </div>

              <div
                className={`p-4 rounded-lg ${themeClasses.cardBg} ${themeClasses.border} border text-left`}
              >
                <div className="flex items-center mb-2">
                  <GraduationCap
                    className={`w-4 h-4 mr-2 ${themeClasses.textMuted}`}
                  />
                  <span className={`text-sm ${themeClasses.textMuted}`}>
                    EDUCATION
                  </span>
                </div>
                <p className={`font-medium ${themeClasses.text}`}>
                  B.Tech (2021-2025)
                </p>
              </div>

              <div
                className={`p-4 rounded-lg ${themeClasses.cardBg} ${themeClasses.border} border text-left`}
              >
                <div className="flex items-center mb-2">
                  <MapPin
                    className={`w-4 h-4 mr-2 ${themeClasses.textMuted}`}
                  />
                  <span className={`text-sm ${themeClasses.textMuted}`}>
                    LOCATION
                  </span>
                </div>
                <p className={`font-medium ${themeClasses.text}`}>
                  Nagpur, India
                </p>
              </div>

              <div
                className={`p-4 rounded-lg ${themeClasses.cardBg} ${themeClasses.border} border text-left`}
              >
                <div className="flex items-center mb-2">
                  <Mail className={`w-4 h-4 mr-2 ${themeClasses.textMuted}`} />
                  <span className={`text-sm ${themeClasses.textMuted}`}>
                    EMAIL
                  </span>
                </div>
                <p className={`font-medium ${themeClasses.text}`}>
                  sawarkarwork@gmail.com
                </p>
              </div>

              <div
                className={`p-4 rounded-lg ${themeClasses.cardBg} ${themeClasses.border} border text-left`}
              >
                <div className="flex items-center mb-2">
                  <Lightbulb
                    className={`w-4 h-4 mr-2 ${themeClasses.textMuted}`}
                  />
                  <span className={`text-sm ${themeClasses.textMuted}`}>
                    COLLEGE
                  </span>
                </div>
                <p className={`font-medium ${themeClasses.text}`}>
                  RCOEM Nagpur
                </p>
              </div>

              <div
                className={`p-4 rounded-lg ${themeClasses.cardBg} ${themeClasses.border} border text-left`}
              >
                <div className="flex items-center mb-2">
                  <Globe className={`w-4 h-4 mr-2 ${themeClasses.textMuted}`} />
                  <span className={`text-sm ${themeClasses.textMuted}`}>
                    SPECIALIZATION
                  </span>
                </div>
                <p className={`font-medium ${themeClasses.text}`}>
                  Full Stack Development
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-8">
              <a
                href="https://github.com/YASH-SAWARKAR"
                className={`p-3 rounded-lg ${themeClasses.cardBg} ${themeClasses.hoverBg} transition-colors ${themeClasses.border} border`}
              >
                <Github className={`w-5 h-5 ${themeClasses.textSecondary}`} />
              </a>
              <a
                href="https://www.linkedin.com/in/yash-sawarkar-9b8857298/"
                className={`p-3 rounded-lg ${themeClasses.cardBg} ${themeClasses.hoverBg} transition-colors ${themeClasses.border} border`}
              >
                <Linkedin className={`w-5 h-5 ${themeClasses.textSecondary}`} />
              </a>
              <a
                href="https://www.instagram.com/s.yash_1/"
                className={`p-3 rounded-lg ${themeClasses.cardBg} ${themeClasses.hoverBg} transition-colors ${themeClasses.border} border`}
              >
                <Instagram
                  className={`w-5 h-5 ${themeClasses.textSecondary}`}
                />
              </a>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-1 ">
            <h2 className={`text-2xl font-bold mb-6 ${themeClasses.text}`}>
              About
            </h2>
            <div
              className={`p-6 rounded-lg ${themeClasses.cardBg} ${themeClasses.border} border`}
            >
              <p
                className={`${themeClasses.textSecondary} leading-relaxed text-lg`}
              >
                Passionate Software Engineer specializing in building web
                applications. I love creating elegant, efficient code and
                contribute to open source projects. Currently pursuing B.Tech
                from Shri Ramdeobaba College Of Engineering And Management,
                Nagpur, with a focus on full-stack development using modern
                technologies like MERN stack and Vue.js.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-16">
            <h2 className={`text-2xl font-bold mb-6 ${themeClasses.text}`}>
              Skills & Technologies
            </h2>
            <div
              className={`p-6 rounded-lg ${themeClasses.cardBg} ${themeClasses.border} border`}
            >
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-lg ${themeClasses.border} border ${themeClasses.textSecondary} ${themeClasses.hoverBg} hover:${themeClasses.accent} transition-all duration-300 cursor-pointer`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16">
            <h2 className={`text-2xl font-bold mb-6 ${themeClasses.text}`}>
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg ${themeClasses.cardBg} ${themeClasses.border} border ${themeClasses.hoverBg} transition-all duration-300 hover:scale-105`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3
                      className={`text-xl font-semibold ${themeClasses.text}`}
                    >
                      {project.name}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg ${themeClasses.hoverBg} transition-colors`}
                    >
                      <ExternalLink
                        className={`w-4 h-4 ${themeClasses.textMuted}`}
                      />
                    </a>
                  </div>

                  <p
                    className={`${themeClasses.textSecondary} text-sm leading-relaxed mb-4`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 text-xs rounded ${themeClasses.border} border ${themeClasses.textMuted}`}
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
