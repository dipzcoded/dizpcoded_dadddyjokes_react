import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import JokeSidebar from "./JokeSidebar";
import JokeList from "./JokeList";
import Spinner from "./Spinner";
import "../style/Joke.css";
import { v4 as uuidv4 } from "uuid";

const Joke = ({ numJokesToGet }) => {
  const [jokeData, setJokes] = useState(
    JSON.parse(localStorage.getItem("jokes")) || []
  );
  const [loading, setLoading] = useState(false);
  const getJokes = async () => {
    try {
      let jokes = [];
      while (jokes.length < numJokesToGet) {
        let res = await axios.get("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
          },
        });
        let newJoke = res.data.joke;
        if (!seenJokes.has(newJoke)) {
          jokes.push({ joke: newJoke, votes: 0, id: uuidv4() });
        } else {
          console.log("Founded duplicate");
          console.log(newJoke);
        }
      }

      setJokes([...jokeData, ...jokes]);
      setLoading(loading);
      if (localStorage.jokes) {
        let localJoke = [
          ...JSON.parse(localStorage.getItem("jokes")),
          ...jokes,
        ];
        localStorage.setItem("jokes", JSON.stringify(localJoke));
      } else {
        localStorage.setItem("jokes", JSON.stringify(jokes));
      }
    } catch (e) {
      setLoading(loading);
    }
  };

  useEffect(() => {
    if (jokeData.length === 0) {
      //    Loading the function
      setLoading(!loading);
      getJokes();
    }
  }, [" "]);

  const seenJokes = new Set(jokeData.map((j) => j.joke));
  console.log(seenJokes);

  // handling votes
  const handleVote = (id, delta) => {
    let newJokes = jokeData.map((j) =>
      j.id === id ? { ...j, votes: j.votes + delta } : j
    );
    setJokes(newJokes);
    if (localStorage.jokes) {
      localStorage.removeItem("jokes");
    }
    localStorage.setItem("jokes", JSON.stringify(newJokes));
  };

  const getMoreJokes = () => {
    setLoading(!loading);
    getJokes();
  };

  let jokeSort = jokeData.sort((a, b) => b.votes - a.votes);

  return (
    <div className="Joke">
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <JokeSidebar getMoreJokes={getMoreJokes} />
          <JokeList jokes={jokeSort} votes={handleVote} />
        </Fragment>
      )}
    </div>
  );
};

Joke.defaultProps = {
  numJokesToGet: 10,
};

export default Joke;
