

export function CalendarComponent({ monthNo }) {

    const getMonthTable = (monthNo) => {
        const maxDays = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
        const today = new Date();

        let temp = +(monthNo - 1);
        today.setDate(1);
        today.setMonth(temp);

        if ((new Date()).getFullYear() % 4 == 0) {
            maxDays[maxDays.indexOf(28)] = 29;
        }
        
        let rowNo = 0;
        let colNo = 0;
    
        let firstDayCol = (new Date(`${today.getMonth() + 1}-01-${today.getFullYear()}`)).getDay();
    
        colNo = firstDayCol;
    
        const rowCol = [];
        const newRow = '["","","","","","",""]';
    
        rowCol.push(JSON.parse(newRow)); // enter first row
    
        for (let i = 1; i <= maxDays[today.getMonth()]; i++) {
            if(rowCol[rowNo] == undefined) {
                rowCol.push(JSON.parse(newRow));
            }
            
            rowCol[rowNo][colNo] = i;
    
            if (colNo < 6) {
                colNo += 1;
            }
            else {
                colNo = 0;
                rowNo += 1;
            }
        }   
    
        return rowCol;
    };

    const monthTable = getMonthTable(monthNo);
    console.log ( { monthTable } );
    return (<>
        <table className="calendar-table">
            <tr>
                <td>S</td>
                <td>M</td>
                <td>T</td>
                <td>W</td>
                <td>T</td>
                <td>F</td>
                <td>S</td>
            </tr>
            { 
                monthTable.map(
                    (monthRow, monthRowIndex) => {
                        return (
                            <tr key={ monthRowIndex }>
                                { monthRow.map(dateText => <td key={dateText}>{dateText}</td>) }
                            </tr>
                        )
                    })
            }
        </table>
        
    </>);

};