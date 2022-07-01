import propTypes from 'prop-types'

const daysNames = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

function Month(props) {
    return (
        <div className="ui-datepicker">
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
                    {props.weeks.map((w, idx) => {
                        return(
                            <tr>{w.map((d) => d)}</tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

Month.propTypes = {
    monthDays: propTypes.string,
}

export default Month;