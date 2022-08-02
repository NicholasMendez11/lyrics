import React from "react";

function Footer({ lyric }) {
  let bottom = lyric === "" ? "fixed-bottom" : null;
  return (
    <footer class={`bg-dark text-center text-white ${bottom}`}>
      <div class="container p-4 pb-0">
        <section class="mb-4">
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/nicholas.mendezbertrand"
            role="button"
          >
            <i class="fab fa-facebook-f"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://www.instagram.com/nicholas_meendez/"
            role="button"
          >
            <i class="fab fa-instagram"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/nicholasgmendez/"
            role="button"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://github.com/NicholasMen"
            role="button"
          >
            <i class="fab fa-github"></i>
          </a>
        </section>
      </div>

      <div
        class="text-center p-3"
        style={{ backgroundcolor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} Copyright:
        <a class="text-white" href="https://mdbootstrap.com/">
          NicholasMendez
        </a>
      </div>
    </footer>
  );
}

export default Footer;
