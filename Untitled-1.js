import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { SiPython, SiCplusplus, SiMongodb, SiDocker, SiGooglecloud, SiApachekafka, SiArduino, SiScrumalliance } from "react-icons/si";
import Image from "next/image";

const projects = [
  { title: "Real-time Data Pipeline with Kafka", description: "Built a streaming pipeline using Apache Kafka, Python, Docker, and MongoDB for real-time analytics." },
  { title: "GCP Big Query Analytics Pipeline", description: "Automated ETL with GCP services to load data into Big Query and built dashboards in Data Studio." },
  { title: "IoT-Based Smart Irrigation System", description: "Created an Arduino-based system to optimize irrigation using real-time soil and weather data." }
];

const skills = [
  { name: "Python", icon: <SiPython /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "GCP", icon: <SiGooglecloud /> },
  { name: "Kafka", icon: <SiApachekafka /> },
  { name: "Arduino", icon: <SiArduino /> },
  { name: "Scrum", icon: <SiScrumalliance /> }
];

const certifications = [
  { name: "AWS CLOUD COMPUTING & MACHINE LEARNING", link: "https://i.postimg.cc/FR7SshZ6/AWS-Academy-Graduate-AWS-Academy-Machine-Learning-Foundations-Badge20231221-29-y9xcbd.png" },
  { name: "AWS CLOUD FOUNDATIONS", link: "https://i.postimg.cc/26vtJNZs/AWS-Academy-Graduate-AWS-Academy-Cloud-Foundations-Badge20231104-29-hh5euj.png" },
  { name: "AWS SOLUTIONS ARCHITECTURE", link: "https://i.postimg.cc/13tpX0JX/Aws-architecture.png" }
];

const navItems = ["Home", "About", "Projects", "Skills", "Certifications", "Contact"];

export default function Home() {
  return (
    <div className="bg-[#f7f9fb] min-h-screen font-sans scroll-smooth">
      <nav className="sticky top-0 z-50 flex justify-center space-x-10 bg-white shadow-md p-4">
        {navItems.map((item, idx) => (
          <a key={idx} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-blue-500 font-medium">
            {item}
          </a>
        ))}
      </nav>

      <main>
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center p-8">
          <Image src="/078041a8-785d-4528-90ff-ad91e4d41c4d.png" alt="Hero Image" width={300} height={300} className="mb-6" />
          <h1 className="text-5xl font-bold text-blue-700 mb-4">SATHWICK PONUGOTI</h1>
          <p className="text-lg text-gray-600">DEVOPS ENGINEER | CLOUD ENTHUSIAST | IOT DEVELOPER</p>
        </section>

        <motion.section id="about" className="min-h-screen flex flex-col justify-center items-center p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="text-3xl font-bold text-blue-600 mb-6">ABOUT ME</h2>
          <p className="text-lg max-w-2xl mb-6">
            Enthusiastic and detail-oriented DevOps Engineer with strong knowledge in CI/CD, cloud infrastructure, containerization, and automation tools.
            Passionate about bridging the gap between development and operations.
          </p>
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">EDUCATION</h3>
          <p className="text-gray-600">Bachelor of Technology - Computer Science</p>
          <h3 className="text-2xl font-semibold text-blue-500 mb-4 mt-8">ROLES & SKILLS</h3>
          <div className="max-w-3xl text-left text-gray-700 space-y-3">
            <p>⚡ Full Stack Development — Building highly scalable distributed solutions for positive user experiences and business growth</p>
            <p>⚡ Knowledge of multiple back-end languages (e.g., Python)</p>
            <p>⚡ Knowledge of front-end languages and libraries (HTML, CSS, JavaScript - Angular, React, Node.js, XML, jQuery)</p>
          </div>
        </motion.section>

        <motion.section id="projects" className="min-h-screen flex flex-col justify-center items-center p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          <h2 className="text-3xl font-bold text-blue-600 mb-6">PROJECTS</h2>
          <Image src="/Screenshot 2025-04-26 222905.png" alt="Projects Image" width={600} height={400} className="mb-8" />
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="p-6 border rounded-lg bg-white shadow-md hover:shadow-lg">
                <h3 className="text-xl font-semibold text-blue-600">{project.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="skills" className="min-h-screen flex flex-col justify-center items-center p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }}>
          <h2 className="text-3xl font-bold text-blue-600 mb-6">SKILLS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-2 p-4 bg-blue-50 rounded-lg">
                <div className="text-blue-700">{skill.icon}</div>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="certifications" className="min-h-screen flex flex-col justify-center items-center p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }}>
          <h2 className="text-3xl font-bold text-blue-600 mb-6">CERTIFICATIONS</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <a key={idx} href={cert.link} target="_blank" className="block p-6 border rounded-lg bg-white shadow-md hover:bg-blue-50">
                <img src={cert.link} alt={cert.name} className="w-full h-auto" />
                <p className="text-blue-700 font-semibold text-center">{cert.name}</p>
              </a>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" className="min-h-screen flex flex-col justify-center items-center p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.8 }}>
          <h2 className="text-3xl font-bold text-blue-600 mb-6">CONTACT</h2>
          <div className="flex space-x-6">
            <a href="mailto:sathwickchowdary9966@gmail.com" className="text-blue-700"><FaEnvelope size={28} /></a>
            <a href="https://www.linkedin.com/in/sathwick3026" target="_blank" className="text-blue-700"><FaLinkedin size={28} /></a>
            <a href="tel:+919346857283" className="text-blue-700"><FaPhoneAlt size={28} /></a>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
