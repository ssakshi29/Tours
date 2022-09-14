import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTour] = useState([]);

  const fetchTours = async () => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299)
          return response.json();
        else {
          setIsError(false);
          setIsLoading(false);
          throw new Error(response.statusText);
        }
      })
      .then((tours) => {
        setTour(tours);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (isError) {
    return <div>Error....</div>;
  }

  return (
    <div>
      <Tours tours={tours} />
    </div>
  );
}

export default App;
