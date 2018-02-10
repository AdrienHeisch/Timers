class ButtonTimerAdd extends Button {
    constructor(pTimerTable) {
        super();
        this.timerTable = pTimerTable;
        this.html.innerHTML = "Add Timer"
    }

    onClick() {
        var lInput = prompt("Name : ", "Timer");
        this.timerTable.addTimer(lInput);
    }
}