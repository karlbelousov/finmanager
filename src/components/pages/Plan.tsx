import React from 'react';
import DataList from '../views/local/DataList';
import { Footer } from '../views/global/Footer';
export class Plan extends React.Component {

  setShow = () => false;

  render() {
    return (
      <>
        <DataList viewType={'расход'} setShow={this.setShow} />
        <Footer />
      </>
    );
  }
}
