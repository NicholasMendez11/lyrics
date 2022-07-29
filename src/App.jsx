import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Song from "./components/Song";
import Info from "./components/Info";
import Header from "./components/Header";
import Slider from "./components/Slider";
import axios from "axios";
import Footer from "./components/Footer";
import StartAlert from "./components/StartAlert";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function App() {
  const [lyricSearcher, saveLyric] = useState({});
  const [lyric, saveLyricSong] = useState("");
  const [info, saveInfo] = useState({});
  const [spinner, setSpinner] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  

  useEffect(() => {
    
    if (Object.keys(lyricSearcher).length === 0) return;

    setSpinner(true);

    const apiLyrics = async () => {
      const { artist, song } = lyricSearcher;

      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;

      /*const response = await axios(url);
      const response2 = await axios(url2); */

      const [lyric, information] = await Promise.all([axios(url), axios(url2)]);
      saveLyricSong(lyric.data.lyrics);
      saveInfo(information.data.artists[0]);

      console.log(lyric);
      console.log(info);
      saveLyric({});
      setSpinner(false);
    };
    apiLyrics();
    
  }, [lyricSearcher, info]);

  useEffect(() => {
    setShow(true);
   
    
  }, []);
  return (
    <Fragment>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Maintainence in progress </Modal.Title>
        </Modal.Header>
        <Modal.Body>We are sorry to tell you that due maintanences, our Api could be working a little Slow. Sorry for the inconvenience. </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
           Understand
          </Button>
        </Modal.Footer>
      </Modal>
      <Header />
      <Form saveLyric={saveLyric} />

      <div className="container">
        <div className="row d-flex justify-content-center">
          {spinner ? (
            <div
              className="spinner-grow mt-2"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden ">
                Loading...
              </span>
            </div>
          ) : null}

          </div>
          <div className="row">
          <div className="col-md-6">
            <Info info={info} lyricSearcher={lyricSearcher} />
          </div>

          <div className="col-md-6">
            <Song lyric={lyric} />
          </div>
        </div>
        <div className="row">
          <Slider info={info} />
        </div>
      </div>

      <Footer lyric={lyric}/>
    </Fragment>
  );
}

export default App;
