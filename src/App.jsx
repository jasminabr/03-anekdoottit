import { useState } from "react";

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
  "The only way to go fast, is to go well.",
];

const App = () => {
  const [selected, setSelected] = useState(0);
  const [likes, setLikes] = useState(Array(anecdotes.length).fill(0));
  const [dislikes, setDislikes] = useState(Array(anecdotes.length).fill(0));

  //  funksioni qe shfaq anektoden e rradhes
  const nextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  // funksioni per butonin like
  const likeAnecdote = () => {
    const newLikes = [...likes];
    newLikes[selected] += 1;
    setLikes(newLikes);
  };

  // funksioni per butonin dislike
  const dislikeAnecdote = () => {
    const newDislikes = [...dislikes];
    newDislikes[selected] += 1;
    setDislikes(newDislikes);
  };

  // funk qe

  const getAnecdoteWithMostLikes = () => {
    const maxLikes = Math.max(...likes); // Find the maximum number of likes
    const indexOfMostLiked = likes.indexOf(maxLikes); // Get the index of the anecdote with most likes
    return anecdotes[indexOfMostLiked];
  };

  const getAnecdoteWithMostDislikes = () => {
    const maxDislikes = Math.max(...dislikes); // Find the maximum number of dislikes
    const indexOfMostDisliked = dislikes.indexOf(maxDislikes); // Get the index of the anecdote with most dislikes
    return anecdotes[indexOfMostDisliked];
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p> {anecdotes[selected]} </p>
      <p>
        This has <strong>{likes[selected]}</strong> likes and{" "}
        <strong>{dislikes[selected]}</strong> dislikes.
      </p>

      <button onClick={likeAnecdote}> Like </button>
      <button onClick={dislikeAnecdote}>Dislike</button>
      <br />
      <button onClick={nextAnecdote}>Next Anecdote</button>

      <div>
        <h2>Most liked Anecdote</h2>
        <p>{getAnecdoteWithMostLikes()}</p>

        <h2>Anecdote with most dislikes</h2>
        <p>{getAnecdoteWithMostDislikes()}</p>
      </div>
    </div>
  );
};

export default App;
