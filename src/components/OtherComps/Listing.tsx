import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../types";
import Subtitle from "./Subtitle";

interface ListingProps {
  users: IUser[];
  createdUser: IUser;
  removeNewUser: (id: number) => void;
}

const Listing: FC<ListingProps> = ({
  users,
  createdUser,
  removeNewUser,
}: ListingProps) => {
  const navigate = useNavigate();

  return (
    <div className="listing-wrapper">
      <h3>Participation listing (enable only for participants)</h3>
      <div className="listing">
        <table>
          <tr>
            <th>
              <Subtitle>Name</Subtitle>
            </th>
            <th>
              <Subtitle>Email</Subtitle>
            </th>
            <th>
              <Subtitle>Wallet</Subtitle>
            </th>
          </tr>
          {users.map((userItem) => (
            <tr
              onClick={() =>
                userItem.id !== createdUser.id &&
                navigate(`/user/${userItem.id}`)
              }
              className={userItem.id !== createdUser.id ? "user-item" : ""}
              key={userItem.id}
            >
              <td>{userItem.username}</td>
              <td>{userItem.email}</td>
              <td>{userItem.address}</td>
              {createdUser.id !== 0 && userItem.id === createdUser.id && (
                <td onClick={() => removeNewUser(userItem.id)}>
                  <i className="fa-solid fa-xmark"></i>
                </td>
              )}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Listing;
