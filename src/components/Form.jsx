import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Form({ saveLyric }) {
  const [search, saveSearch] = useState({
    artist: "",
    song: "",
  });

  const [error, saveError] = useState(false);

  const { artist, song } = search;

  const updateState = (e) => {
    saveSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const searchInfo = (e) => {
    e.preventDefault();

    if (artist.trim() === "" || song.trim() === "") {
      saveError(true);
      return;
    }

    saveError(false);

    saveLyric(search);
  };

  return (
    <div className="bg-info">
      {error ? (
        <p className="alert alert-danger text-center p-2">
          All fields requiered
        </p>
      ) : null}
      <div className="container">
        <div className="row">
          <form
            onSubmit={searchInfo}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">Songs Lyrics</legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label> Artist</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Artist name "
                      onChange={updateState}
                      value={artist}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label> Song</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Song name"
                      onChange={updateState}
                      value={song}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <Button
                  onClick={searchInfo}
                  size="lg"
                  className="mt-2"
                  variant="dark"
                >
                  Search
                </Button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
