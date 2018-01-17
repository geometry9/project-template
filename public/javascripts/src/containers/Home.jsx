
import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../components/logo';
import ReservationTable from '../components/reservationTable';
import Menu from '../components/menu';
import Title from '../components/title';
import Social from '../components/social';
import style from '../../../stylesheets/style.css';
import Moment from 'moment';
import { extendMoment }from 'moment-range';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const moment = extendMoment(Moment);
const reservations = [{
    name: 'Hurcules McHurculean',
    time: '8:00 PM',
    numGuests: 4,
    duration: 120,
    table: 'A'
  },
  {
    name: 'Johnny Bravo',
    time: '5:30 PM',
    numGuests: 2,
    duration: 60,
    table: 'B'
  },
  {
    name: 'Jon Snow',
    time: '6:00 PM',
    numGuests: 8,
    duration: 240,
    table: 'C'
  },
  {
    name: 'Donatello McTurtle',
    time: '12:30 AM',
    numGuests: 4,
    duration: 150,
    table: 'A'
  },
  {
    name: 'Elon Musket',
    time: '9:00 PM',
    numGuests: 4,
    duration: 120,
    table: 'M'
  }];
const tables = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
console.log(tables)
const date1 = new Date('January 15, 2018 17:00:00');
const date2 = new Date('January 16, 2018 01:00:00');

const range = moment.range(date1, date2);

const timeSlots = Array.from(range.by('minutes', { step: 15 }));


class Home extends React.Component {
  render(){
    return(
      <CSSTransitionGroup
        transitionName="load"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
      <div className={style["homepage-wrapper"]}>
        <ReservationTable timeSlots={timeSlots} tables={tables} reservations={reservations} />
      </div>
    </CSSTransitionGroup>
    )
  }
}

export default Home;
