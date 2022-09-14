import React, { useState } from "react";

const Tours = (props) => {
  const [showMore, setShowMore] = useState(false);
  console.log(props);
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

            <button onClick={() => props.removeTour(id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Tours;
