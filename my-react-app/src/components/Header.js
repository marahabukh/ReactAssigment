import React from "react"; 
import { Bell } from "lucide-react";

function Header() {
  return (
    <header className="py-3 border-bottom bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        <a href="#" className="text-decoration-none">
          <h1 className="m-0 fs-3 fw-bold text-primary">FickleFlight</h1>
        </a>

        <div className="d-flex align-items-center gap-4">
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a href="/SR" className="nav-link text-dark">
                  Explore
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link text-dark">
                  Search
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                  Hotels
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                  Offers
                </a>
              </li>
            </ul>
          </nav>

          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-link p-0 position-relative">
              <Bell size={20} />
              <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New notifications</span>
              </span>
            </button>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-S6gLFey3bFiQol3iXYgSqBedRmgPs6.png"
              alt="User profile"
              className="rounded-circle"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
