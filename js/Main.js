class Main {
    static get instance() {
        if (_instance == null) _instance = new Main();
        return _instance;
    }

    static removeLocalStorage() {
        if (confirm("Do you want to delete your timers ?\nYou won't be able to get them back if you don't save again !")) {
            localStorage.clear();
            alert("Local storage cleared.")
        }
    }

    constructor() {
        this.timerTable = new TimerTable();
        this.addChild(this.timerTable);
        this.saveEnabled = (localStorage.getItem("doSave") != "false")

        document.getElementById("saveCheckbox").setAttribute("checked", String(this.saveEnabled));

        var unloadfunction = function() {
            localStorage.setItem("doSave", String(this.saveEnabled));

            if (this.saveEnabled) {
                this.timerTable.save();
            } else {
                return "";
            }
        }

        window.onbeforeunload = unloadfunction.bind(this);

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
let _instance;