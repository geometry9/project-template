import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import style from './style.css';
import { Table, Column, Cell } from 'fixed-data-table-2';

const props = {
  tables: PropTypes.array.isRequired,
  timeSlots: PropTypes.array.isRequired,
  reservations: PropTypes.array.isRequired,
}
//add loader
class ReservationTable extends React.Component {
  constructor(props){
    super()
  }
  renderTimeSlots(){
    return this.props.timeSlots.map((time,index) => {
      return (<Column
        key={index}
        header={<Cell data={time.format('hh:mm')} />}
        columnKey="timeSlots"
        fixed={true}
        width={50}>
      </Column>)
    })
  }

  render(){
    return (<Table
        rowHeight={50}
        headerHeight={50}
        rowsCount={this.props.tables.length}
        width={1000}
        height={500}>
        <Column
          columnKey="tables"
          cell={<Cell data={5} />}
          fixed={true}
          width={50}
        />
      { this.renderTimeSlots() }
      //add date ranges for columns
    </Table>
    );
  }
}

ReservationTable.props = props;
export default ReservationTable;
