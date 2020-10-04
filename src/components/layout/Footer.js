import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="container mx-auto py-16 px-3 mt-20 mb-8 text-gray-800">
        <div className="flex -mx-3">
          <div className="flex-1 px-3">
            <h2 className="text-lg font-semibold">About</h2>
            <p className="mt-5">
              Oneplaybook app helps you learn, think and build awesome things with anyone easily.
            </p>
            <p className="mt-2">
              Made with{' '}
              <span role="img" aria-label="love">
                ❤️
              </span>{' '}
              by{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://abesamma.github.io">
                Abraham Samma
              </a>
            </p>
          </div>
          <div className="flex-1 px-3">
            <h2 className="text-lg font-semibold">Important Links</h2>
            <ul className="mt-4 leading-loose">
              <li>
                <a href="/terms&conditions">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="https://tiddlywiki.com">TiddlyWiki</a>
              </li>
            </ul>
          </div>
          <div className="flex-1 px-3">
            <h2 className="text-lg font-semibold">Social Media</h2>
            <ul className="mt-4 leading-loose">
              <li>
                <a href="https://twitter.com/ABSamma">Twitter</a>
              </li>
              <li>
                <a href="https://github.com/abesamma">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
