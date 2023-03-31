import React, { FC, useState } from "react";
import { IUser } from "../types";
import Listing from "./Listing";
import Registration from "./Registration";

interface Content2Props {
  users: IUser[];
  createNewUser: (user: IUser) => void;
  createdUser: IUser;
  removeNewUser: (id: number) => void;
}

const Content2: FC<Content2Props> = ({
  users,
  createNewUser,
  createdUser,
  removeNewUser,
}: Content2Props) => {
  const [isRegistrated, setIsRegistrated] = useState<boolean>(false);

  return (
    <div className="bottom">
      <Registration
        isRegistrated={isRegistrated}
        setIsRegistrated={setIsRegistrated}
        createNewUser={createNewUser}
        createdUser={createdUser}
      />
      {isRegistrated && (
        <Listing
          users={users}
          createdUser={createdUser}
          removeNewUser={removeNewUser}
        />
      )}
    </div>
  );
};

export default Content2;
