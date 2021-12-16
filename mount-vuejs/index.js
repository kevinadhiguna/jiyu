const app = Vue.createApp({
    data() {
        return {
            teamName: "Los Angeles Angels",
            playerName: "Shohei Ohtani",
            playerPosition: "DH",
            homeruns: 46,
            hasManager: true,
        }
    },
    methods: {
        changePlayer(playerName) {
            this.playerName = playerName;
        }
    }
});

app.mount("#mount-vuejs");
