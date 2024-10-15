import React from "react";
import "../css/style.css";

import { Link } from "react-router-dom";
import download from "../assets/img/download.jpg";

const Undangan = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-sm shadow-sm fixed-top">
        <div className="container">
          <Link className="navbar-brand text-light fw-bold" href="#">
            UndanganKita.com
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link fw-bold text-light" href="#">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-light" href="#">
                  DESIGN
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  <button className="navbar-top fw-bold" style={{ backgroundColor: "#f2ffe9" }}>
                    BUAT UNDANGAN
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Jumbotron  */}

      <section className="jumbotron shadow-sm">
        <div className="container-fluid" style={{ color: "#137e6d" }}>
          <p className="fw-bold fs-3 col-5">Buat undangan pernikahan lebih praktis dengan undangan digital</p>
          <p className="discount fs-1 fw-bold text-uppercase">Discount</p>
          <p className="angka-discount">
            <b>50%</b>
          </p>
          <p>Syarat & ketentuan berlaku*</p>
          <p>
            <Link href="">
              <button className="klik-disini fw-bold text-light">KLIK DISINI</button>
            </Link>
          </p>
        </div>
      </section>

      {/* Design */}

      <section className="design">
        <div className="container-fluid">
          <p className="design-teks h4 fw-bold">Pilihan tema dan design bervariasi</p>
          <p className="design-teks">Buat undangan digital sesuai keinginanmu</p>

          <p className="design-lainnya text-end">
            <Link href="">
              <button className="design-lainnya-1 fw-bold text-light">DESIGN LAINNYA</button>
            </Link>
          </p>

          <div className="cd row row-cols-1 row-cols-md-4 g-4 text-center">
            <div className="col">
              <div className="card h-100">
                <img src={download} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    <Link href="#" className="btn fw-bold">
                      Tema 1
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={download} className="card-img-center" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    <Link href="#" className="btn fw-bold">
                      Tema 2
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={download} className="card-img-center" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    <Link href="#" className="btn fw-bold">
                      Tema 3
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={download} className="card-img-center" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    <Link href="#" className="btn fw-bold">
                      Tema 4
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fitur */}

      <section className="fitur">
        <div className="container">
          <p className="fitur-judul h3 fw-bold text-center" style={{ paddingTop: "3rem" }}>
            Fitur Undangan Digital
          </p>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="galeri col">
              <div className="float-left">
                <i className="text-start fa-solid fa-camera-retro fa-3x"></i>
              </div>
              <h3 className="fw-bold">Galeri</h3>
              <p>Pilih foto terbaik dan buat galeri sesuai dengan keinginanmu</p>
            </div>

            <div className="kalender col">
              <i className="fa-solid fa-calendar fa-3x"></i>
              <h3 className="fw-bold">Kalender</h3>
              <p>Sesuaikan dengan tanggal pernikahanmu</p>
            </div>

            <div className="lokasi col">
              <i className="fa-solid fa-location-dot fa-3x"></i>
              <h3 className="fw-bold">Lokasi</h3>
              <p>Terhubung dengan google maps</p>
            </div>

            <div className="kartu-ucapan col">
              <i className="fa-solid fa-message fa-3x"></i>
              <h3 className="fw-bold">Kartu Ucapan</h3>
              <p>Kartu ucapan online</p>
            </div>

            <div className="amplop col">
              <i className="fa-solid fa-dollar-sign fa-3x"></i>
              <h3 className="fw-bold">Amplop Digital</h3>
              <p>Pilih foto terbaik dan buat galeri sesuai dengan keinginanmu</p>
            </div>

            <div className="music col">
              <i className="fa-solid fa-music fa-3x"></i>
              <h3 className="fw-bold">Auto Play Music</h3>
              <p>Pilih foto terbaik dan buat galeri sesuai dengan keinginanmu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Harga */}

      <section className="harga">
        <div className="container">
          <p className="h3 fw-bold text-center" style={{ paddingBottom: "2rem" }}>
            Pilih Tema Sesuai Budget Anda
          </p>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="fw-bold text-center">Bronze</h3>
                  <h2 className="fw-bold text-center">75k</h2>
                  <p className="fw-bold fa-solid fa-square-check"> 10 Photo</p>
                  <br></br>
                  <p className="fw-bold fa-solid fa-square-check"> Custom Link</p>
                  <br></br>
                  <p className="fw-bold fa-solid fa-square-check"> Gratis Tema</p>
                  <p className="card-text text-center">
                    <Link href="#" className="btn">
                      <i className="fa-solid fa-cart-shopping fa-3x"></i>
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="fw-bold text-center ">Silver</h3>
                  <h2 className="fw-bold text-center">100k</h2>
                  <p className="fw-bold fa-solid fa-square-check"> 10 Photo</p> <br />
                  <p className="fw-bold fa-solid fa-square-check"> Custom Link</p> <br />
                  <p className="fw-bold fa-solid fa-square-check"> Gratis Tema</p>
                  <br />
                  <p className="fw-bold fa-solid fa-square-check"> Google Maps</p>
                  <p className="card-text text-center">
                    <Link href="#" className="btn">
                      <i className="fa-solid fa-cart-shopping fa-3x"></i>
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="fw-bold text-center ">Gold</h3>
                  <h2 className="fw-bold text-center">125k</h2>
                  <p className="fw-bold fa-solid fa-square-check"> 10 Photo</p>
                  <br />
                  <p className="fw-bold fa-solid fa-square-check"> Custom Link</p>
                  <br />
                  <p className="fw-bold fa-solid fa-square-check"> Gratis Tema</p>
                  <br />
                  <p className="fw-bold fa-solid fa-square-check"> Google Maps</p>
                  <br />
                  <p className="fw-bold fa-solid fa-square-check"> Music</p>
                  <p className="card-text text-center">
                    <Link href="#" className="btn">
                      <i className="fa-solid fa-cart-shopping fa-3x"></i>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cara Pemesanan */}

      <section className="pemesanan">
        <div className="container col-4">
          <p className="fw-bold fs-2 text-center">Cara Pemesanan</p>
          <hr></hr>
          <p className="fw-bold fs-3">1. Pilih Tema</p>
          <p className="fs4">Pilih Template Undangan yang Anda inginkan, Isi Data Undangan & Lihat Preview sebelum finalisasi</p>

          <p className="fw-bold fs-3">2. Lakukan Pembayaran</p>
          <p className="fs4">Setelah pilih tema undangan digital nya Anda lakukan pembayaran terlebih dahulu</p>

          <p className="fw-bold fs-3">3. Undangan Siap Dibagikan</p>
          <p className="fs4">Kami akan Kirimkan Undangan Digital Anda dengan menyertakan link website ke kontak WhatsApp</p>
        </div>
      </section>

      {/* Testimonial */}

      <section className="testi">
        <div className="container">
          <p className="text-center fw-bold" style={{ paddingTop: "2rem" }}>
            Apa kata mereka?
          </p>
          <p className="text-center">Kata mereka tentang UndanganKita.com</p>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <div className="foto">
                    <p className="text-center">Foto</p>
                  </div>
                  <h2 className="fw-bold text-center">Alex</h2>
                  <hr></hr>
                  <p className="card-text text-center">Harga sangat terjangkau</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="foto">
                    <p className="text-center">Foto</p>
                  </div>
                  <h2 className="fw-bold text-center">Rojak</h2>
                  <hr></hr>
                  <p className="card-text text-center">Harga sangat terjangkau</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <div className="foto">
                    <p className="text-center">Foto</p>
                  </div>
                  <h2 className="fw-bold text-center">Sholihin</h2>
                  <hr></hr>
                  <p className="card-text text-center">Harga sangat terjangkau</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Undangan;
