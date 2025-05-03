const Certifications = () => {
    return (
      <section id="certifications" className="py-16 bg-purple-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">CERTIFICATIONS</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Cert 1 */}
            <a
              href="https://i.postimg.cc/26vtJNZs/AWS-Academy-Graduate-AWS-Academy-Cloud-Foundations-Badge20231104-29-hh5euj.png"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg rounded-xl overflow-hidden p-6 text-center transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-purple-600 font-semibold mb-4">AWS CLOUD FOUNDATIONS</h3>
              <img
                src="https://i.postimg.cc/26vtJNZs/AWS-Academy-Graduate-AWS-Academy-Cloud-Foundations-Badge20231104-29-hh5euj.png"
                alt="AWS Cloud Foundations"
                className="w-full h-40 object-contain mb-4 mx-auto"
              />
              <p className="italic text-gray-500">Click to View</p>
            </a>
  
            {/* Cert 2 */}
            <a
              href="https://postimg.cc/kB0VhSrP"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg rounded-xl overflow-hidden p-6 text-center transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-purple-600 font-semibold mb-4">AWS SOLUTIONS ARCHITECTURE</h3>
              <img
                src="https://i.postimg.cc/3xn06j52/Aws-architecture.png"
                alt="AWS Solutions Architecture"
                className="w-full h-40 object-contain mb-4 mx-auto"
              />
              <p className="italic text-gray-500">Click to View</p>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Certifications;
  