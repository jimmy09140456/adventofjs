export class Timer {
  name = "Funny";
  o_timer_sec = 0;
  minutes = 0;
  seconds = 0;
  caf_stop = false;

  constructor() {
    this._findElements();
    this._configVariables();
    this._bindEvents();
    this._requestPermission();
  }

  async _requestPermission() {
    const permission = await Notification.requestPermission();
  }

  _findElements() {
    this.start_btn = document.querySelector(".timer button.start");
    this.pause_btn = document.querySelector(".timer button.pause");
    this.settings_btn = document.querySelector(".timer button.settings");
    this.settings_gear = document.querySelector(".timer button.settings .gear");
    this.settings_check = document.querySelector(
      ".timer button.settings .check"
    );

    this.minutes_inp = document.querySelector(".timer .time .minutes input");
    this.seconds_inp = document.querySelector(".timer .time .seconds input");

    this.ring_circle = document.querySelector(".ring");
  }

  _configVariables() {
    this.minutes = Number(this.minutes_inp?.value ?? 0);
    this.seconds = Number(this.seconds_inp?.value ?? 0);
  }

  _bindEvents() {
    this.start_btn.addEventListener("click", this.clickStart);
    this.pause_btn.addEventListener("click", this.clickPause);
    this.settings_btn.addEventListener("click", this.editTimer);
  }

  _setTimer(seconds) {
    this.minutes = Math.floor(Number(seconds) / 60);
    this.seconds = Number(seconds) % 60;
  }

  _updateTimer() {
    this.minutes_inp.value = this.minutes;
    this.seconds_inp.value = this.seconds;
    //Patch heading zero for minutes and seconds, e.g. '1' => '01'.
    if (this.minutes < 10) this.minutes_inp.value = "0" + this.minutes;
    if (this.seconds < 10) this.seconds_inp.value = "0" + this.seconds;
  }

  setTimer(seconds) {
    this._setTimer(seconds);
    this._updateTimer();
  }

  _toggleButtons() {
    //Flip start and pause button.
    this.start_btn.classList.toggle("hide");
    this.pause_btn.classList.toggle("hide");
    //When timer started or pause button shown, disable the setting button as well.
    this.settings_btn.toggleAttribute("disabled");
  }

  clickStart = (e) => {
    this._startTimer();
    this._toggleButtons();
    this._greenRing();
  };

  clickPause = (e) => {
    this._stopTimer();
    this._toggleButtons();
  };

  _startTimer() {
    this._end_time =
      performance.now() + (this.minutes * 60 + this.seconds) * 1000;
    this.caf_stop = false;
    requestAnimationFrame(this._cafTimer);
  }

  _cafTimer = (t) => {
    const elapsed = Math.floor((this._end_time - t) / 1000);

    this.setTimer(elapsed);

    if (!this.caf_stop && elapsed > 0) {
      requestAnimationFrame(this._cafTimer);
    } else if (!this.caf_stop) {
      this._endTimer();
    }
  };

  _stopTimer() {
    this.caf_stop = true;
  }

  _endTimer() {
    new Notification("Time's up!");
    this._endRing();
    this.setTimer(0);
    this._toggleButtons();
  }

  _endRing() {
    this.ring_circle.classList.add("ending");
  }

  _greenRing() {
    this.ring_circle.classList.remove("ending");
  }

  editTimer = (e) => {
    this._configVariables();
    //Enable editing the input fields of minutes and seconds.
    this.minutes_inp.toggleAttribute("disabled");
    this.seconds_inp.toggleAttribute("disabled");
    //While editing the timer, to avoid the count down changing the timer numbers.
    this.start_btn.toggleAttribute("disabled");
    //Switching the icons
    this.settings_gear.classList.toggle("hide");
    this.settings_check.classList.toggle("hide");
  };
}
