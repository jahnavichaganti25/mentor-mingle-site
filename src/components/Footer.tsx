
import { Link } from "react-router-dom";

export const Footer = () => {
  const footerLinks = [
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Help Center", href: "/help" },
    { title: "Copyright", href: "/copyright" },
    { title: "FAQs", href: "/faqs" },
  ];

  return (
    <footer className="bg-gray-50 border-t dark:bg-gray-900 dark:border-gray-800 mt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Coursemate</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
            Empowering learners worldwide with quality education
          </p>
          
          <h4 className="text-md font-medium mb-3">Quick Links</h4>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.title}>
                <Link 
                  to={link.href} 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
