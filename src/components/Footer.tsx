
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
    <footer className="bg-gray-50 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Coursemate</h3>
            <p className="text-gray-600">Empowering learners worldwide with quality education</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-gray-600 hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Partner Companies</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Google</li>
              <li className="text-gray-600">Amazon</li>
              <li className="text-gray-600">Infosys</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-600">Stay updated with our latest courses</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
