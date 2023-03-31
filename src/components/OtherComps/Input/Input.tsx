import React, { FC } from "react";
import cl from "../Input/Input.module.scss";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
}

const Input: FC<InputProps> = ({
  value,
  onChange,
  type,
  placeholder,
}: InputProps) => {
  return (
    <div className={cl.input}>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Input;
