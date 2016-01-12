function Clock () {
  var dateNow = new Date();
  this.hours = dateNow.getHours();
  this.minutes = dateNow.getMinutes();
  this.seconds = dateNow.getSeconds();
  this.printTime();

  var clock = this;
  setInterval(function(){
    clock.tick();
  }, 1000);
}

Clock.prototype.printTime = function() {
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};

Clock.prototype.tick = function () {
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
  this.printTime();
};

var clock = new Clock();
