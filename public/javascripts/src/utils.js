export function createFifteenMinuteIntervals(from, until){
  // ...
  var time = new Date(from);
  var intervals = []; // more clear name than hours

  for (var i = 0; i <= max; i++) {
    intervals.push(time);
    time.setMinutes(time.getMinutes() + 15);
  }
}

export function formatDateHHcolonMM(date) {  // funny name but specific
  var hour = date.getHours();
  var minute = date.getMinutes();
  return doubleZeros(hour) + ":" + doubleZeros(minute);
}
