import React, { useState, useEffect }  from 'react';
import { useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import Title from './Title';


export default function MyBarChart(props) {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [dataKey, setDataKey] = useState({});
  const [dataTitle, setDataTitle] = useState('Title');
  
  useEffect(
    () => {
      const loadData = async () => {
        const response = await axios.get(props.dataURL);
        setData(response.data[0].data);
        setDataKey(response.data[0].dataKey);
        setDataTitle(response.data[0].title);
      };
      loadData()
      //console.log("datakey", dataKey['key0']);
    },[props.dataURL]
  );
  return (
    <React.Fragment>
      <Title>{dataTitle}</Title>
      {/* <Title>Share of smartphone by operating system (percentage)</Title> */}
      <ResponsiveContainer>
        <BarChart width={600} height={300} data={data}
          margin={{top: 20, right: 30, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="time" stroke={theme.palette.text.secondary}/>
          <YAxis stroke={theme.palette.text.secondary}/>
          <Tooltip/>
          <Legend />
          <Bar dataKey={dataKey['key0']} fill="#32a0fa" label/>
            <Bar dataKey={dataKey['key1']} fill="#ff7878" label/>
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}