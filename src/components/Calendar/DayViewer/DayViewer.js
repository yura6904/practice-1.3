import propTypes from 'prop-types'

function DayViewer(props) {

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{props.dayName}</div>
        <div className="ui-datepicker-material-date">
        <div className="ui-datepicker-material-day-num">{props.currentDate.getDate()}</div>
        <div className="ui-datepicker-material-month">{props.changedMonthName}</div>
        <div className="ui-datepicker-material-year">{props.currentDate.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
        <span className="ui-datepicker-month">{props.monthName}</span>&nbsp;<span className="ui-datepicker-year">{props.currentDate.getFullYear()}</span>
        </div>
      </div>
    </div>
  );
}

DayViewer.propTypes = {
  currentDate: propTypes.string,
  dayName: propTypes.string,
  monthName: propTypes.string
}

export default DayViewer;