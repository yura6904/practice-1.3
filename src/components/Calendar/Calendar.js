import propTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { getChangedNameOfMonth, getDaysInMonth, getNameOfDay, getNameOfMonth, getNumberOfDays, creatWeek } from './daysLogic';
import DayViewer from './DayViewer/DayViewer';
import Month from './Month/Month';

//main logic
function Calendar(props) {
    
    const [monthDays, setMonthDays] = useState([])
    const [date, setDate] = useState(new Date(props.date.getFullYear(), props.date.getMonth(), props.date.getDate()));
    const [month, setMonth] = useState(props.date.getMonth())
    const [dayName, setDayName] = useState()
    const [monthName, setMonthName] = useState()
    const [changedMonthName, setChangedMonthName] = useState()
    const [weekOneElement, setWeekOneElement] = useState([])
    const [weekTwoElement, setWeekTwoElement] = useState([])
    const [weekThreeElement, setWeekThreeElement] = useState([])
    const [weekFourElement, setWeekFourElement] = useState([])
    const [weekFiveElement, setWeekFiveElement] = useState([])
    const [weekElements, setWeekElements] = useState([])
    const [deltaStartDay, setDeltaStartDay] = useState(0)

    const getMonthesData =  () => {
        const numberOfDays = getNumberOfDays(date.getFullYear(), date.getMonth())
        const days = getDaysInMonth(date.getFullYear(), date.getMonth(), numberOfDays)
        setMonthDays(days)

        setMonthName(getNameOfMonth(date.getMonth()))
        setChangedMonthName(getChangedNameOfMonth(date.getMonth()))
    }

    const getWeeksData = () => {
        setWeekOneElement(creatWeek(monthDays, 0, deltaStartDay))
        weekOneElement.forEach(e => {
            if (!e.props.children) setDeltaStartDay(deltaStartDay + 1)
        });
        setWeekTwoElement(creatWeek(monthDays, 1, deltaStartDay))
        setWeekThreeElement(creatWeek(monthDays, 2, deltaStartDay))
        setWeekFourElement(creatWeek(monthDays, 3, deltaStartDay))
        setWeekFiveElement(creatWeek(monthDays, 5, deltaStartDay))
        setWeekElements([weekOneElement, weekTwoElement, weekThreeElement, weekFourElement, weekFiveElement])
    }

    //counting nubmer of days and creating array of days and weeks
    useEffect(() => { 
        setDayName(getNameOfDay(date.getDay()))
    }, [date])

    useEffect(() => {
        getMonthesData()
        getWeeksData()
    }, [month])

    console.log(monthDays)
    console.log(weekElements)

    const changeDateByClick = (year, month, day) => {
        setDate(new Date(year, month, day));
    }
    const changeMonthByClick = (newMonth) => {
        setMonth(newMonth)
    }

    return (
        <div className='container'>
            <DayViewer currentDate={date} dayName={dayName} monthName={monthName} changedMonthName={changedMonthName}/>
            <Month monthDays={monthDays} weeks={weekElements}/>   
        </div>
    );
}

Calendar.propTypes = {
    date: propTypes.object
}

export default Calendar;