import React, { useState } from "react";
import AvtarData from "./AvtarData";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [reposit, setReposit] = useState([]);

  const onChangeHandler = e => {
    setUsername(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
     console.log(profileJson);
    const reposit= await fetch(profileJson.repos_url);
    const repoJson= await reposit.json();
     console.log(repoJson); 

     if(profileJson){
         setData(profileJson);
         setReposit(repoJson)
     }
  };
  return (
    <>
      <div style={{ padding: 24 }}>
        <div className="ui search">
          <div className="ui icon input">
            <i className="search icon"></i>
            <input
              className="prompt"
              placeholder="Enter a Github Username"
              type="text"
              value={username}
              onChange={onChangeHandler}
            />
          </div>
          <button
            className="ui inverted teal button"
            type="submit"
            style={{ margin:30 }}
            onClick={submitHandler}>
            <i className="github icon"></i>
            Search
          </button>
          <AvtarData data={data} reposit={reposit} />
        </div>
      </div>
    </>
  );
};
export default Profile;