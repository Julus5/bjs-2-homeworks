class AlarmClock {
  	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}  

    addClock(time, callback){
        if (!time || !callback)  {
            throw new Error('Отсутствуют обязательные аргументы');
        };
        if (this.alarmCollection.find((arg) => arg.time === time)){
            console.warn('Уже присутствует звонок на это же время');
        };
        const alarm = {
            callback,
            time,
            canCall: true
        };
        this.alarmCollection.push(alarm);
    };

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(arg => arg.time !== time);   
    };

    getCurrentFormattedTime() {
        // return new Date().toLocaleTimeString().slice(0, -3);
        return new Date().toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute:'2-digit'
          })
    };

    start() {
        if (this.intervalId) {
            return;
        }
        else {
            let result = this.alarmCollection.forEach(alarm => {
                if (alarm.time === this.getCurrentFormattedTime()  &&  alarm.canCall == true) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
            this.intervalId = setInterval(() => result, 1000);
        }
    };

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;     
    };

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    };
    
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    };
}