class ButtonTimerAdd extends Button {
    constructor(pTimerTable) {
        super();
        this.timerTable = pTimerTable;
        this.html.innerHTML = "Add Timer";
        this.html.setAttribute("id", "adder");
    }

    onClick() {
        var lInput = prompt("Name : ", "Timer");
        this.timerTable.addTimer(lInput);
    }
}