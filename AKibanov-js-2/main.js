class Stove {
    constructor(maxTemperature) {
        this._maxTemperature = Math.min(maxTemperature, 15);
    }
    get maxTemperature() {
        return this._maxTemperature;
    }
    set maxTemperature(value) {
        this._maxTemperature = Math.min(value, 15);
    }
}
class ImprovedStove extends Stove {
    constructor(maxTemperature) {
        super(maxTemperature);
        this._currentTemperature = 0;
        this._heatingInterval = null;
        this._coolingInterval = null;
    }
    turnOn() {
        console.log('Плита включена. Начинается нагрев...');
        this._heatingInterval = setInterval(() => {
            if (this._currentTemperature < this.maxTemperature) {
                this._currentTemperature++;
                console.log('Текущая температура: ' + this._currentTemperature);
            } else {
                console.log('Печь полностью нагрета. Выключение...');
                this.turnOff(); }
        }, 500);
    }
    turnOff() {
        console.log('Плита выключена. Начинается охлаждение...');
        clearInterval(this._heatingInterval);
        this._coolingInterval = setInterval(() => {
            if (this._currentTemperature > 0) {
                this._currentTemperature--;
                console.log('Текущая температура: ' + this._currentTemperature);
            } else {
                console.log('Печь остыла. Прекращение работы.');
                clearInterval(this._coolingInterval); }
        }, 500);
    }
}
const myStove = new ImprovedStove(10);
console.log('Максимальная температура: ' + myStove.maxTemperature);
myStove.turnOn();