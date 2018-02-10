class Main {
    constructor() {
        this.timerTable = new TimerTable();
        this.addChild(this.timerTable);
        this.timerTable.addTimer("A Timer");

        this.onFrame();
    }

    onFrame() {
        this.timerTable.refresh();
        requestAnimationFrame(this.onFrame.bind(this));
    }
    
    /**
     * 
     * @param {HTMLElement} pHTMLElement 
     */
    addChild(pHTMLElement) {
        if (pHTMLElement.html.length == undefined) {
            document.body.appendChild(pHTMLElement.html);
            return;
        }
        var lLength = pHTMLElement.html.length;
        for (var i = 0; i < lLength; i++) {
            document.body.appendChild(pHTMLElement.html[i]);
        }
    }
}