import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="site-footer">
      <div className="container">

        <div className="row">
          <div className="col-lg-3">
            <div className="widget">
              <h3>Home</h3>
              <ul className="list-unstyled float-left links">
                <li><a href="#">shuttleflickshub.com</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div> 
          </div> 

          <div className="col-lg-3">
            <div className="widget">
              <h3>Photography Genre</h3>
              <ul className="list-unstyled float-left links">
                <li><a href="#">Wedding</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Portrait</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Interior</a></li>
              </ul>
            </div> {/* /.widget */}
          </div> {/* /.col-lg-3 */}

          <div className="col-lg-3">
            <div className="widget">
              <h3>Featured photographers</h3>
              <ul className="list-unstyled float-left links">
                <li><a href="#">Shuttleflicks</a></li>
                <li><a href="#">Jason Leong Photography</a></li>
                <li><a href="#">Love & Co Photography</a></li>
                <li><a href="#">Simply Photography</a></li>
              </ul>
            </div> {/* /.widget */}
          </div> {/* /.col-lg-3 */}


          <div className="col-lg-3">
            <div className="widget">
              <h3>Contact</h3>
              <address>43 Raymouth Rd. Baltemoer, London 3910</address>
              <ul className="list-unstyled links mb-4">
                <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                <li><a href="mailto:info@mydomain.com">info@mydomain.com</a></li>
              </ul>

              <h3>Connect</h3>
              <ul className="list-unstyled social">
                <li><a href="#"><span className="icon-instagram"></span></a></li>
                <li><a href="#"><span className="icon-twitter"></span></a></li>
                <li><a href="#"><span className="icon-facebook"></span></a></li>
                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                <li><a href="#"><span className="icon-pinterest"></span></a></li>
                <li><a href="#"><span className="icon-dribbble"></span></a></li>
              </ul>

            </div> {/* /.widget */}
          </div> {/* /.col-lg-3 */}

        </div> {/* /.row */}





        <div className="row mt-5">
          <div className="col-12 text-center">
            {/* 
              **==========
              NOTE: 
              Please don't remove this copyright link unless you buy the license here https://untree.co/license/  

              **==========
            */}
            <p className="mb-0">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; <a href="https://shuttleflickshub.com">Shuttleflicks Hub</a>  Distributed By <a href="https://themewagon.com">ThemeWagon</a> {/* License information: https://untree.co/license/ */}
            </p>
          </div>
        </div>
      </div> {/* /.container */}
    </div> {/* /.site-footer */}
    </div>
  )
}

export default Footer
