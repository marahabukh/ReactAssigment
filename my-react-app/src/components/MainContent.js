import "bootstrap/dist/css/bootstrap.min.css"
import React from "react" 
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
              <h1 className="display-3 fw-bold mb-3 mt-5">Let's explore & travel the world</h1>
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
            <div className="col-md-4 col-lg-2">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex flex-column align-items-center">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 mb-3">
                    <Bed size={24} className="text-primary" />
                  </div>
                  <h6>Hotels</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex flex-column align-items-center">
                  <div className="rounded-circle bg-warning bg-opacity-10 p-3 mb-3">
                    <Ticket size={24} className="text-warning" />
                  </div>
                  <h6>Tickets</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex flex-column align-items-center">
                  <div className="rounded-circle bg-success bg-opacity-10 p-3 mb-3">
                    <Utensils size={24} className="text-success" />
                  </div>
                  <h6>Restaurants</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex flex-column align-items-center">
                  <div className="rounded-circle bg-danger bg-opacity-10 p-3 mb-3">
                    <Bus size={24} className="text-danger" />
                  </div>
                  <h6>Tours</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex flex-column align-items-center">
                  <div className="rounded-circle bg-info bg-opacity-10 p-3 mb-3">
                    <Car size={24} className="text-info" />
                  </div>
                  <h6>Car Rental</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex flex-column align-items-center">
                  <div className="rounded-circle bg-secondary bg-opacity-10 p-3 mb-3">
                    <Film size={24} className="text-secondary" />
                  </div>
                  <h6>Activities</h6>
                </div>
              </div>
            </div>
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
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/640px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"
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
                    src=""
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZc6UUFuYHgSy0W2_esgURbmTbKpfaFdyZw&s"
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
            <div className="col-md-6 col-lg-3">
              <div className="card rounded-4 overflow-hidden border-0 shadow-sm">
                <div className="position-relative">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB4Bm1vo5qbGbR48ViIxsGXUBxeUJ090cRgg&s"
                    className="card-img-top"
                    alt="Tokyo"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="position-absolute bottom-0 start-0 p-3 text-white">
                    <h4 className="mb-0">Tokyo</h4>
                  </div>
                  <div className="position-absolute top-0 end-0 bg-white m-3 px-2 py-1 rounded-2">
                    <div className="small text-muted">FROM</div>
                    <div className="fs-4 fw-bold text-end">$1250</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h6 className="text-primary mb-2">BEST PLACES TO STAY</h6>
              <h2 className="mb-0">Most Popular Stays</h2>
            </div>
            <a href="#" className="text-primary text-decoration-none d-flex align-items-center">
              View all stays <ArrowRight size={18} className="ms-2" />
            </a>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="https://www.intechnic.com/hubfs/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg"
                  className="card-img-top"
                  alt="Luxury Hotel"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p className="card-text text-muted mb-0">Entire bungalow</p>
                    <span className="badge bg-primary">4.9 ★</span>
                  </div>
                  <h5 className="card-title">Matterhorn Suites</h5>
                  <p className="card-text text-primary fw-bold">$575/night</p>
                </div>
                <div className="card-footer bg-white border-0">
                  <button className="btn btn-outline-primary w-100">View Details</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="https://yellowzebrasafaris.com/media/46262/top-beach-resorts-in-tanzania-africa.jpg?width=1048&height=612&format=jpg&v=1da5e0fdc340cd0"
                  className="card-img-top"
                  alt="Beach Resort"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p className="card-text text-muted mb-0">2-Story beachfront suite</p>
                    <span className="badge bg-primary">4.8 ★</span>
                  </div>
                  <h5 className="card-title">Discovery Shores</h5>
                  <p className="card-text text-primary fw-bold">$360/night</p>
                </div>
                <div className="card-footer bg-white border-0">
                  <button className="btn btn-outline-primary w-100">View Details</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="https://www.arcticcabins.co.uk/wp-content/uploads/2023/03/10m-Arctic-BBQ-Cabin_feature_Compressed.jpg"
                  className="card-img-top"
                  alt="Arctic Hut"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p className="card-text text-muted mb-0">Single deluxe hut</p>
                    <span className="badge bg-primary">4.7 ★</span>
                  </div>
                  <h5 className="card-title">Arctic Hut</h5>
                  <p className="card-text text-primary fw-bold">$420/night</p>
                </div>
                <div className="card-footer bg-white border-0">
                  <button className="btn btn-outline-primary w-100">View Details</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="https://icefieldsparkway.com/assets/volumes/images/_1200x630_crop_center-center_82_none/lake_louise_lake__boathouse.jpg?v=1741045457"
                  className="card-img-top"
                  alt="Lake Louise Inn"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p className="card-text text-muted mb-0">Deluxe King Room</p>
                    <span className="badge bg-primary">4.6 ★</span>
                  </div>
                  <h5 className="card-title">Lake Louise Inn</h5>
                  <p className="card-text text-primary fw-bold">$244/night</p>
                </div>
                <div className="card-footer bg-white border-0">
                  <button className="btn btn-outline-primary w-100">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h6 className="text-primary mb-2">EXPLORE THE WORLD</h6>
              <h2 className="mb-0">Recommended Holidays</h2>
            </div>
            <a href="#" className="text-primary text-decoration-none d-flex align-items-center">
              View all holidays <ArrowRight size={18} className="ms-2" />
            </a>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card rounded-4 overflow-hidden border-0 shadow-sm">
                <div className="position-relative">
                  <img
                    src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
                    className="card-img-top"
                    alt="Bali"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="position-absolute bottom-0 start-0 p-3 text-white">
                    <h4 className="mb-0">Bali</h4>
                    <p className="mb-0">4D3N</p>
                  </div>
                  <div className="position-absolute top-0 end-0 bg-white m-3 px-2 py-1 rounded-2">
                    <div className="small text-muted">FROM</div>
                    <div className="fs-4 fw-bold text-end">$899</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card rounded-4 overflow-hidden border-0 shadow-sm">
                <div className="position-relative">
                  <img
                    src="https://th.bing.com/th/id/R.832d649a23cb2bd6bf3a6409d5a5f3da?rik=SGX4%2fTJKfOS%2bJw&pid=ImgRaw&r=0"
                    className="card-img-top"
                    alt="Swiss"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="position-absolute bottom-0 start-0 p-3 text-white">
                    <h4 className="mb-0">Swiss</h4>
                    <p className="mb-0">6D5N</p>
                  </div>
                  <div className="position-absolute top-0 end-0 bg-white m-3 px-2 py-1 rounded-2">
                    <div className="small text-muted">FROM</div>
                    <div className="fs-4 fw-bold text-end">$900</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card rounded-4 overflow-hidden border-0 shadow-sm">
                <div className="position-relative">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Boracay_White_Beach.png/1200px-Boracay_White_Beach.png"
                    className="card-img-top"
                    alt="Boracay"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="position-absolute bottom-0 start-0 p-3 text-white">
                    <h4 className="mb-0">Boracay</h4>
                    <p className="mb-0">5D4N</p>
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
                    src="https://upload.wikimedia.org/wikipedia/commons/1/13/Kayangan_Lake%2C_Coron_-_Palawan.jpg"
                    className="card-img-top"
                    alt="Palawan"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="position-absolute bottom-0 start-0 p-3 text-white">
                    <h4 className="mb-0">Palawan</h4>
                    <p className="mb-0">4D3N</p>
                  </div>
                  <div className="position-absolute top-0 end-0 bg-white m-3 px-2 py-1 rounded-2">
                    <div className="small text-muted">FROM</div>
                    <div className="fs-4 fw-bold text-end">$789</div>
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

