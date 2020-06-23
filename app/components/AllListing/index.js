/* eslint-disable prettier/prettier */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import profilerImage from '../../assets/images/profiler.png';
import selecticonImage from '../../assets/images/selecticon.png';
import rightangleImage from '../../assets/images/rightangle.png';
import topImage from '../../assets/images/top.png';
import leftangleImage from '../../assets/images/leftangle.png';
import highlight6Image from '../../assets/images/highlight6.png';
import highlight4Image from '../../assets/images/highlight4.png';
import highlight1Image from '../../assets/images/highlight1.png';
import mainhighlightImage from '../../assets/images/mainhighlight.png';

const AllListing = () => (
        <>
        <Header />
  <section className="searchbanner innersearch">
    <div className="mycontainer container">
      <div className="row">
        <div className="col-md-12">
          <div className="searchwrap">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="SUCHE" />
              <div className="input-group-append">
                <select className="form-control">
                  <option>HDR-SPHERES</option>
                  <option>Default select1</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="filters">
    <div className="container mycontainer">
      <div className="row">
        <div className="col-md-12">
          <div className="top-left">
            <h5 className="content">FILTER</h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <h3>Resolution</h3>
          <label className="filtercheckbox">Any Resolution
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="filtercheckbox">12 MP
            <input type="checkbox" defaultChecked="checked" />
            <span className="checkmark" />
          </label>
          <label className="filtercheckbox">16 MP
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="filtercheckbox">50 MP
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="filtercheckbox">100 MP
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
        </div>
        <div className="col-md-3">
          <h3>Format</h3>
          <label className="filtercheckbox">Image
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="filtercheckbox">HDR-Spheres
            <input type="checkbox" defaultChecked="checked" />
            <span className="checkmark" />
          </label>
          <label className="filtercheckbox">360-Images
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <h3>Supervison</h3>
          <label className="filtercheckbox">Supervision
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
        </div>
        <div className="col-md-3">
          <h3>Color</h3>
          <label className="filtercheckbox">Black
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="filtercheckbox">White
            <input type="checkbox" defaultChecked="checked" />
            <span className="checkmark" />
          </label>
          <label className="filtercheckbox">Yellow
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="filtercheckbox">Red
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="filtercheckbox">Blue
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="filtercheckbox">Green
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
        </div>
        <div className="col-md-3">
          <h3>Image Style</h3>
          <label className="filtercheckbox">Closeup
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="filtercheckbox">Portrait
            <input type="checkbox" defaultChecked="checked" />
            <span className="checkmark" />
          </label>
          <label className="filtercheckbox">Aerial photograph
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="filtercheckbox">Silhouette
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="filtercheckbox">Declining perspective
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="filtercheckbox">Direct oversight
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
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
              <span><b>10</b></span>
              <span>20</span>
              <span>30</span>
              <span>40</span>
            </li>
            <li>
              <h6>RESULTS:<b>10</b></h6>
            </li>
            <li>
              <h6>PAGES <b>1/1</b></h6>
            </li>
            <li className="dropdown pointer">
              <h6 id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SORT BY <b>NEWEST</b> <img src={selecticonImage} alt="" /></h6>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section className="alllisting">
    <div className="container mycontainer">
      <div className="row">
        <div className="col-md-6 imgsett">
          <div className="eachimage">
            <img src={mainhighlightImage} className="image" alt="" />
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
                <a href="#" className="btn btnstyle2">Show Profile</a>
                <a href="#" className="btn btnstyle2">6 Perspectives</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 imgsett">
          <div className="eachimage">
            <img src={highlight1Image} className="image" alt="" />
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
                <a href="#" className="btn btnstyle2">Show Profile</a>
                <a href="#" className="btn btnstyle2">6 Perspectives</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 imgsett">
          <div className="eachimage">
            <img src={highlight4Image} className="image" alt="" />
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
                <a href="#" className="btn btnstyle2">Show Profile</a>
                <a href="#" className="btn btnstyle2">6 Perspectives</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 imgsett">
          <div className="eachimage">
            <img src={highlight6Image} className="image" alt="" />
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
                <a href="#" className="btn btnstyle2">Show Profile</a>
                <a href="#" className="btn btnstyle2">6 Perspectives</a>
              </div>
            </div>
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
              <h6>PAGES <b>1/1</b></h6>
            </li>
            <li>
              <h6><img src={leftangleImage} alt="" /> Previous <b> Page</b></h6>
            </li>
            <li className="movetop">
              <a href="javascript:void(0);">Top <img src={topImage} alt="" /></a>
            </li>
            <li>
              <h6>Next <b>Page</b> <img src={rightangleImage} alt="" /></h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
<Footer />


        </>
);

export default AllListing
