class Timer {
    constructor(pName) {
        this.name = pName;
        
        this.time = 0;
        this.refTime = Date.now();
        this.storage = 0;

        this.isDone = true;

        this.htmlName = document.createElement("p");
        this.htmlTimeDisplay = document.createElement("p");
        this.htmlObjectiveInput = document.createElement("input");
        this.htmlObjectiveInput.setAttribute("type", "time");
        this.htmlIsDone = document.createElement("img");
        this.htmlIsDone.setAttribute("src", "../img/notOk.png");
        this.htmlButton = new ButtonTimerControl(this).html;
        

        this.doPlay();
        this.refresh = function(){};
    }

    play() {
        this.refTime = Date.now();
        this.refresh = this.doPlay;
    }

    doPlay() {
        this.time = this.storage + Date.now() - this.refTime;
        this.htmlTimeDisplay.innerHTML = Time.toString(new Date(this.time));
        
        if (this.time >= this.htmlObjectiveInput.value) {
            if (!(this.isDone)) {
                this.htmlIsDone.setAttribute("src", "../img/isOk.png");
            }
        } else if (this.isDone) {
            this.htmlIsDone.setAttribute("src", "../img/notOk.png");
        }
    }

    stop() {
        this.storage = this.time;
        this.refresh = function(){};
    }
    
}