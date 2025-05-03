import { Linkedin, Mail, Github, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-lavender-200 border-t border-gray-100 py-16 mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-12">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/sathwick3026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors text-center"
          >
            <Linkedin className="h-6 w-6" />
            <span>LinkedIn</span>
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/Sathwickponugoti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors text-center"
          >
            <Github className="h-6 w-6" />
            <span>GitHub</span>
          </a>

          {/* Email Icon */}
          <a
            href="mailto:sathwickchowdary9966@gmail.com"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors text-center"
          >
            <Mail className="h-6 w-6" />
            <span>Email</span>
          </a>

          {/* Phone Icon */}
          <a
            href="tel:+919346857283"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors text-center"
          >
            <Phone className="h-6 w-6" />
            <span>Phone</span>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} SATHWICK PONUGOTI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
