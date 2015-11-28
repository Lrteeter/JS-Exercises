function Clock () {
  // 1. Create a Date object.
  var dateNow = new Date();
  // 2. Store the hours, minutes, and seconds.
  this.hours = dateNow.getHours();
  this.minutes = dateNow.getMinutes();
  this.seconds = dateNow.getSeconds();
  // 3. Call printTime.
  this.printTime(); //(hours, minutes, seconds);
  // 4. Schedule the tick at 1 second intervals.

  var clock = this;
  setInterval(function(){
    clock.tick();
  }, 1000);
}

Clock.prototype.printTime = function() { //(hours, minutes, seconds) {
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
  // Format the time in HH:MM:SS
  // Use console.log to print it.
};

Clock.prototype.tick = function () {
  // 1. Increment the time by one second.
  this.seconds += 1;
  if (this.seconds === 60) {
    this.seconds = 0;
    this.minutes += 1;
  }
  if (this.minutes === 60) {
    this.minutes = 0;
    this.hours += 1;
  }
  if (this.hours === 24) {
    this.hours = 0;
  }
  // 2. Call printTime.
  this.printTime();
};

var clock = new Clock();
