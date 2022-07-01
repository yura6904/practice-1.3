import propTypes from 'prop-types'

function Day(props) {
//       

  return (
    <div>
         <a className="ui-datepicker-other-month" href="#/" onClick={() => {}}>{/*добавить линку на 3 сентября */}11</a>
    </div>
  );
}

Day.propTypes = {
    day: propTypes.string,
    otherMonthDay: propTypes.bool
}

export default Day;

/*
import propTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { getChangedNameOfMonth, getDaysInMonth, getNameOfDay, getNameOfMonth, getNumberOfDays } from './daysLogic';
import DayViewer from './DayViewer/DayViewer';
import Month from './Month/Month';

function Calendar(props) {
    //main logic
    const [monthDays, setMonthDays] = useState([])
    const [date, setDate] = useState(props.date);
    const [month, setMonth] = useState(props.date.getMonth())
    const [dayName, setDayName] = useState()
    const [monthName, setMonthName] = useState()
    const [changedMonthName, setChangedMonthName] = useState()

    //counting nubmer of days and creating array of days
    useEffect(() => {
        const numberOfDays = getNumberOfDays(props.date.getFullYear(), props.date.getMonth())
        const days = getDaysInMonth(props.date.getFullYear(), props.date.getMonth(), numberOfDays)
        setMonthDays(days)
        setMonthName(getNameOfMonth(date.getMonth()))
        setChangedMonthName(getChangedNameOfMonth(props.date.getMonth()))
        console.log(monthDays)
    }, [month, monthDays])

    useEffect(() => {
        setDayName(getNameOfDay(date.getDay()))
    }, [date])
    
    const changeDateByClick = (year, month, day) => {
        setDate(new Date(year, month, day));
    }
    const changeMonthByClick = (newMonth) => {
        setMonth(newMonth)
    }

    return (
        <div className='container'>
            <button onClick={()=>{changeDateByClick()}}></button>
            <DayViewer currentDate={date} dayName={dayName} monthName={monthName} changedMonthName={changedMonthName}/>
            <Month monthDays={monthDays}/>   
        </div>
    );
}

Calendar.propTypes = {
    date: propTypes.object
}

export default Calendar;


/*
        <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-material-day">Среда</div>
            <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">8</div>
            <div className="ui-datepicker-material-month">Марта</div>
            <div className="ui-datepicker-material-year">2017</div>
            </div>
        </div>
        <div className="ui-datepicker-header">
            <div className="ui-datepicker-title">
            <span className="ui-datepicker-month">Март</span>&nbsp;<span className="ui-datepicker-year">2017</span>
            </div>
        </div>
        <table className="ui-datepicker-calendar">
            <colgroup>
                <col></col>
                <col></col>
                <col></col>
                <col></col>
                <col></col>
                <col className="ui-datepicker-week-end"></col>
                <col className="ui-datepicker-week-end"></col>
            </colgroup>
            <thead>
            <tr>
                <th scope="col" title="Понедельник">Пн</th>
                <th scope="col" title="Вторник">Вт</th>
                <th scope="col" title="Среда">Ср</th>
                <th scope="col" title="Четверг">Чт</th>
                <th scope="col" title="Пятница">Пт</th>
                <th scope="col" title="Суббота">Сб</th>
                <th scope="col" title="Воскресенье">Вс</th>
            </tr>
            </thead>
            <tbody> 
                <tr>
                    <td className="ui-datepicker-other-month">27</td>
                    <td className="ui-datepicker-other-month">28</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>7</td>
                    <td className="ui-datepicker-today">8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                </tr>
            </tbody>
        </table>

*/