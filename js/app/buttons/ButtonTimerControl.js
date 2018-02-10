class ButtonTimerControl extends Button {
    constructor(pTimer) {
        super();
        this.isOn = true;
        this.timer = pTimer;
        this.onClick();
    }

    onClick() {
        this.isOn = !(this.isOn);
        if (this.isOn) {
            this.timer.play();
            this.html.innerHTML = "Stop";
        } else {
            this.timer.stop();
            this.html.innerHTML = "Play";
        }

    }
}