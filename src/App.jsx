import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { HoverEffect } from "@/components/ui/card-hover-effect";
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

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiVuedotjs,
  SiJavascript,
  SiGit,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiTypescript,
  SiShadcnui,
  SiNextdotjs,
  SiVercel,
} from "react-icons/si";
import { PiOpenAiLogoLight } from "react-icons/pi";
import { motion } from "framer-motion";
import { TimeLine } from "./components/ui/timeline";
const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);

  const skills = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Express", icon: SiExpress, color: isDark ? "#fff" : "#000" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Vue", icon: SiVuedotjs, color: "#4FC08D" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "SQL", icon: SiMysql, color: "#4479A1" },
    { name: "shadcn/ui", icon: SiShadcnui, color: isDark ? "#fff" : "#000" },
    {
      name: "ChatGPT",
      icon: PiOpenAiLogoLight,
      color: isDark ? "#fff" : "#000",
    },
  ];

  const techMeta = {
    React: { icon: SiReact, color: "#61DAFB" },
    "Next.Js": { icon: SiNextdotjs, color: isDark ? "#fff" : "#000" },
    TailwindCSS: { icon: SiTailwindcss, color: "#06B6D4" },
    Vercel: { icon: SiVercel, color: isDark ? "#fff" : "#000" },
    MongoDB: { icon: SiMongodb, color: "#47A248" },
    Express: {
      icon: SiExpress,
      color: isDark ? "#fff" : "#000",
    },
    "Node.js": { icon: SiNodedotjs, color: "#339933" },
    TypeScript: { icon: SiTypescript, color: "#3178C6" },
    Vue: { icon: SiVuedotjs, color: "#4FC08D" },
    Python: { icon: SiPython, color: "#3776AB" },
    Git: { icon: SiGit, color: "#F05032" },
  };

  const projects = [
    {
      name: "EzEdits Photo Editor",
      photo: "/ezedit.png",
      description:
        "An AI powered Photo Editing Application Having features like Crop, Resize, Background Removal, Image Upscaling.",
      tech: ["Next.Js", "React", "Vercel", "Shadcn/UI "],
      link: "https://ezedits.vercel.app/",
    },

    {
      name: "Personal Portfolio Website",
      photo: "/portfolio.png",
      description:
        "A personal portfolio website to showcase my projects, skills, and experience as a frontend Designer and frondend Developer.",
      tech: ["React", "TailwindCSS", "Vercel", "TypeScript"],
      link: "https://yashsawarkar.vercel.app/",
    },
    {
      name: "Contribution to Frappe CRM ",
      photo: "/crm.png",
      description:
        "A CRM is an Open Source application built using the Frappe framework to manage customer relationships and sales processes.",
      tech: ["Vue", "TypeScript", "Python", "Git", "Frappe Framework"],
      link: "https://github.com/frappe/crm/pull/1141",
    },
    {
      name: "Job Hunt Website's Backend",
      photo: "/job_portal.png",
      description:
        "A comprehensive job portal application that connects job seekers with employers, featuring job listings, applications, and user profiles.",
      tech: ["React", "MongoDB", "Express", "Node.js"],
      link: "https://github.com/YASH-SAWARKAR/job_portal_full_stack",
    },
  ];

  const themeClasses = {
    bg: isDark ? "bg-black" : "bg-[lab(100%_0_0)]",
    text: isDark ? "text-white" : "text-black",
    textSecondary: isDark ? "text-neutral-400" : "text-neutral-500",
    textMuted: "text-neutral-500",
    border: isDark ? "border-neutral-900" : "border-neutral-200",
    cardBg: isDark ? "bg-[lab(2.75381%_0_0)]" : "bg-[lab(100%_0_0)]",
    hoverBg: isDark ? "hover:bg-neutral-800" : "hover:bg-neutral-200",
    accent: isDark ? "text-white" : "text-black",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your EmailJS credentials
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Yash Sawarkar",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with your public key
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Email send failed:", error);
    }

    setIsSubmitting(false);

    // Clear status after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <motion.div
      className={`min-h-screen transition-colors duration-300 ${themeClasses.bg}`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-80 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a href="#" className="flex items-center gap-3 group">
                <div
                  className={`w-10 h-10 rounded-xl overflow-hidden border ${themeClasses.border}
                        transition-transform duration-200 group-hover:scale-[0.90] ml-4 align-middle flex items-center justify-center border-white border-1`}
                >
                  <img src="/avatar.png" alt="" />
                </div>
              </a>

              <div className="hidden md:flex space-x-6">
                <a
                  href="#about"
                  className={`${themeClasses.textSecondary} hover:${themeClasses.accent} transition-colors `}
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
                className={`p-2 rounded-lg ${themeClasses.textSecondary} ${themeClasses.hoverBg} transition-all duration-200 hover:cursor-pointer`}
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
        <div className="max-w-3xl mx-auto px-6">
          {/* Hero Section */}
          <section className="text-center py-16">
            <div className="mb-8 flex flex-col md:flex-row items-center">
              <div className="w-42 h-42 mx-auto mb-6 rounded-full overflow-hidden">
                <div
                  className={`w-full h-full ${themeClasses.cardBg} flex items-center justify-center text-4xl font-bold ${themeClasses.text}`}
                >
                  <img src="/avatar.png" alt="avatar" />
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-3xl mx-auto py-4">
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
                  B.Tech{" "}
                  <span className={`text-sm ${themeClasses.textMuted}`}>
                    (2021-2025)
                  </span>
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
                  Front end Development
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-8">
              <a
                href="https://github.com/YASH-SAWARKAR"
                className={`p-3 rounded-lg ${themeClasses.cardBg} ${themeClasses.hoverBg} transition-colors ${themeClasses.border} border shadow-xl `}
              >
                <Github className={`w-5 h-5 ${themeClasses.textSecondary} `} />
              </a>
              <a
                href="https://www.linkedin.com/in/yash-sawarkar-9b8857298/"
                className={`p-3 rounded-lg ${themeClasses.cardBg} ${themeClasses.hoverBg} transition-colors ${themeClasses.border} border shadow-xl`}
              >
                <Linkedin className="w-5 h-5 text-[#0A66C2]" />
              </a>
              <a
                href="https://www.instagram.com/s.yash_1/"
                className={`p-3 rounded-lg ${themeClasses.cardBg} ${themeClasses.hoverBg} transition-colors ${themeClasses.border} border shadow-xl`}
              >
                <Instagram className="w-5 h-5 text-[#E4405F]" />
              </a>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-1">
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
                contribute to open source projects. Completed B.Tech from Shri
                Ramdeobaba College Of Engineering And Management, Nagpur, with a
                focus on full-stack development using modern technologies like
                MERN stack and Vue.js.
              </p>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16">
            <h2 className={`text-2xl font-bold pb-5 ${themeClasses.text}`}>
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  key={index}
                  className={`p-6 rounded-lg ${themeClasses.cardBg} ${themeClasses.border} border ${themeClasses.hoverBg} transition hover:shadow-2xl duration-300`}
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
                  <div className="mb-4 overflow-hidden rounded-lg border border-neutral-800">
                    <img
                      src={project.photo}
                      alt={project.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <p
                    className={`${themeClasses.textSecondary} text-sm leading-relaxed mb-4`}
                  >
                    {project.description}
                  </p>

                  <span
                    className={`${themeClasses.textMuted} text-sm leading-relaxed mb-4`}
                  >
                    Technologies
                  </span>
                  <div className="flex flex-wrap ">
                    {project.tech.map((tech, techIndex) => {
                      const meta = techMeta[tech];
                      if (!meta) return null;

                      const Icon = meta.icon;

                      return (
                        <div
                          key={techIndex}
                          className={`p-2 rounded-lg ${themeClasses.hoverBg} transition-all duration-200  hover:scale-130`}
                          title={tech}
                        >
                          <Icon
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            style={{ color: meta.color }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
          {/* Skills Section - Flex Layout */}
          <section id="skills" className="py-8">
            <h2
              className={`text-2xl font-bold mb-6 ${themeClasses.text} font-sans`}
            >
              Stack
            </h2>
            <div
              className={`p-4 sm:p-6 rounded-lg ${themeClasses.cardBg} ${themeClasses.border} border shadow-2xl z-10`}
            >
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className={`flex flex-col items-center p-3 sm:p-4 rounded-lg ${themeClasses.hoverBg} transition-all duration-300 cursor-pointer group hover:scale-105 min-w-[80px] sm:min-w-[100px]`}
                    >
                      <IconComponent
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-2 transition-colors duration-300"
                        style={{ color: isDark ? skill.color : skill.color }}
                      />
                      <span
                        className={`text-xs sm:text-sm ${themeClasses.textSecondary} group-hover:${themeClasses.accent} transition-colors text-center leading-tight`}
                      >
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          {/* Footer with Working Contact Form */}
          <TimeLine themeClasses={themeClasses} />

          <footer
            className={`${themeClasses.bg} ${themeClasses.border} border-t mt-16`}
          >
            <div className="max-w-4xl mx-auto px-6 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Side - Contact Info */}
                <div>
                  <h3
                    className={`text-xl font-bold mb-4 ${themeClasses.text} font-sans`}
                  >
                    Get In Touch
                  </h3>
                  <p className={`${themeClasses.textSecondary} mb-6`}>
                    Have a project in mind? Let's discuss how we can work
                    together.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className={`w-4 h-4 ${themeClasses.textMuted}`} />
                      <span className={`${themeClasses.text}`}>
                        sawarkarwork@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className={`w-4 h-4 ${themeClasses.textMuted}`} />
                      <span className={`${themeClasses.text}`}>
                        Nagpur, Maharashtra, India
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <a
                      href="https://github.com/YASH-SAWARKAR"
                      className={`p-2 rounded-lg ${themeClasses.hoverBg} transition-colors`}
                    >
                      <Github
                        className={`w-4 h-4 ${themeClasses.textSecondary}`}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/yash-sawarkar-9b8857298/"
                      className={`p-2 rounded-lg ${themeClasses.hoverBg} transition-colors`}
                    >
                      <Linkedin
                        className={`w-4 h-4 ${themeClasses.textSecondary}`}
                      />
                    </a>
                  </div>
                </div>

                {/* Right Side - Working Contact Form */}
                <div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        className={`w-full p-3 rounded-lg ${themeClasses.cardBg} ${themeClasses.border} border ${themeClasses.text} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none`}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        required
                        className={`w-full p-3 rounded-lg ${themeClasses.cardBg} ${themeClasses.border} border ${themeClasses.text} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none`}
                      />
                    </div>
                    <div>
                      <textarea
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        required
                        className={`w-full p-3 rounded-lg ${themeClasses.cardBg} ${themeClasses.border} border ${themeClasses.text} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none`}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
                        ✅ Message sent successfully! I'll get back to you soon.
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                        ❌ Failed to send message. Please try again or email me
                        directly.
                      </div>
                    )}
                  </form>
                </div>
              </div>

              <div
                className={`text-center mt-8 pt-8 ${themeClasses.border} border-t`}
              >
                <p className={`text-sm ${themeClasses.textMuted}`}>
                  © {new Date().getFullYear()} Yash Sawarkar. All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
