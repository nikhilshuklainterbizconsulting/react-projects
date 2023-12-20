import { monthHeaderColors, monthsList } from './app-contants';
import './App.css';
import { CalendarComponent } from './app-calendar/calendar'
import { useState } from 'react';
function App() {
  const today = new Date();
  const [ currentMonth, selectMonth ] = useState(+(today.getMonth()) + 1);
  const [ currentMonthHeaderColor, selectMonthHeaderColor ] = useState(today.getMonth());
  const [ currentMonthHeaderTextColor, selectMonthHeaderTextColor ] = useState(today.getMonth() < 2 ? "#fff" : "#000");

  
  monthsList.forEach((x,i) => {
    x.headerColor = monthHeaderColors[i];
  });
  return (
    <>
      <select onChange={(event) => {
        selectMonth(+event.target.value);
        selectMonthHeaderColor(monthHeaderColors[+event.target.value]);
      }}>
        {
          monthsList.map(month => <option value={ month.SelectValue }> { month.DisplayValue } </option>)
        }
      </select>
      <h1>{ currentMonth }</h1>
      <div style={ ({ width: "80%", margin: "auto" }) }>
        <CalendarComponent 
          monthNo = { currentMonth } 
          headerColor = { currentMonthHeaderColor }
          headerTextColor = { currentMonthHeaderTextColor }
          ></CalendarComponent>
      </div>
    </>
  );
}

export default App;
