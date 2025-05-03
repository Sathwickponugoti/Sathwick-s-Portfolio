import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedSection from './components/Animation';
import Skills from './components/skills';
import Projects from './components/projects';
import Certifications from './components/certificates';

const App = () => {
  return (
    <div className="min-h-screen text-gray-900 bg-gradient-to-b from-purple-100 via-blue-50 to-pink-100">
      <Header />

      {/* Hero Section */}
      <AnimatedSection>
        <div className="max-w-4xl mx-auto text-center mt-40">
          <img 
            src="https://i.postimg.cc/GhyMdNgb/me.jpg" 
            alt="Sathwick Ponugoti" 
            className="mx-auto rounded-full w-32 h-32 object-cover mb-6 shadow-lg"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-blue-500">
              SATHWICK PONUGOTI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            DEVOPS ENGINEER | CLOUD ENTHUSIAST | SOFTWARE DEVELOPER
          </p>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection delay={0.2}>
        <section id="about" className="max-w-4xl mx-auto mt-40 px-4 bg-white rounded-lg shadow-lg p-10">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Enthusiastic and detail-oriented DevOps Engineer with foundational knowledge in CI/CD pipelines,
            cloud infrastructure (AWS/Azure), containerization (Docker), and automation tools (Jenkins, Git).
            Recently completed hands-on training and academic projects focused on streamlining development
            workflows and infrastructure automation. Passionate about bridging the gap between development and
            operations, ensuring efficient and reliable software delivery. Eager to contribute to a dynamic team
            and grow within a fast-paced DevOps environment.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">Education</h3>
          <p className="text-gray-700">
            <strong>B.Tech in Information Technology</strong>, QIS College of Engineering and Technology (2021–2025)
          </p>
        </section>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection delay={0.3}>
        <section id="projects" className="max-w-6xl mx-auto mt-40 px-4 bg-white rounded-lg shadow-lg p-10">
          <Projects />
        </section>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection delay={0.4}>
        <section id="skills" className="max-w-6xl mx-auto mt-40 px-4 bg-white rounded-lg shadow-lg p-10">
          <Skills />
        </section>
      </AnimatedSection>

      {/* Certifications Section */}
      <AnimatedSection delay={0.5}>
        <section id="certifications" className="max-w-6xl mx-auto mt-40 px-4 bg-white rounded-lg shadow-lg p-10">
          <Certifications />
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default App;
