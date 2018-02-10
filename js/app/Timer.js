class Timer {
    constructor(pName) {
        this.name = pName;
        
        this.time = 0;
        this.refTime = Date.now();
        this.storage = 0;

        this.displayTime = 0;
        this.doPlay();
        this.refresh = function(){};

        var button = new ButtonTimerControl(this);
        this.HTMLButton = button.html;
    }

    play() {
        this.refTime = Date.now();
        this.refresh = this.doPlay;
    }

    doPlay() {
        this.time = this.storage + Date.now() - this.refTime;
        this.displayTime = Time.toString(new Date(this.time));
    }

    stop() {
        this.storage = this.time;
        this.refresh = function(){};
    }
    
}