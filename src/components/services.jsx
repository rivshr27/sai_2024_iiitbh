import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
           Phishild Mails - A complete and on place solution for your mails .
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
              <i 
                className={d.icon} 
                style={{ cursor: "pointer" }} 
                onClick={() => window.open(d.link, "_blank")}
              ></i>
              <div className="service-desc">
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </div>
            


              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
