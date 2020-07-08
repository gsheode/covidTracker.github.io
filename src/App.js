import React from 'react';

import { fetchData, fetchDailyData } from './fetchData/';



import './App.css';
import { Cards,Chart } from '../src/components/'



export class App extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
          data: {},
          country: '',
      }
  }
 

  
    async componentDidMount() {
        const data = await fetchData();
        const chartData = await fetchDailyData();
        this.setState({ data });
    }
    render() {
        const { data, country } = this.state;
        return (<div>
            <Cards data={data} />
            <Chart data={data} country={country} />
        </div>);
    }

  }

export default App;