import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Acengeers</h3>
            <p className="text-white/80 mb-4">
              Professional cleaning services in Toronto. Trusted, flexible, and eco‑friendly.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/80 hover:text-white transition"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/residential"
                  className="text-white/80 hover:text-white transition"
                >
                  Residential Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/commercial"
                  className="text-white/80 hover:text-white transition"
                >
                  Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services/move" className="text-white/80 hover:text-white transition">
                  Move In/Out
                </Link>
              </li>
              <li>
                <Link
                  to="/services/seasonal"
                  className="text-white/80 hover:text-white transition"
                >
                  Seasonal Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-white/80">
              <li>Toronto, ON, Canada</li>
              <li>
                <a href="mailto:info@acengeers.com" className="hover:text-white transition">
                  info@acengeers.com
                </a>
              </li>
              <li>
                <a href="tel:+14165550123" className="hover:text-white transition">
                  (416) 555-0123
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Acengeers Inc. All rights reserved.</p>
          <p className="text-sm mt-2">
            Design & Development by{' '}
            <a
              href="https://bakaldigital-gucndofee-bakaltechs-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition underline underline-offset-2"
            >
              Bakal Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
