/* eslint-disable prettier/prettier */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import img1Image from '../../assets/images/img1.png'
import img2Image from '../../assets/images/img2.png'
import img3Image from '../../assets/images/img3.png'
import img4Image from '../../assets/images/img4.png'
import profilerImage from '../../assets/images/profiler.png';
import mainhighlightImage from '../../assets/images/mainhighlight.png'
import mainhighlight2Image from '../../assets/images/mainhighlight2.png'
import mainhighlight3Image from '../../assets/images/mainhighlight3.png'
import highlight1Image from '../../assets/images/highlight1.png'
import highlight2Image from '../../assets/images/highlight2.png'
import highlight3Image from '../../assets/images/highlight3.png'
import highlight4Image from '../../assets/images/highlight4.png'
import highlight5Image from '../../assets/images/highlight5.png'
import highlight6Image from '../../assets/images/highlight6.png'
import highlight7Image from '../../assets/images/highlight7.png'
import highlight8Image from '../../assets/images/highlight8.png'
import highlight9Image from '../../assets/images/highlight9.png'
import topImage from '../../assets/images/top.png'
import Header from '../Header';
import Footer from '../Footer';
const HomePage = () => (
  <>
  <Header />
   <div>
     <section className="searchbanner">
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
     <section className="imglisting">
       <div className="mycontainer container">
         <div className="row">
           <div className="col-md-3">
             <div className="box">
               <h3>IMAGES</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
               <img src={img1Image} className="img-fluid" alt="" />
             </div>
             <a href="#" className="btn btnstyle1">MORE</a>
           </div>
           <div className="col-md-3">
             <div className="box">
               <h3>IMAGES</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
               <img src={img2Image} className="img-fluid" alt="" />
             </div>
             <a href="#" className="btn btnstyle1">MORE</a>
           </div>
           <div className="col-md-3">
             <div className="box">
               <h3>IMAGES</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
               <img src={img3Image} className="img-fluid" alt="" />
             </div>
             <a href="#" className="btn btnstyle1">MORE</a>
           </div>
           <div className="col-md-3">
             <div className="box">
               <h3>IMAGES</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
               <img src={img4Image} className="img-fluid" alt="" />
             </div>
             <a href="#" className="btn btnstyle1">MORE</a>
           </div>
         </div>
       </div>
     </section>
     <section className="monthly">
       <div className="container mycontainer">
         <div className="row">
           <div className="col-sm-12">
             <h1>OUR MONTHLY<br /> HIGHLIGHTS</h1>
           </div>
         </div>
         <div className="row">
           <div className="col-md-12">
             <div className="monthlywrap">
               <div className="row">
                 <div className="col-md-12">
                   <h2>Chile Atacama Desert</h2>
                 </div>
               </div>
               <div className="row">
                 <div className="col-md-12">
                   <img src={mainhighlightImage} className="img-fluid mainhighlight" alt="" />
                 </div>
                 <div className="col-md-6">
                   <img src={highlight1Image} className="img-fluid subhighlight" alt="" />
                 </div>
                 <div className="col-md-3 p-0">
                   <img src={highlight2Image} className="img-fluid subhighlight" alt="" />
                 </div>
                 <div className="col-md-3">
                   <img src={highlight3Image} className="img-fluid subhighlight" alt="" />
                 </div>
               </div>
               <div className="row">
                 <div className="col-md-12">
                   <div className="whohighlighter">
                     <div className="profiler">
                       <div className>
                         <h4>THORSTEN JASPER WEESE </h4>
                         <p>CGI Director by recom<br /> supervision available</p>
                       </div>
                       <img src={profilerImage} alt="" />
                     </div>
                     <div className="action">
                       <a href="#" className="btn btnstyle1">Show Profile</a>
                       <a href="#" className="btn btnstyle1">More</a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="monthlywrap">
               <div className="row">
                 <div className="col-md-12">
                   <h2>Chile Atacama Desert 2</h2>
                 </div>
               </div>
               <div className="row">
                 <div className="col-md-12">
                   <img src={mainhighlight2Image} className="img-fluid mainhighlight" alt="" />
                 </div>
                 <div className="col-md-6">
                   <img src={highlight4Image} className="img-fluid subhighlight" alt="" />
                 </div>
                 <div className="col-md-3 p-0">
                   <img src={highlight5Image} className="img-fluid subhighlight" alt="" />
                 </div>
                 <div className="col-md-3">
                   <img src={highlight6Image} className="img-fluid subhighlight" alt="" />
                 </div>
               </div>
               <div className="row">
                 <div className="col-md-12">
                   <div className="whohighlighter">
                     <div className="profiler">
                       <div className>
                         <h4>THORSTEN JASPER WEESE </h4>
                         <p>CGI Director by recom<br /> supervision available</p>
                       </div>
                       <img src={profilerImage} alt="" />
                     </div>
                     <div className="action">
                       <a href="#" className="btn btnstyle1">Show Profile</a>
                       <a href="#" className="btn btnstyle1">More</a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="monthlywrap">
               <div className="row">
                 <div className="col-md-12">
                   <h2>Chile Atacama Desert</h2>
                 </div>
               </div>
               <div className="row">
                 <div className="col-md-12">
                   <img src={mainhighlight3Image} className="img-fluid mainhighlight" alt="" />
                 </div>
                 <div className="col-md-6">
                   <img src={highlight7Image} className="img-fluid subhighlight" alt="" />
                 </div>
                 <div className="col-md-3 p-0">
                   <img src={highlight8Image} className="img-fluid subhighlight" alt="" />
                 </div>
                 <div className="col-md-3">
                   <img src={highlight9Image} className="img-fluid subhighlight" alt="" />
                 </div>
               </div>
               <div className="row">
                 <div className="col-md-12">
                   <div className="whohighlighter mb-0">
                     <div className="profiler">
                       <div className>
                         <h4>THORSTEN JASPER WEESE </h4>
                         <p>CGI Director by recom<br /> supervision available</p>
                       </div>
                       <img src={profilerImage} alt="" />
                     </div>
                     <div className="action">
                       <a href="#" className="btn btnstyle1">Show Profile</a>
                       <a href="#" className="btn btnstyle1">More</a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
     <div className="movetop">
       <a href="javascript:void(0);">Top <img src={topImage} alt="" /></a>
     </div>
   </div>
  <Footer />

  </>
);

export default HomePage;
