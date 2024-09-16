const Footer = () => {
  return (
    <footer className="marquee fixed bottom-0 left-0 w-full z-50 bg-red-700 text-white">
      <span className="marquee-text">
        <span className="font-bold">Note:</span> This project was done for
        learning purpose,{" "}
        <a href="https://www.netflix.com" target="_blank" className="font-bold">
          netflix.com
        </a>{" "}
        is the actual site. You can connect with me{" "}
        <a
          href="https://www.linkedin.com/in/nabeel001"
          target="_blank"
          className="font-bold"
        >
          here
        </a>
        .
      </span>
    </footer>
  );
};

export default Footer;
