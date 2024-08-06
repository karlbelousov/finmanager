import css from '../../../styles/dataList.css';
import { Data } from '../../../type/data';

const {DataContainer, ContentLine,ContentCell} = css;

type DataListProps = {
  data: Data[];
};

const DataList = ({data = []}: DataListProps) => (
  <DataContainer>
    {data.map((item, index) => (
      <ContentLine key={'data'}>
        <ContentCell width='20%'>{item.value}</ContentCell>
        <ContentCell width='20%'>{item.type}</ContentCell>
        <ContentCell width='60%'>{item.comment}</ContentCell>
      </ContentLine>
    ))}
  </DataContainer>
);

export default DataList;
