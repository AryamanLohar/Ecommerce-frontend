import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="bg-dark text-center text-white">
          <div className="container p-2">
            <section className="mb-4">
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.facebook.com/profile.php?id=100090279665989"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://twitter.com/Mohitsa42024567"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.instagram.com/mitzz07/"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.linkedin.com/in/mohit-saini-9112a9213/"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://github.com/MohitSaini90"
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div
            className="text-center p-2"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <p>E-mail: mohitsainidna@gmail.com Ph No.: 6005862206</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
