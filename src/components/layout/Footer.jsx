import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="font-bold mb-4">School</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Alumni</a></li>
            </ul>
          </div>
          <div>
             <h4 className="font-bold mb-4">Academics</h4>
             <ul className="space-y-2 text-sm text-gray-600">
               <li><a href="#">Departments</a></li>
               <li><a href="#">Library</a></li>
               <li><a href="#">Calendars</a></li>
             </ul>
          </div>
           <div>
             <h4 className="font-bold mb-4">Admissions</h4>
             <ul className="space-y-2 text-sm text-gray-600">
               <li><a href="#">Apply</a></li>
               <li><a href="#">Tuition</a></li>
               <li><a href="#">Visit Us</a></li>
             </ul>
          </div>
           <div>
             <h4 className="font-bold mb-4">Contact</h4>
             <ul className="space-y-2 text-sm text-gray-600">
               <li>123 School Lane</li>
               <li>Jakarta, Indonesia</li>
               <li>+62 21 555 0123</li>
             </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-xs text-gray-500">
          <p>© 2025 St. Ignatius School. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;