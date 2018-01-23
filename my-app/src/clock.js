// we'll want it to:

class Clock {
  constructor(time){
    this._time = time;
  }

  getTime(){
    return this._time
  }

  getSeconds(){
    return this.getTime().slice(6,8);
  }

  getMinutes(){
    return this.getTime().slice(3,5);
  }


  hasTicked(){
    if (this.getSeconds() === "00"){
      return true
    } else{
      return false
    }
  }

  hasBeeped(){
    if (this.getMinutes() === "00" && this.getSeconds() == "00"){
      return true
    } else{
      return false
    }
  }

}



//Tick every minute
//Beep every hour
//Wake us up at 7am
//More crazy plans...


module.exports.Clock = Clock;
