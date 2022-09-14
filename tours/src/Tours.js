import React, { useState } from "react";

const Tours = (props) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {props.tours.map((tour) => {
        const { id, image, name, price, info } = tour;
        return (
          <div key={id}>
            <article>
              <img src={image} alt="img" />
              <footer>
                <h3>{name}</h3>
                <h4>{price}</h4>
              </footer>
              <p>
                {showMore
                  ? info
                  : `${info.substring(0, 200)}  
              `}
                ...
              </p>

              <div onClick={() => setShowMore(!showMore)}>
                {showMore ? "showless" : "showmore"}
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default Tours;
