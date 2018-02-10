class TimerTable {
    constructor() {
        document.createElement("table");
        this.html = document.createElement("table");
        this.content = [];
        this.list = [];

        this.generate();
    }

    addTimer(pName) {
        var lTimer = new Timer(pName);
        this.list.push(lTimer);
        this.generate();
    }

    refresh() {
        var lTimer;
        var lLength = this.list.length;
        for (var i = 0; i < lLength; i++) {
            lTimer = this.list[i];
            lTimer.refresh();
        }
    }

    generate() {
        this.generateContent();
        this.generateHTML();
    }

    generateContent() {
        this.content = [
            ["Timer Name", "Time Spent Today", "Daily Goal", "Goal Reached ?", "Play / Stop"]
        ];
        var lLength = this.list.length;
        var lTimer;
        for (var i = 0; i < lLength; i++) {
            lTimer = this.list[i];
            this.content.push([
                lTimer.name, lTimer.htmlTimeDisplay, lTimer.htmlObjectiveInput, lTimer.htmlIsDone, lTimer.htmlButton
            ]);
        }
        this.content.push([new ButtonTimerAdd(this).html, "--:--:--", "--:--:--", "-", "-"]);
    }

    generateHTML() {
        var lLength = this.content.length;
        this.html.innerHTML = "";
        var row;
        var data;
        var j;
        for (var i = 0; i < lLength; i++) {
            this.html.appendChild(row = document.createElement("tr"));
            for (j = 0; j < this.content[i].length; j++) {
                row.appendChild(data = document.createElement("td"));
                if (typeof this.content[i][j] == "object") {
                    data.appendChild(this.content[i][j]);
                } else {
                    data.innerHTML = this.content[i][j];
                }
            }
        }
    }
}