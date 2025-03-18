import "bootstrap/dist/css/bootstrap.min.css"
import { Facebook, Instagram, Twitter } from "lucide-react"
import React from "react";

function Footer() {
  return (
    <footer className="">
      <div className="bg-light py-5">
        <div className="container text-center">
          <h5 className="text-primary mb-2">SUBSCRIBE TO OUR NEWSLETTER</h5>
          <h2 className="mb-4 text-black">Get weekly updates</h2>

          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card shadow-sm border-0 p-4">
                <div className="card-body">
                  <p className="mb-4">Fill in your details to join the party!</p>
                  <div className="mb-3">
                    <input type="text" className="form-control form-control-lg" placeholder="Your name" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control form-control-lg" placeholder="Email address" />
                  </div>
                  <button className="btn btn-warning btn-lg px-5 text-white">SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="position-absolute bottom-0 w-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            style={{ fill: "#0071c2", marginBottom: "-1px" }}
          >
          
          </svg>
        </div>
      </div>

      <div style={{ background: "#0071c2", color: "white" }} className="pt-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-3">FickleFlight</h2>
              <p className="mb-4">
                Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also
                have all your flight needs in you online shop.
              </p>
              <div className="d-flex gap-3">
                <a
                  href="#"
                  className="text-white bg-white bg-opacity-25 rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-white bg-white bg-opacity-25 rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-white bg-white bg-opacity-25 rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
              <h5 className="mb-4">Company</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-white text-decoration-none">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-decoration-none">
                    News
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-decoration-none">
                    Careers
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-decoration-none">
                    How we work
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
              <h5 className="mb-4">Support</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-white text-decoration-none">
                    Account
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-decoration-none">
                    Support Center
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-decoration-none">
                    FAQ
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-decoration-none">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-4">
              <h5 className="mb-4">More</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-white text-decoration-none">
                    Covid Advisory
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-decoration-none">
                    Airline Fees
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-decoration-none">
                    Tips
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-decoration-none">
                    Quarantine Rules
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

