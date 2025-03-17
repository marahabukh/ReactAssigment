import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowRight, ChevronDown } from 'lucide-react';

function SearchResults() {
  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="mb-4">
                <h5 className="mb-3">Stops</h5>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="1stop" />
                  <label className="form-check-label" htmlFor="1stop">
                    1 Stop
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="2stops" />
                  <label className="form-check-label" htmlFor="2stops">
                    2 Stops
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="mb-3">Booking Options</h5>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="fickleflight" />
                  <label className="form-check-label" htmlFor="fickleflight">
                    Book on FickleFlight
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="official" />
                  <label className="form-check-label" htmlFor="official">
                    Official Airline Websites
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="mb-3">Flight Experience</h5>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="noOvernight" />
                  <label className="form-check-label" htmlFor="noOvernight">
                    No overnight flights
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="noLongStops" />
                  <label className="form-check-label" htmlFor="noLongStops">
                    No long stop-overs
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="mb-3">Airlines</h5>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="singaporeAir" />
                  <label className="form-check-label" htmlFor="singaporeAir">
                    Singapore Airlines
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="qatarAir" />
                  <label className="form-check-label" htmlFor="qatarAir">
                    Qatar Airways
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h6 className="mb-0">10 out of 177 Results</h6>
          </div>

          <div className="card mb-3 border">
            <div className="card-body p-3">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-light p-2 me-2" style={{ width: "40px", height: "40px" }}>
                      <img src="https://th.bing.com/th/id/R.897d9d7e684666db2b68b7f0aecde6ed?rik=4aYDZHu8%2bbiSBg&pid=ImgRaw&r=0" alt="Turkish Airlines" className="img-fluid" />
                    </div>
                    <div className="small">Turkish Airlines</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column align-items-start">
                    <div className="fw-bold">11:35 PM</div>
                    <div className="small text-muted">SIN</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center text-muted">
                      <div className="mx-2">●</div>
                      <div className="mx-2">
                        <ArrowRight size={16} />
                      </div>
                      <div className="mx-2">●</div>
                    </div>
                    <div className="small text-muted">33H 10M, 1-stop</div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="d-flex flex-column align-items-end">
                    <div className="fw-bold">4:45 PM</div>
                    <div className="small text-muted">LAX</div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="text-warning fw-bold text-end">S$ 723</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 border">
            <div className="card-body p-3">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-light p-2 me-2" style={{ width: "40px", height: "40px" }}>
                      <img src="https://th.bing.com/th/id/R.897d9d7e684666db2b68b7f0aecde6ed?rik=4aYDZHu8%2bbiSBg&pid=ImgRaw&r=0" alt="Singapore Airlines" className="img-fluid" />
                    </div>
                    <div className="small">Singapore Airlines</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column align-items-start">
                    <div className="fw-bold">8:45 PM</div>
                    <div className="small text-muted">SIN</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center text-muted">
                      <div className="mx-2">●</div>
                      <div className="mx-2">
                        <ArrowRight size={16} />
                      </div>
                      <div className="mx-2">●</div>
                    </div>
                    <div className="small text-muted">15H 10M, 2-stops</div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="d-flex flex-column align-items-end">
                    <div className="fw-bold">7:55 PM</div>
                    <div className="small text-muted">LAX</div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="text-warning fw-bold text-end">S$ 900</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 border">
            <div className="card-body p-3">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-light p-2 me-2" style={{ width: "40px", height: "40px" }}>
                      <img src="https://th.bing.com/th/id/R.897d9d7e684666db2b68b7f0aecde6ed?rik=4aYDZHu8%2bbiSBg&pid=ImgRaw&r=0" alt="Japan Airlines" className="img-fluid" />
                    </div>
                    <div className="small">Japan Airlines</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column align-items-start">
                    <div className="fw-bold">8:20 PM</div>
                    <div className="small text-muted">SIN</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center text-muted">
                      <div className="mx-2">●</div>
                      <div className="mx-2">
                        <ArrowRight size={16} />
                      </div>
                      <div className="mx-2">●</div>
                    </div>
                    <div className="small text-muted">17H 30M, 1-stop</div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="d-flex flex-column align-items-end">
                    <div className="fw-bold">9:50 PM</div>
                    <div className="small text-muted">LAX</div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="text-warning fw-bold text-end">S$ 859</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 border">
            <div className="card-body p-3">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-light p-2 me-2" style={{ width: "40px", height: "40px" }}>
                      <img src="https://th.bing.com/th/id/R.897d9d7e684666db2b68b7f0aecde6ed?rik=4aYDZHu8%2bbiSBg&pid=ImgRaw&r=0" alt="ANA" className="img-fluid" />
                    </div>
                    <div className="small">ANA</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column align-items-start">
                    <div className="fw-bold">6:35 PM</div>
                    <div className="small text-muted">SIN</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center text-muted">
                      <div className="mx-2">●</div>
                      <div className="mx-2">
                        <ArrowRight size={16} />
                      </div>
                      <div className="mx-2">●</div>
                    </div>
                    <div className="small text-muted">19H 15M, 1-stop</div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="d-flex flex-column align-items-end">
                    <div className="fw-bold">9:50 PM</div>
                    <div className="small text-muted">LAX</div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="text-warning fw-bold text-end">S$ 936</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 border">
            <div className="card-body p-3">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-light p-2 me-2" style={{ width: "40px", height: "40px" }}>
                      <img src="https://th.bing.com/th/id/R.897d9d7e684666db2b68b7f0aecde6ed?rik=4aYDZHu8%2bbiSBg&pid=ImgRaw&r=0" alt="American Airlines" className="img-fluid" />
                    </div>
                    <div className="small">American Airlines</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column align-items-start">
                    <div className="fw-bold">8:20 PM</div>
                    <div className="small text-muted">SIN</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center text-muted">
                      <div className="mx-2">●</div>
                      <div className="mx-2">
                        <ArrowRight size={16} />
                      </div>
                      <div className="mx-2">●</div>
                    </div>
                    <div className="small text-muted">17H 30M, 1-stop</div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="d-flex flex-column align-items-end">
                    <div className="fw-bold">9:50 PM</div>
                    <div className="small text-muted">LAX</div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="text-warning fw-bold text-end">S$ 936</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 border">
            <div className="card-body p-3">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-light p-2 me-2" style={{ width: "40px", height: "40px" }}>
                      <img src="https://th.bing.com/th/id/R.897d9d7e684666db2b68b7f0aecde6ed?rik=4aYDZHu8%2bbiSBg&pid=ImgRaw&r=0" alt="Turkish Airlines" className="img-fluid" />
                    </div>
                    <div className="small">Turkish Airlines</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column align-items-start">
                    <div className="fw-bold">11:35 PM</div>
                    <div className="small text-muted">SIN</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center text-muted">
                      <div className="mx-2">●</div>
                      <div className="mx-2">
                        <ArrowRight size={16} />
                      </div>
                      <div className="mx-2">●</div>
                    </div>
                    <div className="small text-muted">33H 10M, 1-stop</div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="d-flex flex-column align-items-end">
                    <div className="fw-bold">4:45 PM</div>
                    <div className="small text-muted">LAX</div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="text-warning fw-bold text-end">S$ 673</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 border">
            <div className="card-body p-3">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-light p-2 me-2" style={{ width: "40px", height: "40px" }}>
                      <img src="https://th.bing.com/th/id/R.897d9d7e684666db2b68b7f0aecde6ed?rik=4aYDZHu8%2bbiSBg&pid=ImgRaw&r=0" alt="Japan Airlines" className="img-fluid" />
                    </div>
                    <div className="small">Japan Airlines</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column align-items-start">
                    <div className="fw-bold">10:25 PM</div>
                    <div className="small text-muted">SIN</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center text-muted">
                      <div className="mx-2">●</div>
                      <div className="mx-2">
                        <ArrowRight size={16} />
                      </div>
                      <div className="mx-2">●</div>
                    </div>
                    <div className="small text-muted">26H 45M, 1-stop</div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="d-flex flex-column align-items-end">
                    <div className="fw-bold">9:10 AM</div>
                    <div className="small text-muted">LAX</div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="text-warning fw-bold text-end">S$ 859</div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-grid">
            <button className="btn btn-primary">Show more results</button>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">RECENTLY BOOKED</h5>

              <div className="card mb-3 border">
                <div className="card-body p-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-light p-1 me-2" style={{ width: "30px", height: "30px" }}>
                        <img src="https://th.bing.com/th/id/R.897d9d7e684666db2b68b7f0aecde6ed?rik=4aYDZHu8%2bbiSBg&pid=ImgRaw&r=0" alt="Singapore Airlines" className="img-fluid" />
                      </div>
                      <div className="small">Singapore Airlines</div>
                    </div>
                    <div className="fw-bold">$1128</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex flex-column">
                      <div className="fw-bold">SIN</div>
                      <div className="small text-muted">Singapore</div>
                    </div>
                    <div className="d-flex align-items-center text-muted">
                      <ArrowRight size={16} />
                    </div>
                    <div className="d-flex flex-column text-end">
                      <div className="fw-bold">LAX</div>
                      <div className="small text-muted">Los Angeles</div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center small text-muted">
                    <div>
                      <i className="bi bi-person"></i> Economy
                    </div>
                    <div>
                      <i className="bi bi-people"></i> 2 Adults
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div className="d-flex justify-content-between align-items-center small">
                    <div className="text-muted">Booked on Expedia</div>
                    <div className="text-warning">1s ago!</div>
                  </div>
                </div>
              </div>

              <div className="card mb-3 border">
                <div className="card-body p-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-light p-1 me-2" style={{ width: "30px", height: "30px" }}>
                        <img src="https://th.bing.com/th/id/R.897d9d7e684666db2b68b7f0aecde6ed?rik=4aYDZHu8%2bbiSBg&pid=ImgRaw&r=0" alt="American Airlines" className="img-fluid" />
                      </div>
                      <div className="small">American Airlines</div>
                    </div>
                    <div className="fw-bold">$1024</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex flex-column">
                      <div className="fw-bold">SFO</div>
                      <div className="small text-muted">San Francisco</div>
                    </div>
                    <div className="d-flex align-items-center text-muted">
                      <ArrowRight size={16} />
                    </div>
                    <div className="d-flex flex-column text-end">
                      <div className="fw-bold">SIN</div>
                      <div className="small text-muted">Singapore</div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center small text-muted">
                    <div>
                      <i className="bi bi-person"></i> First Class
                    </div>
                    <div>
                      <i className="bi bi-people"></i> 1 Adult
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div className="d-flex justify-content-between align-items-center small">
                    <div className="text-muted">Booked on Kayak</div>
                    <div className="text-warning">2s ago!</div>
                  </div>
                </div>
              </div>

              <div className="card mb-3 border">
                <div className="card-body p-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-light p-1 me-2" style={{ width: "30px", height: "30px" }}>
                        <img src="https://th.bing.com/th/id/R.897d9d7e684666db2b68b7f0aecde6ed?rik=4aYDZHu8%2bbiSBg&pid=ImgRaw&r=0" alt="Japan Airlines" className="img-fluid" />
                      </div>
                      <div className="small">Japan Airlines</div>
                    </div>
                    <div className="fw-bold">$2996</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex flex-column">
                      <div className="fw-bold">PHX</div>
                      <div className="small text-muted">Phoenix</div>
                    </div>
                    <div className="d-flex align-items-center text-muted">
                      <ArrowRight size={16} />
                    </div>
                    <div className="d-flex flex-column text-end">
                      <div className="fw-bold">DXB</div>
                      <div className="small text-muted">Dubai</div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center small text-muted">
                    <div>
                      <i className="bi bi-person"></i> Economy
                    </div>
                    <div>
                      <i className="bi bi-people"></i> 3 Adults
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div className="d-flex justify-content-between align-items-center small">
                    <div className="text-muted">Booked on Skyscanner</div>
                    <div className="text-warning">3s ago!</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="btn btn-link text-primary">
                  Show more <ChevronDown size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
