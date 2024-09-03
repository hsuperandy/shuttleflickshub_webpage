import React from "react";

const MainPage = () => {
  return (
    <div>
      <div className="untree_co-section pb-0" id="home-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-7">
              <h1 className="heading gsap-reveal-hero mb-3">
                <strong>
                  Shuttleflicks<span className="text-primary">.</span> Hub
                </strong>
              </h1>
              <h2 className="subheading gsap-reveal-hero mb-4">
              Finding the best photographers that suits your needs. Whether you need it for an event, portrait, wedding, products 
              or just purely exquisite photography, we have what you need! <strong>shuttleflickshub.com</strong>. See
                our{" "}
                <a href="https://shuttleflickshub.com" target="_blank">
                  featured photographers
                </a>{" "}
              </h2>
              <p className="gsap-reveal-hero">
                <a
                  href="https://shuttleflickshub.com/genre"
                  target="_blank"
                  className="btn btn-outline-black"
                >
                  See all the photography genre here.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
