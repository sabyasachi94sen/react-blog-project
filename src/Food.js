import React from "react";
import "./index.css";
import { ContextData } from "./ContextApi";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Food = () => {
  const [data] = useContext(ContextData);

  return (
    <>
    <h2
     className="post-title"
    >
      Food
    </h2>
    <div className="underline1"></div>

  

    <div className="wrapper">
      <div className="left-data">
        {data
          .filter((value) => value.category === "food")
          .map((val) => (
            <div>
              <div key={val.id} className="bolly-wrapper">
                <Link
                  to={`/article/${val.id}`}
                  className="left-data-link"
                >
                  <img src={val.image} alt="" className="left-data-image" />
                </Link>
                <div className="movie-details">
                  <p className="movie-details-para">
                    {val.name}
                  </p>
                  <p className="movie-details-para">
                    {val.details}
                  </p>

                  
                </div>
              </div>

              <hr className="post-divider" />
            </div>
          ))}
      </div>

      <div className="right-data">
        <div className="top-post-heading-wrapper">
        <h2 className="top-post-title">
      Top Post
         </h2>
         <div className="top-post-underline" ></div>
        </div>
        {data
          .filter((value) => value.category === "food")
          .map((val) => (
            <div>
              <div key={val.id} className="right-data-wrapper">
                <Link
                  to={`/article/${val.id}`}
                 className="right-data-link"
                >
                  <img src={val.image} alt="" className="top-post-image" />
                </Link>

                <div className="top-post-details-wrapper">
                  <p
                  className="top-post-details"
                  >
                    {val.name}
                  </p>
                  <p
                  className="top-post-details"
                  >
                    {val.details}
                  </p>
                  
                  

                  <br />
                 
                </div>
              </div>
              <hr className="top-post-divider" />
            </div>
          ))}

        <div className="small-ad">Advertisement</div>
      </div>
    </div>
  </>
);
};

export default Food;
