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
                { name: 'Mike Trout', position: 'CF', img: "https://www.pngarts.com/files/5/Mike-Trout-PNG-Free-Download.png" },
                { name: 'Anthony Rendon', position: '3B', img: "https://sportshub.cbsistatic.com/i/r/2020/08/24/6f2baabd-df27-45d6-acae-792c338d6d6d/thumbnail/1200x675/d3efc6b52fb5862456f74a74c1f780cc/anthony-rendon.png" },
                { name: 'Noah Syndergaard', position: 'SP', img: "https://images.daznservices.com/di/library/sporting_news/5e/f6/noah-syndergaard-41619-ftr_1xae9ljnym1vd1usagyhhdj7of.png?t=711309146&quality=100&w=1280&h=720" },
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
