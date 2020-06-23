import React, { Suspense } from 'react';
// import Loader from 'react-loader-spinner';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import Profile from '../components/Profile';
import Mansory from '../components/Mansory';
import SingleListing from '../components/SingleListing';
import UploadPost from '../components/UploadPost';
import Login from '../components/Login';
import CategoryDetail from '../components/CategoryDetail';
import AllListing from '../components/AllListing';
import Register from '../components/Register';
import Privacy from '../components/Privacy';
// Import Containers

const Routes = () => (
  <Suspense fallback="Loading......">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/mansory" component={Mansory} />
      <Route exact path="/all-listing" component={AllListing} />
      <Route exact path="/single-listing" component={SingleListing} />
      <Route exact path="/upload-post" component={UploadPost} />
      <Route exact path="/category-detail" component={CategoryDetail} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Suspense>
);

export default Routes;
