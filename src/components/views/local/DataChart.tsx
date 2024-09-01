// import { useEffect } from 'react';
import css from '../../../styles/dataList.css';
import { ResponsivePie } from '@nivo/pie';
import { DataChartType } from '../../../type/data';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks';

const { DataContainer } = css;

type MyResponsivePieProps = {
  data: DataChartType[];
}

const MyResponsivePie = ({data}: MyResponsivePieProps) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: 'color',
      modifiers: [
        [
          'darker',
          0.2
        ]
      ]
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: 'color',
      modifiers: [
        [
          'darker',
          2
        ]
      ]
    }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={[
      {
        match: {
          id: 'ruby'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'c'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'go'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'python'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'scala'
        },
        id: 'lines'
      },
      {
        match: {
          id: 'lisp'
        },
        id: 'lines'
      },
      {
        match: {
          id: 'elixir'
        },
        id: 'lines'
      },
      {
        match: {
          id: 'javascript'
        },
        id: 'lines'
      }
    ]}
    legends={[
      {
        anchor: 'left',
        direction: 'column',
        justify: false,
        translateX: -70,
        translateY: -110,
        itemsSpacing: 8,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: '#999',
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000'
            }
          }
        ]
      }
    ]}
  />
);

type DataChartProps = {
  viewType: string | undefined;
  show?: boolean;
}

const DataChart = ({viewType, show = true}: DataChartProps) => {
  const data = useAppSelector((state) => state.data);
  const filterData = data.filter((item) => item.type === 'расход');

  const [r01, setR01] = useState(0);
  const [r02, setR02] = useState(0);
  const [r03, setR03] = useState(0);
  const [r04, setR04] = useState(0);
  const [r05, setR05] = useState(0);
  const [r06, setR06] = useState(0);

  useEffect(() => {
    filterData.forEach((item) => {
      if (item.comment === 'оплата счетов') {
        setR02((prev) => prev + +item.value);
      }
      if (item.comment === 'покупка продуктов') {
        setR01((prev) => prev + +item.value);
      }
      if (item.comment === 'покупка одежды') {
        setR03((prev) => prev + +item.value);
      }
      if (item.comment === 'расходы на транспорт') {
        setR04((prev) => prev + +item.value);
      }
      if (item.comment === 'развлечения') {
        setR05((prev) => prev + +item.value);
      }
      if (item.comment === 'путешествия') {
        setR06((prev) => prev + +item.value);
      }
    });
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {show && (
        <DataContainer style={{ height: '500px' }}>
          <MyResponsivePie
            data={[
              {
                id: 'Покупка продуктов',
                label: 'Покупка продуктов',
                value: r01,
                color: 'hsl(59, 70%, 50%)'
              },
              {
                id: 'Oплата счетов',
                label: 'Oплата счетов',
                value: r02,
                color: 'hsl(284, 70%, 50%)'
              },
              {
                id: 'Покупка одежды',
                label: 'Покупка одежды',
                value: r03,
                color: 'hsl(110, 70%, 50%)'
              },
              {
                id: 'Расходы на транспорт',
                label: 'Расходы на транспорт',
                value: r04,
                color: 'hsl(157, 70%, 50%)'
              },
              {
                id: 'Развлечения',
                label: 'Развлечения',
                value: r05,
                color: 'hsl(276, 70%, 50%)'
              },
              {
                id: 'Путешествия',
                label: 'Путешествия',
                value: r06,
                color: 'hsl(276, 70%, 50%)'
              }
            ].filter((item) => item.value > 0)}
          />
        </DataContainer>)}
    </>
  );
};

export default DataChart;
