import React, { FC, useState } from "react";
import { IUser } from "../types";
import Button from "../Button/Button";
import Input from "./Input/Input";
import Subtitle from "./Subtitle";

interface RegistrationProps {
  isRegistrated: boolean;
  setIsRegistrated: (value: boolean) => void;
  createNewUser: (user: IUser) => void;
  createdUser: IUser;
}

const Registration: FC<RegistrationProps> = ({
  isRegistrated,
  setIsRegistrated,
  createNewUser,
  createdUser,
}: RegistrationProps) => {
  const [entry, setEntry] = useState({
    username: "",
    email: "",
    address: "",
  });

  const changeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntry({ ...entry, username: e.target.value });
  };
  const changeEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntry({ ...entry, email: e.target.value });
  };

  const getAccessToUserList = () => {
    if (!entry.username || !entry.email) {
      alert("Please fill the form");
    } else {
      setIsRegistrated(true);
    }
  };

  return (
    <div className="registration">
      <h3>Beta test registration</h3>
      <p className="BottomContent">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="name-input">
        <div className="input__subtitle">
          <Subtitle>Name</Subtitle>
        </div>
        {!isRegistrated ? (
          <Input
            value={entry.username}
            onChange={changeNameInput}
            placeholder="We will display your name in participation list"
            type="text"
          />
        ) : (
          <h3>{entry.username}</h3>
        )}
      </div>
      <div className="email-input">
        <div className="input__subtitle">
          <Subtitle>Email</Subtitle>
        </div>
        {!isRegistrated ? (
          <Input
            value={entry.email}
            onChange={changeEmailInput}
            placeholder="We will display your email in participation list"
            type="text"
          />
        ) : (
          <h3>{entry.email}</h3>
        )}
      </div>
      {!isRegistrated ? (
        <Button onClick={() => getAccessToUserList()}>Get early access</Button>
      ) : (
        <div className={createdUser.username ? "not-active" : ""}>
          <Button
            isDisabled={createdUser.username ? true : false}
            onClick={() => createNewUser({ ...entry, id: Date.now() })}
          >
            List me to the table
          </Button>
        </div>
      )}
    </div>
  );
};

export default Registration;
