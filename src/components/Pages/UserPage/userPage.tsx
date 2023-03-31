import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { IUser } from "../../types";
import { useParams } from "react-router-dom";
import "./userPage.scss";
import Subtitle from "../../OtherComps/Subtitle";
import Planet from "../../OtherComps/Planet/Planet";
type UserPageParams = {
  id: string;
};

const UserPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserPageParams>();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://new-backend.unistory.app/api/data/id/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className="user-data">
      <div className="planet-img-user-page">
        <Planet />
      </div>
      <h2>Personal Data</h2>
      <div className="block-of-data">
        <div className="data-subtitle">
          <Subtitle>Name</Subtitle>
        </div>
        <h3>{user?.username}</h3>
      </div>

      <div className="block-of-data">
        <div className="data-subtitle">
          <Subtitle>Email</Subtitle>
        </div>
        <h3>{user?.email}</h3>
      </div>

      <div className="block-of-data">
        <div className="data-subtitle">
          <Subtitle>Wallet</Subtitle>
        </div>
        <h3>{user?.address}</h3>
      </div>
    </div>
  );
};

export default UserPage;
