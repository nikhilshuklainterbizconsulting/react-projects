import { monthHeaderColors, monthsList } from './app-contants';
import './App.css';
import { CalendarComponent } from './app-calendar/calendar'
import { useState } from 'react';
import { Dropdown } from './shared-components/dropdown';
function App() {
  const today = new Date();
  const [ currentMonth, selectMonth ] = useState(+(today.getMonth()) + 1);
  const [ currentMonthHeaderColor, selectMonthHeaderColor ] = useState(today.getMonth());
  const [ currentMonthHeaderTextColor, selectMonthHeaderTextColor ] = useState(today.getMonth() < 2 ? "#fff" : "#000");
  
  const monthDropdownList = monthsList.map(month => <option value={ month.SelectValue }> { month.DisplayValue } </option>)
  
  monthsList.forEach((x,i) => {
    x.headerColor = monthHeaderColors[i];
  });

  const eventFromDropdown = (listItem, listItemindex) => {
    console.log({listItem, listItemindex})
  };

  return (
    <>
      <select onChange={(event) => {
        selectMonth(+event.target.value);
        selectMonthHeaderColor(monthHeaderColors[+event.target.value]);
      }}>
        { monthDropdownList }
      </select>
      <h1>{ currentMonth }</h1>
      <div style={ ({ width: "80%", margin: "auto" }) }>
          <CalendarComponent 
            monthNo = { currentMonth } 
            headerColor = { currentMonthHeaderColor }
            headerTextColor = { currentMonthHeaderTextColor }
          ></CalendarComponent>
          <div style={ { width: "30%" } }>
            <Dropdown optionChosen={ eventFromDropdown } dataList={ monthsList }></Dropdown>
          </div>
      </div>
    </>
  );
}

export default App;
