class Main {
    constructor() {
        this.timerTable = new TimerTable();
        this.addChild(this.timerTable);
        this.timerTable.addTimer("Test");
        /*window.onbeforeunload = function() {
            return "Sure ?";
        }*/

        this.onFrame();
        //this.timerTable.refresh();
    }

    onFrame() {
        this.timerTable.refresh();
        requestAnimationFrame(this.onFrame.bind(this));
    }
    
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