/* eslint-disable prettier/prettier */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import checkedImage from '../../assets/images/checked.png';
import delImage from '../../assets/images/del.png';
import selecticonImage from '../../assets/images/selecticon.png';
import topImage from '../../assets/images/top.png';
import highlight2Image from '../../assets/images/highlight2.png';
import dragdropImage from '../../assets/images/dragdrop.png';
import minusbImage from '../../assets/images/minus-b.png';
import plusbImage from '../../assets/images/plus-b.png';
import pluswImage from '../../assets/images/plus-w.png';

const UploadPost = () => (
    <>
   <Header />
  <section className="uploadphoto">
    <div className="container mycontainer">
      <div className="row align-items-center">
        <div className="col-md-12">
          <div className="logow">
            <img src="assets/images/logo-w.png" alt="logo" />
          </div>
          <div className="uploadbtn">
            <input type="file" id="real-file" hidden="hidden" />
            <div className="d-flex justify-content-center align-items-center">
              <img src={pluswImage} alt="" />
              <button type="button" className="uploadstyle" id="custom-button" >UPLOAD YOUR PHOTOS<br /><span>Select from computer</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="dragdrop">
    <div className="container mycontainer">
      <div className="row align-items-center">
        <div className="col-md-12">
          <div className="dragdropbtn">
            <input type="file" id="real-file" hidden="hidden" />
            <div className="d-flex justify-content-center align-items-center">
              <img src={dragdropImage} alt="" />
              <button type="button" className="uploadstyle" id="custom-button2"><span>You can also drag and drop here</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="addmore">
    <div className="container mycontainer">
      <div className="row">
        <div className="col-md-12">
          <div className="addlocation">
            <h4><b>ADD</b> LOCATION NAME</h4>
            <p>Location Name:</p>
          </div>
          <div className="addimages">
            <h6>ADD More Images <img src={plusbImage} alt="" /></h6>
          </div>
          <div className="imagetype">
            <div className="dropdown">
              <h4 className="pointer" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Format <img src={selecticonImage} alt="" /></h4>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Image</a>
                <a className="dropdown-item" href="#">HDR-Spheres</a>
                <a className="dropdown-item" href="#">360-Images</a>
              </div>
            </div>
            <div className="dropdown">
              <h4 className="pointer" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Color <img src={selecticonImage} alt="" /></h4>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Black</a>
                <a className="dropdown-item" href="#">White</a>
                <a className="dropdown-item" href="#">Yellow</a>
                <a className="dropdown-item" href="#">Red</a>
                <a className="dropdown-item" href="#">Blue</a>
                <a className="dropdown-item" href="#">Green</a>
              </div>
            </div>
            <div className="dropdown">
              <h4 className="pointer" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Resolution <img src={selecticonImage} alt="" /></h4>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">12 MP</a>
                <a className="dropdown-item" href="#">16 MP</a>
                <a className="dropdown-item" href="#">50 MP</a>
                <a className="dropdown-item" href="#">100 MP</a>
              </div>
            </div>
          </div>
          <div className="uploadmore">
            <a href="#" className="btn btnstyle3"><b>UPLOAD</b> to BEAUTIQUE</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="uploadlisting">
    <div className="container mycontainer">
      <div className="row">
        <div className="col-md-12">
          <div className="uploadlistingwrap">
            <div className="addlocation">
              <p>Chile Atacama Desert (1)</p>
              <img src={highlight2Image} alt="" />
            </div>
            <div className="addtags">
              <div className="addtaghead">
                <h4>ADD TAGS <img className="icon" src={plusbImage} alt="" /></h4>
                <small>Add tags and Location to be found more easily</small>
              </div>
              <h4 className="mb-1">TAG SUGGESTIONS</h4>
              <div className="tagslist">
                <ul>
                  <li><a href="#">Track Day <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Extreme sport <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Headwear <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Go <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Outdoor <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Racing driver <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Racing car <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Redy <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Real people <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Extreme sport <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Porsche <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Car <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Outdoor <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Pascal Schonlau <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">recom <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Redy <img className="icon" src={minusbImage} alt="" /></a></li>
                </ul>
              </div>
            </div>
            <div className="imagetype">
              <h4>HDR-SPHERES <img className="icon" src={selecticonImage} alt="" /></h4>
              <h4>COVER PICTURE <img className="icon" src={checkedImage} alt="" /></h4>
              <h4>ORIGINAL FILE <img className="icon" src={plusbImage} alt="" /></h4>
              <h4>DELETE <img className="icon" src={delImage} alt="" /></h4>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="uploadlistingwrap">
            <div className="addlocation">
              <p>Chile Atacama Desert (1)</p>
              <img src={highlight2Image} alt="" />
            </div>
            <div className="addtags">
              <div className="addtaghead">
                <h4>ADD TAGS <img className="icon" src={plusbImage} alt="" /></h4>
                <small>Add tags and Location to be found more easily</small>
              </div>
              <h4 className="mb-1">TAG SUGGESTIONS</h4>
              <div className="tagslist">
                <ul>
                  <li><a href="#">Track Day <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Extreme sport <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Headwear <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Go <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Outdoor <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Racing driver <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Racing car <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Redy <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Real people <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Extreme sport <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Porsche <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Car <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Outdoor <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Pascal Schonlau <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">recom <img className="icon" src={minusbImage} alt="" /></a></li>
                  <li><a href="#">Redy <img className="icon" src={minusbImage} alt="" /></a></li>
                </ul>
              </div>
            </div>
            <div className="imagetype">
              <h4>HDR-SPHERES <img className="icon" src={selecticonImage} alt="" /></h4>
              <h4>COVER PICTURE <img className="icon" src={checkedImage} alt="" /></h4>
              <h4>ORIGINAL FILE <img className="icon" src={plusbImage} alt="" /></h4>
              <h4>DELETE <img className="icon" src={delImage} alt="" /></h4>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="uploadmore">
            <a href="#" className="btn btnstyle3"><b>UPLOAD</b> to BEAUTIQUE</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="singlelisting-pagination">
    <div className="container mycontainer">
      <div className="row">
        <div className="col-md-12">
          <h6>PAGES <b>1/1</b></h6>
          <div className="movetop">
            <a href="javascript:void(0);">Top <img src={topImage} alt="movetop" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
<Footer />

    </>
)

export default UploadPost;
