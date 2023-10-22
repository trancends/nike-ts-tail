import { headerLogo } from "../assets/images";

const Nav = () => {
  return (
    <header className="padding-x max-container absolute z-10 flex w-full items-center justify-between py-8">
      <nav>
        <a href="/">
          <img src={headerLogo} width={130} height={30} alt="" />
        </a>
      </nav>
    </header>
  );
};

export default Nav;
