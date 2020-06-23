/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import topImage from '../../assets/images/top.png';
import rightangleImage from '../../assets/images/rightangle.png';
import leftangleImage from '../../assets/images/leftangle.png';
import profilerImage from '../../assets/images/profiler.png';
import selecticonImage from '../../assets/images/selecticon.png';
import mansory2Image from '../../assets/images/mansory/mansory2.png';
import mansory3Image from '../../assets/images/mansory/mansory3.png';
import mansory4Image from '../../assets/images/mansory/mansory4.png';
import mansory5Image from '../../assets/images/mansory/mansory5.png';
import mansory6Image from '../../assets/images/mansory/mansory6.png';
import mansory7Image from '../../assets/images/mansory/mansory7.png';
import mansory8Image from '../../assets/images/mansory/mansory8.png';
import mansory10Image from '../../assets/images/mansory/mansory10.png';
import mansory11Image from '../../assets/images/mansory/mansory11.png';
import mansory12Image from '../../assets/images/mansory/mansory12.png';
import mansory13Image from '../../assets/images/mansory/mansory13.png';
import mansory14Image from '../../assets/images/mansory/mansory14.png';
import mansory15Image from '../../assets/images/mansory/mansory15.png';
import mansory16Image from '../../assets/images/mansory/mansory16.png';
import mansory17Image from '../../assets/images/mansory/mansory17.png';
import mansory18Image from '../../assets/images/mansory/mansory18.png';
import mansory19Image from '../../assets/images/mansory/mansory19.png';
import mansory20Image from '../../assets/images/mansory/mansory20.png';
import mansory21Image from '../../assets/images/mansory/mansory21.png';
import mansory22Image from '../../assets/images/mansory/mansory22.png';
import mansory23Image from '../../assets/images/mansory/mansory23.png';
import mansory24Image from '../../assets/images/mansory/mansory24.png';
import mansory25Image from '../../assets/images/mansory/mansory25.png';
import mansory26Image from '../../assets/images/mansory/mansory26.png';
import mansory27Image from '../../assets/images/mansory/mansory27.png';

const Mansory = () => (
  <>
    <Header />
    <div>
      <section className="searchbanner mansorybanner">
        <div className="mycontainer container">
          <div className="row">
            <div className="col-md-12">
              <div className="searchwrap">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="SUCHE"
                  />
                  <div className="input-group-append">
                    <select className="form-control">
                      <option>HDR-SPHERES</option>
                      <option>Default select1</option>
                    </select>
                  </div>
                </div>
                <ul className="catag">
                  <li>Nature</li>
                  <li>Urban</li>
                  <li>Architecture</li>
                  <li>More</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mansorycontent">
        <div className="container mycontainer">
          <div className="row">
            <div className="col-md-12">
              <div className="top-left">
                <h5 className="content">IMAGES</h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle
                Buchstaben da sind und wie sie aussehen. Manchmal benutzt man
                Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um
                Schriften zu testen. Manchmal Sätze, die alle Buchstaben des
                Alphabets enthalten - man nennt diese Sätze »Pangrams«. Sehr
                bekannt ist dieser: The quick brown fox jumps over the lazy old
                dog. Oft werden in Typoblindtexte auch fremdsprachige Satzteile
                eingebaut (AVAIL® and Wefox™ are testing aussi la Kerning), um
                die Wirkung in anderen Sprachen zu testen. In Lateinisch sieht
                zum Beispiel fast jede Schrift gut aus. Quod erat demonstrandum.
                Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="paginations">
        <div className="container mycontainer">
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li>
                  <h6>RESULTS PER PAGE</h6>
                  <span>
                    <b>10</b>
                  </span>
                  <span>20</span>
                  <span>30</span>
                  <span>40</span>
                </li>
                <li>
                  <h6>
                    RESULTS:<b>10</b>
                  </h6>
                </li>
                <li>
                  <h6>
                    PAGES <b>1/1</b>
                  </h6>
                </li>
                <li className="dropdown pointer">
                  <h6
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    SORT BY <b>NEWEST</b>
                    <img src={selecticonImage} alt="" />
                  </h6>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="mansorylayout">
        <div className="container-fluid">
          <div className="masonry-wrapper">
            <div className="masonry">
              <div className="masonry-item">
                <img
                  src={mansory19Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
                <div className="showprofile">
                  <div className="profiler">
                    <img src={profilerImage} alt="" />
                    <div className>
                      <p>Chile Atacama Desert</p>
                      <small>THORSTEN JASPER WEESE</small>
                      <small>CGI Director by recom</small>
                      <small>supervision available</small>
                    </div>
                  </div>
                  <div className="actions">
                    <a href="#" className="btn btnstyle2">
                      Show Profile
                    </a>
                    <a href="#" className="btn btnstyle2">
                      6 Perspectives
                    </a>
                  </div>
                </div>
              </div>
              <div className="masonry-item">
                <img
                  src={mansory20Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
                <div className="showprofile">
                  <div className="profiler">
                    <img src={profilerImage} alt="" />
                    <div className>
                      <p>Chile Atacama Desert</p>
                      <small>THORSTEN JASPER WEESE</small>
                      <small>CGI Director by recom</small>
                      <small>supervision available</small>
                    </div>
                  </div>
                  <div className="actions">
                    <a href="#" className="btn btnstyle2">
                      Show Profile
                    </a>
                    <a href="#" className="btn btnstyle2">
                      6 Perspectives
                    </a>
                  </div>
                </div>
              </div>
              <div className="masonry-item">
                <img
                  src={mansory12Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
                <div className="showprofile">
                  <div className="profiler">
                    <img src={profilerImage} alt="" />
                    <div className>
                      <p>Chile Atacama Desert</p>
                      <small>THORSTEN JASPER WEESE</small>
                      <small>CGI Director by recom</small>
                      <small>supervision available</small>
                    </div>
                  </div>
                  <div className="actions">
                    <a href="#" className="btn btnstyle2">
                      Show Profile
                    </a>
                    <a href="#" className="btn btnstyle2">
                      6 Perspectives
                    </a>
                  </div>
                </div>
              </div>
              <div className="masonry-item">
                <img
                  src={mansory21Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory22Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory4Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory23Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory2Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory24Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory25Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory3Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory5Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory26Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory15Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory16Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory17Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory27Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory10Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory13Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory11Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory6Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory18Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory8Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory14Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory19Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
              <div className="masonry-item">
                <img
                  src={mansory7Image}
                  alt="Dummy Image"
                  className="masonry-content"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bottompagination">
        <div className="container mycontainer">
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li>
                  <h6>
                    PAGES <b>1/1</b>
                  </h6>
                </li>
                <li>
                  <h6>
                    <img src={leftangleImage} alt="" /> Previous
                    <b> Page</b>
                  </h6>
                </li>
                <li className="movetop">
                  <a href="javascript:void(0);">
                    Top <img src={topImage} alt="" />
                  </a>
                </li>
                <li>
                  <h6>
                    Next <b>Page</b>
                    <img src={rightangleImage} alt="" />
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </>
);

export default Mansory;
