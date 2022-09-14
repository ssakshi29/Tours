import React from "react";

const Tours = (props) => {
  console.log(props.tours);
  return (
    <div>
      {props.tours.map((tour) => {
        const { id, image, name, price } = tour;
        return (
          <div key={id}>
            <article>
              <img src={image} alt="img" />
              <footer>
                <h3>{name}</h3>
                <h4>{price}</h4>
              </footer>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default Tours;
