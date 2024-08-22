import { useEffect, useState } from 'react';
import css from '../../../styles/dataList.css';
import { useAppSelector } from '../../../hooks';

const {DataContainer, ContentLine,ContentCell, ButtonsLine, ButtonItem} = css;

type DataListProps = {
  setShow: (isShow: boolean) => void;
}

const DataList = ({setShow}: DataListProps) => {
  const data = useAppSelector((state) => state.data);
  const [dataType, setDataType] = useState('расход');
  const filterData = data.filter((item) => item.type === dataType);
  const filterDataSumm = data.filter((item) => item.type === dataType)
    .reduce((summ, item) => {
      const {value} = item;
      return summ + +value;
    }, 0);

  const filterDataDelta = data
    .reduce((summ, item) => {
      const {value, type} = item;
      if (type === 'доход') {
        return summ + +value;
      } else {
        return summ - +value;
      }
    }, 0);

  const reducerDataType1 = () => {
    setDataType('доход');
    setShow(false);
  };
  const reducerDataType2 = () => {
    setDataType('расход');
    setShow(true);
  };
  const reducerDataType3 = () => {
    setDataType('');
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(data);
  }, [data]);

  return (
    <>
      <ButtonsLine>
        <ButtonItem style={{fontWeight: dataType === 'доход' ? 'bold' : ''}} onClick={reducerDataType1}>доходы</ButtonItem>
        <ButtonItem style={{fontWeight: dataType === 'расход' ? 'bold' : ''}} onClick={reducerDataType2}>расходы</ButtonItem>
        <ButtonItem style={{fontWeight: dataType === '' ? 'bold' : ''}} onClick={reducerDataType3}>общее</ButtonItem>
      </ButtonsLine>
      <DataContainer>
        {filterData.length > 0 ? (
          <>
            {filterData.map((item) => (
              <ContentLine key={'data'} style={{marginBottom: '10px'}}>
                <ContentCell width='20%'>{item.value}</ContentCell>
                <ContentCell width='20%'>{item.type}</ContentCell>
                <ContentCell width='60%'>{item.comment}</ContentCell>
              </ContentLine>
            ))}
            <ContentLine>
              <ContentCell width='20%'>{filterDataSumm}</ContentCell>
              <ContentCell width='20%'>--</ContentCell>
              <ContentCell width='60%'>--</ContentCell>
            </ContentLine>
          </>) : (
          <>
            {data.map((item) => (
              <ContentLine key={'data'} style={{marginBottom: '10px'}}>
                <ContentCell width='20%'>{item.value}</ContentCell>
                <ContentCell width='20%'>{item.type}</ContentCell>
                <ContentCell width='60%'>{item.comment}</ContentCell>
              </ContentLine>
            ))}
            <ContentLine>
              <ContentCell width='20%'>{filterDataDelta}</ContentCell>
              <ContentCell width='20%'>--</ContentCell>
              <ContentCell width='60%'>--</ContentCell>
            </ContentLine>
          </>
        )}
      </DataContainer>
    </>
  );
};

export default DataList;
