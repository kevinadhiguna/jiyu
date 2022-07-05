const app = Vue.createApp({
  data() {
    return {
      teamName: "Los Angeles Angels",
      websiteUrl: "https://www.angels.com",
      showPlayers: true,
      showPitchers: true,
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
          img: "https://images.ctfassets.net/pnq4hpds29uh/2M0kpIaRjVmgGZzUCdUhkm/f6f0bd4b0d21c22c6934f9555a33a48c/Noah_Syndergaard_Angels.jpg",
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
    changeColor(player) {
      player.hasBeenMVP = !player.hasBeenMVP;
    },
  },
  computed: {
    showOnlyStartingPitchers() {
      return this.rosters.filter((roster) => roster.position == "SP");
    },
  },
});

app.mount("#mount-vuejs");
