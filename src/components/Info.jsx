import React from "react";

function Info({ info, lyricSearcher }) {
  const { artist, song } = lyricSearcher;
  if (Object.keys(info).length === 0) return null;

  const { strArtistThumb, strGenre, strBiographyEN, strFacebook,strCountry } = info;

  return (
    <div className="card border-light">
       <h2>Artist Information</h2>
      <div className="card-body">
        <img src={strArtistThumb} alt="Artist Logo" />
        <p className="card-text">{strGenre}. {strCountry} </p>
        <h2 className="card-text">Biography</h2>
        <p className="card-text">{strBiographyEN}</p>
        <h2 className="card-text"></h2>
        <p className="card-text">
          <a
            href={`https://www.youtube.com/results?search_query=${artist}+${song}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href={`https://${info.strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`${info.strLastFMChart}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Info;
