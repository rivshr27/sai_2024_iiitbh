import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>The Creative Crew</h2>
          <p>
            We are a team of creatively diverse, driven, and innovative
            individuals working to make emails a safer and more advanced way of communication.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((member, index) => (
                <div
                  key={`${member.name}-${index}`}
                  className="col-md-3 col-sm-6 team"
                >
                  <div className="thumbnail">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="team-img"
                    />
                    <div className="caption">
                      <h4>{member.name}</h4>
                      <p className="position">{member.position}</p>
                      <div className="social-menu">
                        <ul>
                          <li>
                            <a
                              href={member.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-github"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={member.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
