import DataList from '../views/local/DataList';
import { Footer } from '../views/global/Footer';
import DataChart from '../views/local/DataChart';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Stat = () => {
  const [isShowChart, setIsShowChart ] = useState(true);
  const {viewType} = useParams();

  return (
    <>
      <DataList viewType={viewType} setShow={setIsShowChart} />
      <DataChart viewType={viewType} show={isShowChart} />
      <Footer />
    </>
  );
};
