const app = Vue.createApp({
    data() {
        return {
            teamName: "Los Angeles Angels",
            playerName: "Shohei Ohtani",
            playerPosition: "DH",
            homeruns: 46,
            hasManager: true,
            managerName: "Joe Maddon",
            x: 0,
            y: 0
        };
    },
    methods: {
        changePlayer(playerName) {
            this.playerName = playerName;
        },
        toggleShowManager() {
            this.hasManager = !this.hasManager;
        },
        handleEvent(e, data) {
            console.log("Event :", e);
            console.log("Event Type :", e.type);
            
            if (data) {
                console.log("Data :", data);
            }
        },
        handleMouseMove (e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    },
});

app.mount("#mount-vuejs");
