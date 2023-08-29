const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>
        Made by <a href="mailto:lennyddon@gmail.com">devRema</a> with 💖. &copy; {currentYear}
      </p>
      {/* <p> &copy; {currentYear} </p> */}
    </footer>
  );
};

export default Footer;
