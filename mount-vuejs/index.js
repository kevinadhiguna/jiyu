const app = Vue.createApp({
    data() {
        return {
            teamName: "Los Angeles Angels",
            playerName: "Shohei Ohtani",
            playerPosition: "DH",
            homeruns: 46,
        }
    }
});

app.mount("#mount-vuejs");
