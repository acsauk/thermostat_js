'use strict';

<<<<<<< HEAD
function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.MAX_TEMP_PSM_OFF = 32;
  this.MAX_TEMP_PSM_ON = 25;
  this.MINIMUM_TEMPERATURE = 10;
  this.LOW_USAGE = 18
  this.temperature = 20;
  this.powerSavingMode = true;
};

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature
};
Thermostat.prototype.isPowerSavingOn = function () {
  return this.powerSavingMode
};

Thermostat.prototype.powerSavingOn = function () {
  this.powerSavingMode = true;

};

Thermostat.prototype.powerSavingOff = function () {
  this.powerSavingMode = false;
};


Thermostat.prototype.isMinimumTemperature = function () {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function () {
  if (this.isPowerSavingOn() === false) {
    return this.temperature === this.MAX_TEMP_PSM_OFF;
  }
  return this.temperature === this.MAX_TEMP_PSM_ON;
};


Thermostat.prototype.up = function () {
  if(this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};


Thermostat.prototype.down = function () {
  if(this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function(){
  if(this.temperature < this.LOW_USAGE) {
    return 'low-usage';
  }
  else if(this.temperature >= this.LOW_USAGE && this.temperature <= this.MAX_TEMP_PSM_ON) {
    return 'medium-usage';
  }
  return 'high-usage';
};
=======
function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;

}

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()){
    return;
  } else {
    this.temperature -= 1;
  }
}

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
}

Thermostat.prototype.isMinimumTemperature = function(){
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  return this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  return this.powerSavingMode = true;
}

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT){
    return 'low-usage';
  }
  if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON){
    return 'medium-usage';
  }
  return 'high-usage';

}
>>>>>>> 9e8b1d7c558e82b1f829dbc3e5046e5956a4b2d5
