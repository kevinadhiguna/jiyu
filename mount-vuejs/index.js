const app = Vue.createApp({
    data() {
        return {
            teamName: "Los Angeles Angels",
            playerName: "Shohei Ohtani",
            playerPosition: "DH",
            homeruns: 46,
            hasManager: true,
            managerName: "Joe Maddon",
        };
    },
    methods: {
        changePlayer(playerName) {
            this.playerName = playerName;
        },
        toggleShowManager() {
            this.hasManager = !this.hasManager;
        },
        handleEvent(e) {
            console.log("Event :", e);
            console.log("Event Type :", e.type);
        }
    },
});

app.mount("#mount-vuejs");
