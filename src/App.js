import logo from './logo.svg';
import './App.css';
import { CalendarComponent } from './app-calendar/calendar'
function App() {
  return (
    <>
    <div style={ ({ width: "80%", margin: "auto" }) }>
      <CalendarComponent monthNo="12" ></CalendarComponent>

    </div>
    </>
  );
}

export default App;
