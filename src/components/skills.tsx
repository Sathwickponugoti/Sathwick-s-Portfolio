const skills = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'GCP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Kafka', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
    { name: 'Arduino', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
    { name: 'Scrum', logo: '/logos/scrum.png' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'PySpark', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
  ];
  
  const Skills = () => {
    return (
      <section id="skills" className="py-16 bg-purple-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">SKILLS</h2>
  
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 transition transform hover:-translate-y-2 hover:shadow-lg"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 mb-2 object-contain transition-transform duration-300 hover:scale-110"
                />
                <span className="text-sm text-gray-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  