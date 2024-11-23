import React, { useState } from "react";

function StreamList() {
  const [movies, setMovies] = useState<
    { id: number; title: string; watched: boolean }[]
  >([]);

  const [input, setInput] = useState<string>("");

  const [editMovieId, setEditMovieId] = useState<number | null>(null);

  const [editInput, setEditInput] = useState<string>("");

  // Add a new movie

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim()) {
      setMovies([...movies, { id: Date.now(), title: input, watched: false }]);

      setInput("");
    }
  };

  // Edit a movie

  const handleEdit = (id: number) => {
    const movieToEdit = movies.find((movie) => movie.id === id);

    if (movieToEdit) {
      setEditMovieId(id);

      setEditInput(movieToEdit.title);
    }
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setMovies(
      movies.map((movie) =>
        movie.id === editMovieId ? { ...movie, title: editInput } : movie
      )
    );

    setEditMovieId(null);

    setEditInput("");
  };

  // Delete a movie

  const handleDelete = (id: number) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  // Toggle watched status

  const handleToggleWatched = (id: number) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  return (
    <div>
      <h1>StreamList</h1>

      <form onSubmit={editMovieId ? handleEditSubmit : handleSubmit}>
        <input
          type="text"
          value={editMovieId ? editInput : input}
          onChange={(e) =>
            editMovieId
              ? setEditInput(e.target.value)
              : setInput(e.target.value)
          }
          placeholder={editMovieId ? "Edit movie title" : "Enter a movie title"}
        />

        <button type="submit">{editMovieId ? "Save" : "Add Movie"}</button>
      </form>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <span
              style={{
                textDecoration: movie.watched ? "line-through" : "none",

                color: movie.watched ? "gray" : "black",
              }}
            >
              {movie.title}
            </span>

            <button onClick={() => handleToggleWatched(movie.id)}>
              {movie.watched ? "Unwatch" : "Watch"}
            </button>

            <button onClick={() => handleEdit(movie.id)}>Edit</button>

            <button onClick={() => handleDelete(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
