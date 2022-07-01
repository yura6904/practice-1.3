const monthsNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
]
const daysNames = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

export const getNumberOfDays = (year, month) => {
    if (month === 1)
        return 28
    else if (month === 1 && year / 4 !== 0){
        return 29
    }
    else {
        return (month / 2 === 0  ? 30 : 31)
    }
}
export const getDaysInMonth = (year, month, numberOfDays) => {
    const monthDays = [];
    for (let i = 1; i <= numberOfDays; i++) {
        monthDays.push(new Date(year, month, i))
    }
    return monthDays
}

export const getNameOfMonth = (month) => {
    const monthName = monthsNames[month]
    return monthName
}

export const getChangedNameOfMonth = (month) => {
    let changedMonthName = monthsNames[month]

    if ((month === 2) || (month === 7)) {
        changedMonthName += 'а'
    }
    else {
        changedMonthName = changedMonthName.slice(0, -1)
        changedMonthName += 'я'
    }
    return changedMonthName
}


export const getNameOfDay = (day) => {
    const dayName = daysNames[day-1]
    return dayName
}

export const creatWeek = (monthDays, weekNumber, deltaStartDay) => {
    let week = [1,2,3,4,5,6,0]
    let tempDayWeek = (7 * weekNumber) - deltaStartDay
    let tempDayNum = 0
    let weekElement = []
    if (monthDays.length !== 0) {
        for (let i = tempDayWeek; i < monthDays.length; i++) {
            if (weekElement.length === 7) {
                return weekElement
            }
            else {
                for (let j = tempDayNum; j < week.length; j++) {
                    if (monthDays[i].getDay() === week[j]) {
                        weekElement.push(<td>{monthDays[i].getDate()}</td>)
                        tempDayNum = j + 1
                        break
                    }
                    else {
                        console.log(monthDays[i].getDay())
                        console.log(week[j])
                        weekElement.push(<td></td>)
                    }
                }
                
            }
            if (i === monthDays.length-1) return weekElement
        }
        
    }
    else return weekElement
}