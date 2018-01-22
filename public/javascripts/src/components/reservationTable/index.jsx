import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import style from './style.css';
import { Table, Column, Cell } from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);
// move to a consts file
const INTERVALS = 15;

const props = {
  tables: PropTypes.array.isRequired,
  timeSlots: PropTypes.array.isRequired,
  reservations: PropTypes.array.isRequired,
}

class ReservationTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: '2018-01-16',
    }
    this.durationBlocks = {};
  }

  checkRangeForDisplay(time){
    const { reservations, date } = this.props;
    return this.props.reservations.map((res,index) => {
      //convert time to moment
      //create a range from time plus duration
      // if it's within range () => create a box within
      const date1 = moment(date);
      const reservationTime = moment(res.time, 'HH:mm A');
      const reservationStart = date1.set({
          'hour' : reservationTime.get('hour'),
          'minute'  : reservationTime.get('minute'),
      });

      if(reservationStart.format('hh:mm A') === time.format('hh:mm A')){
        return res;
      }
      return false;
    })
  }

  renderTimeSlots(){

    return this.props.timeSlots.map((time,index) => {
      const cellContents = this.checkRangeForDisplay(time).filter((res)=> res !== false)[0];

      if(cellContents){
        this.durationBlocks[cellContents.table] = {
          duration: (cellContents.duration / INTERVALS),
          name: cellContents.name,
          timeSlot: { [time]: true },
        };
        console.log(this.durationBlocks)
      }
      return (<Column
        key={time.format('hh:mm')}
        header={<Cell>{time.format('hh:mm')}</Cell>}
        cell={({rowIndex, ...props}) => {
          const block = this.durationBlocks[this.props.tables[rowIndex]];

          if(block && block.duration > -1 && block.timeSlot[time]) {
            console.log(block.timeSlot[time])
            block.duration--;
            block.timeSlot[time.add(15, 'minutes')] = true;
          }

          return (<Cell>{(cellContents
              && (cellContents.table === this.props.tables[rowIndex])
              || (block && block.timeSlot[time]))
              ? <span className={style['pink']}>{"cellContents.name"}</span>
              : ''}
          </Cell>)
        }}
        fixed={true}
        width={50}>
      </Column>)
    });
  }

  render(){
    const { tables, timeSlots, reservations } = this.props;
    return (<Table
        rowHeight={50}
        headerHeight={50}
        rowsCount={tables.length}
        scrollX={true}
        width={10000}
        height={500}
        data={tables}>
        <Column
          header={<Cell>Time</Cell>}
          cell={({rowIndex, ...props})=> <Cell {...props}>Table - {tables[rowIndex]}</Cell>}
          fixed={true}
          width={100}
        />
      { this.renderTimeSlots() }
    </Table>
    );
  }
}

ReservationTable.props = props;
export default ReservationTable;
