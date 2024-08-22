import { Header } from '../views/global/Header';
import DataList from '../views/local/DataList';
import { Footer } from '../views/global/Footer';
import DataChart from '../views/local/DataChart';
import { useState } from 'react';

export const Stat = () => {
  const [isShowChart, setIsShowChart ] = useState(true);

  return (
    <>
      <Header />
      <DataList setShow={setIsShowChart} />
      <DataChart show={isShowChart} />
      <Footer />
    </>
  );
};
