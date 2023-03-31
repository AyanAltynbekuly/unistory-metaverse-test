import Button from "../Button/Button";
import "./Header.scss";

interface HeaderProps {
  activate: () => void;
  account: any;
}

const Header = ({ activate, account }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="logo">Logo</div>
        {!account ? (
          <Button onClick={() => activate()}>Connect Metamask</Button>
        ) : (
          <p>{account}</p>
        )}
      </div>
    </header>
  );
};

export default Header;
