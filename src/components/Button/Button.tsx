import { FC, PropsWithChildren } from "react";
import cl from "../Button/Button.module.scss";

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
  isDisabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  isDisabled,
}: ButtonProps) => {
  return (
    <button disabled={isDisabled} onClick={onClick} className={cl.Button}>
      {children}
    </button>
  );
};

export default Button;
