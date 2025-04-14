import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} TechHaldar. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://www.facebook.com/techhaldar/"
            className="text-gray-400 hover:text-white"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://x.com/i/flow/login?redirect_after_login=%2Ftechhaldar"
            className="text-gray-400 hover:text-white"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/techhaldar/"
            className="text-gray-400 hover:text-white"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ratin-haldar/"
            className="text-gray-400 hover:text-white"
            aria-label="Linkedin"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Techhaldar"
            className="text-gray-400 hover:text-white"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer