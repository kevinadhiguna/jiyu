const app = Vue.createApp({
  data() {
    return {
      teamName: "Los Angeles Angels",
      websiteUrl: "https://www.angels.com",
      showPlayers: true,
      rosters: [
        {
          name: "Mike Trout",
          position: "CF",
          hasBeenMVP: true,
          img: "https://s.yimg.com/uu/api/res/1.2/TXgljaUjOCosGEFQIKZ6fg--~B/aD0yMDQxO3c9MzA2MDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2020-01/e5e786c0-3989-11ea-a7ee-fcba7d6fe84d",
        },
        {
          name: "Anthony Rendon",
          position: "3B",
          hasBeenMVP: false,
          img: "https://sportshub.cbsistatic.com/i/r/2020/08/24/6f2baabd-df27-45d6-acae-792c338d6d6d/thumbnail/1200x675/d3efc6b52fb5862456f74a74c1f780cc/anthony-rendon.png",
        },
        {
          name: "Shohei Ohtani",
          position: "SP/DH",
          hasBeenMVP: true,
          img: "https://hczhy4dqcfw396ohi4169w11-wpengine.netdna-ssl.com/wp-content/uploads/2022/07/Ohtani-White-Sox-City-Connect.jpg",
        },
        {
          name: "Noah Syndergaard",
          position: "SP",
          hasBeenMVP: false,
          img: "https://images.daznservices.com/di/library/sporting_news/5e/f6/noah-syndergaard-41619-ftr_1xae9ljnym1vd1usagyhhdj7of.png?t=711309146&quality=100&w=1280&h=720",
        },
        {
          name: "Patrick Sandoval",
          position: "SP",
          hasBeenMVP: false,
          img: "https://www.presstelegram.com/wp-content/uploads/2019/09/GettyImages-1172368294-1.jpg?w=1860",
        },
      ],
    };
  },
  methods: {
    toggleShowPlayers() {
      this.showPlayers = !this.showPlayers;
    },
  },
});

app.mount("#mount-vuejs");
