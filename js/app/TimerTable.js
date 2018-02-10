class TimerTable {
    constructor() {
        document.createElement("table");
        this.html = document.createElement("table");
        this.content = [];
        this.list = [];
    }

    addTimer(pName) {
        var lTimer = new Timer(pName);
        this.list.push(lTimer);
    }

    refresh() {
        this.content = [
            ["Timer Name", "Time Spent Today", "Play / Stop"]
        ];
        var lLength = this.list.length;
        var lTimer;
        for (var i = 0; i < lLength; i++) {
            lTimer = this.list[i];
            lTimer.refresh();
            this.content.push([
                lTimer.name, lTimer.displayTime, lTimer.HTMLButton
            ]);
        }
        this.content.push([new ButtonTimerAdd(this).html, "--:--:--", "X"]);

        lLength = this.content.length;
        this.html.innerHTML = "";
        var row;
        var data;
        var j;
        for (i = 0; i < lLength; i++) {
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