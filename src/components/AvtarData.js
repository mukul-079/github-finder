import React from "react";
const AvtarData = ({ data, reposit }) => {
  return (
    <table className="ui celled table">
      <tbody>
          <tr>
              <td style={{width:"30%"}}>
                <div class="ui card">  
                  <div class="image">
                  {!data.avatar_url ? (
                              " "
                              ) : (
                              <img
                                  className="ui small circular image"
                                  src={data.avatar_url}
                                  alt={data.avatar_url}
                              />
                              )}
                  </div>
                  <div class="content">
                    <h2 class="ui orange inverted header">{data.name}</h2>
                    <h4>Location : {data.location}</h4>
                    <h4>Bio:{data.bio}</h4>
                    <h5>Followers : {data.followers}</h5>
                    <h5>Following : {data.following}</h5>
                    <a href={data.html_url}>
                    <button class="ui red right labeled icon button">
                          <i class="right arrow icon"></i>View Profile
                    </button>
                    </a>
                  </div>
                </div>
              </td>
              <td style={{width:"40%"}}>
                    <h1> <i class="book icon"></i>Repositories : {data.public_repos}</h1>
                    {reposit.map(repo => (
                    <div className="ui relaxed horizontal divided list" key={repo.name}>
                    <div className="item">
                    <div className="content">
                    <a href={repo.html_url} className="header" target="_blank">
                    <button class="ui primary pink button">
                    <i className="large github middle aligned icon"></i>
                      {repo.name}
                      </button>
                    </a>
                    </div>
                    </div>
                    </div>
                    ))}
                </td>
          </tr>
      </tbody>
    </table>
  );
};

export default AvtarData;