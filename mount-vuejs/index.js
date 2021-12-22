const app = Vue.createApp({
    data() {
        return {
            teamName: "Los Angeles Angels",
            websiteUrl: "https://www.angels.com",
            playerName: "Shohei Ohtani",
            playerPosition: "DH",
            homeruns: 46,
            hasManager: true,
            managerName: "Joe Maddon",
            rosters: [
                { name: 'Mike Trout', position: 'CF' },
                { name: 'Anthony Rendon', position: '3B' },
                { name: 'Noah Syndergaard', position: 'SP' },
            ]
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
