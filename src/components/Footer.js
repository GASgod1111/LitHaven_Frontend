import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-white">
      <div className="flex justify-between items-center">
        {/* Contact information, social media links, support options, and copyright notice. */}
        <div className="text-sm">
          Contact: contact@lithaven.com<br />
          Follow us on: <a href="#" className="text-blue-400">Twitter</a>, <a href="#" className="text-blue-400">Facebook</a>
        </div>
        <div className="text-sm">&copy; 2023 Lithaven. All Rights Reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
