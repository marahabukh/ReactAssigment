import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Calendar, ArrowRight, Bed, Ticket, Utensils, Bus, Car, Film } from "lucide-react"

function MainContent() {
  return (
    <>
      <section
        className="position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0071c2 0%, #00a1ff 100%)",
          minHeight: "600px",
        }}
      >
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            opacity: "0.3",
          }}
        ></div>

        <div className="position-absolute bottom-0 w-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ fill: "white", opacity: 0.7 }}>
            <path d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,202.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>

        <div className="container text-center text-white position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="display-3 fw-bold mb-3 mt-5" >Let's explore & travel the world</h1>
              <p className="lead mb-5">Find the best destinations and the most popular stays!</p>

              <div className="bg-white p-4 rounded-3 shadow-lg text-dark">
                <div className="mb-3">
                  <h4 className="text-start mb-4">SEARCH FLIGHTS</h4>

                  <div className="d-flex justify-content-end mb-3">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="tripType" id="return" />
                      <label className="form-check-label" htmlFor="return">
                        Return
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="tripType" id="oneWay" defaultChecked />
                      <label className="form-check-label" htmlFor="oneWay">
                        One-way
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-md-3">
                    <label className="form-label small text-muted">Departure</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Singapore (SIN)" />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label small text-muted">Arrival</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Los Angeles (LA)" />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label small text-muted">Date</label>
                    <div className="input-group">
                      <input type="text" className="form-control form-control-lg" placeholder="01/05/2022" />
                      <span className="input-group-text bg-white">
                        <Calendar size={20} />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">&nbsp;</label>
                    <button className="btn btn-warning btn-lg w-100 text-white fw-bold">SEARCH FLIGHTS</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h4 className="mb-4">RECENT SEARCHES</h4>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="text-primary mb-0">SIN</h3>
                  <div className="d-flex align-items-center">
                    <div className="mx-2 text-primary">●</div>
                    <div className="mx-2">
                      <ArrowRight className="text-primary" size={24} />
                    </div>
                    <div className="mx-2 text-primary">●</div>
                  </div>
                  <h3 className="text-primary mb-0">LAX</h3>
                </div>
                <div className="text-center mt-3">
                  <p className="mb-0">
                    <strong>Depart On:</strong> 7 Sep 2021
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="text-primary mb-0">SIN</h3>
                  <div className="d-flex align-items-center">
                    <div className="mx-2 text-primary">●</div>
                    <div className="mx-2">
                      <ArrowRight className="text-primary" size={24} />
                    </div>
                    <div className="mx-2 text-primary">●</div>
                  </div>
                  <h3 className="text-primary mb-0">LAX</h3>
                </div>
                <div className="text-center mt-3">
                  <p className="mb-0">
                    <strong>Depart On:</strong> 7 Sep 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-light">
        <div className="container">
          <h4 className="mb-4 text-muted">PREPARE FOR YOUR TRIP</h4>
          <div className="row g-4 text-center">
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h6 className="text-primary mb-2">PLAN YOUR NEXT TRIP</h6>
              <h2 className="mb-0">Most Popular Destinations</h2>
            </div>
            <a href="#" className="text-primary text-decoration-none d-flex align-items-center">
              View all destinations <ArrowRight size={18} className="ms-2" />
            </a>
          </div>

          <div className="row g-4">
          <div className="col-md-6 col-lg-3">
              <div className="card rounded-4 overflow-hidden border-0 shadow-sm">
                <div className="position-relative">
                  <img
                    src="https://th.bing.com/th/id/R.4e312752589af6f4da3d6cf28e2f9775?rik=6XvqwkBl8ue5ew&riu=http%3a%2f%2fphotos.wikimapia.org%2fp%2f00%2f03%2f67%2f44%2f20_full.jpg&ehk=tZ93i9NWQQUrD9mGvJIMN0tkrsdq1m1xzNI%2bJhdcGys%3d&risl=&pid=ImgRaw&r=0"
                    className="card-img-top"
                    alt="Paris"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="position-absolute bottom-0 start-0 p-3 text-white">
                    <h4 className="mb-0">Paris</h4>
                  </div>
                  <div className="position-absolute top-0 end-0 bg-white m-3 px-2 py-1 rounded-2">
                    <div className="small text-muted">FROM</div>
                    <div className="fs-4 fw-bold text-end">$699</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card rounded-4 overflow-hidden border-0 shadow-sm">
                <div className="position-relative">
                  <img
                    src="https://th.bing.com/th/id/OIP.PFbBGK8cQu-gJ2JgXw92JgHaEK?rs=1&pid=ImgDetMain"
                    className="card-img-top"
                    alt="Greece"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="position-absolute bottom-0 start-0 p-3 text-white">
                    <h4 className="mb-0">Greece</h4>
                  </div>
                  <div className="position-absolute top-0 end-0 bg-white m-3 px-2 py-1 rounded-2">
                    <div className="small text-muted">FROM</div>
                    <div className="fs-4 fw-bold text-end">$1079</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card rounded-4 overflow-hidden border-0 shadow-sm">
                <div className="position-relative">
                  <img
                    src="https://a.cdn-hotels.com/gdcs/production181/d401/8351bef0-ef7f-4979-b020-21621c88cdc0.jpg"
                    className="card-img-top"
                    alt="Norway"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="position-absolute bottom-0 start-0 p-3 text-white">
                    <h4 className="mb-0">Norway</h4>
                  </div>
                  <div className="position-absolute top-0 end-0 bg-white m-3 px-2 py-1 rounded-2">
                    <div className="small text-muted">FROM</div>
                    <div className="fs-4 fw-bold text-end">$895</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default MainContent
