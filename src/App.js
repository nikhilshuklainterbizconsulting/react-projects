import logo from './logo.svg';
import './App.css';
import { CalendarComponent } from './app-calendar/calendar'
import { useState } from 'react';
function App() {
  const [ currentMonth, selectMonth ] = useState(+((new Date()).getMonth()) + 1);

  const monthsList = [
    {
      DisplayValue: "January",
      SelectValue: 1
    },
    {
      DisplayValue: "February",
      SelectValue: 2
    },
    {
      DisplayValue: "March",
      SelectValue: 3
    },
    {
      DisplayValue: "April",
      SelectValue: 4
    },
    {
      DisplayValue: "May",
      SelectValue: 5
    },
    {
      DisplayValue: "June",
      SelectValue: 6
    },
    {
      DisplayValue: "July",
      SelectValue: 7
    },
    {
      DisplayValue: "August",
      SelectValue: 8
    },
    {
      DisplayValue: "September",
      SelectValue: 9
    },
    {
      DisplayValue: "October",
      SelectValue: 10
    },
    {
      DisplayValue: "November",
      SelectValue: 11
    },
    {
      DisplayValue: "December",
      SelectValue: 12
    },
  ];
  return (
    <>
      <select onChange={(event) => {
        selectMonth(+event.target.value);
      }}>
        {
          monthsList.map(month => <option value={ month.SelectValue }> { month.DisplayValue } </option>)
        }
      </select>
      <h1>{ currentMonth }</h1>
      <div style={ ({ width: "80%", margin: "auto" }) }>
        <CalendarComponent key={1321232132123132} monthNo={ currentMonth } ></CalendarComponent>
      </div>
    </>
  );
}

export default App;
