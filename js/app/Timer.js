class Timer {
    /**
     * 
     * @param {String} pName 
     */
    constructor(pName) {
        this.name = pName;
        
        this.time = 0;
        this.refTime = Date.now();
        this.storage = 0;
        this.isPlaying = false;

        this.htmlName = document.createElement("p");
        this.htmlTimeDisplay = document.createElement("p");
        this.htmlGoalInput = document.createElement("input");
        this.htmlGoalInput.setAttribute("type", "time");
        this.htmlIsDone = document.createElement("img");
        this.htmlIsDone.setAttribute("src", "img/notOk.png");
        this.htmlIsDone.height *= 0.25;
        this.htmlIsDone.width *= 0.25;
        this.htmlButtonControl = new ButtonTimerControl(this).html;
        this.htmlButtonReset = new ButtonTimerReset(this).html;        

        this.doPlay();
        this.refresh = function(){};
    }

    play() {
        this.refTime = Date.now();
        this.isPlaying = true;
        this.refresh = this.doPlay;
    }

    doPlay() {
        this.time = this.storage + Date.now() - this.refTime;
        this.htmlTimeDisplay.innerHTML = Time.toString(new Date(this.time));

        var timeGoal = Time.strToMs(this.htmlGoalInput.value)
        if (this.time >= timeGoal/60 && timeGoal != 0) {
            if (this.htmlIsDone.getAttribute("src") != "img/isOk.png") {
                this.htmlIsDone.setAttribute("src", "img/isOk.png");
                this.isDone = true;
            }
        } else if (this.htmlIsDone.getAttribute("src") != "img/notOk.png") {
            this.htmlIsDone.setAttribute("src", "img/notOk.png");
            this.isDone = false;
        }
    }

    stop() {
        this.storage = this.time;
        this.isPlaying = false;
        this.refresh = function(){};
    }

    reset() {
        this.htmlButtonControl.click();
        if (this.isPlaying == true) this.htmlButtonControl.click();
        
        this.storage = 0;
        this.refTime = Date.now();
        this.doPlay();
    }
    
}