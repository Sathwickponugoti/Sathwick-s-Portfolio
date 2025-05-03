const Projects = () => {
    return (
      <section id="projects" className="py-16 bg-purple-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Projects</h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Data Pipeline with Kafka",
                details: [
                  "Built a real-time streaming pipeline using Apache Kafka and Python to ingest data (e.g., tweets/sensors).",
                  "Stored and processed data in MongoDB, and containerized the application using Docker.",
                  "Demonstrated real-time analytics, messaging architecture, and container deployment.",
                ],
              },
              {
                title: "GCP Big Query Analytics Pipeline",
                details: [
                  "Automated an ETL pipeline using Google Cloud Storage and Cloud Functions to load data into Big Query.",
                  "Used SQL for data analysis and built interactive dashboards in Google Data Studio.",
                  "Gained experience in serverless cloud computing, storage, and analytical reporting.",
                ],
              },
              {
                title: "IoT-Based Smart Irrigation System",
                details: [
                  "Developed an IoT system using Arduino and NRF modules to collect real-time soil and weather data.",
                  "Enabled precision irrigation via mobile/web by automating sensor-controlled irrigation.",
                  "Reduced water wastage and improved crop yield with data-driven remote control.",
                ],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 transform hover:scale-105 transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{project.title}</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {project.details.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  