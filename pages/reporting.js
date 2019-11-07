import React from 'react';
import PleaseSignIn from '../components/PleaseSignIn';
// import Reporting from '../components/special/Reporting';

const ProtectedPage = props => (
  <div>
    <PleaseSignIn>{/* <Reporting /> */}</PleaseSignIn>
  </div>
);

export default ProtectedPage;
