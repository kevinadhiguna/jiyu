const app = Vue.createApp({
    data() {
        return {
            teamName: "Los Angeles Angels",
            playerName: "Shohei Ohtani",
            playerPosition: "DH",
            homeruns: 46,
        }
    },
    methods: {
        changePlayer() {
            this.playerName = "Mike Trout";
        }
    }
});

app.mount("#mount-vuejs");
