import logo from "./../assets/logo.svg";

const Header = () => {
  return (
    <div className="absolute py-5 px-10 w-full bg-gradient-to-b from-black z-10">
      <img src={logo} alt="logo" className="w-40" />
    </div>
  );
};

export default Header;
