/*
design by Voicu Apostol.
design: https://dribbble.com/shots/3533847-Mini-Music-Player
I can't find any open music api or mp3 api so i have to download all musics as mp3 file.
You can fork on github: https://github.com/muhammederdem/mini-player
*/

new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Demasiadas Mujeres",
          artist: "C. Tangana",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",
         
          url: "https://www.youtube.com/watch?v=ZlFri4ez_lE",
          favorited: true
        },
        {
          name: "Tú Me Dejaste De Querer",
          artist: "C. Tangana",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",
  
          url: "https://www.youtube.com/watch?v=ltmO9XQVdSg",
          favorited: true
        },
        {
          name: "Comerte Entera",
          artist: "C. Tangana",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",

          url: "https://www.youtube.com/watch?v=3xlExHPyqM0",
          favorited: true
        },
        {
          name: "Nunca Estoy",
          artist: "C. Tangana",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",

          url: "https://www.youtube.com/watch?v=U6phuhL1YbY",
          favorited: true
        },
        {
          name: "Párteme La Cara",
          artist: "C. Tangana",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",

          url: "https://www.youtube.com/watch?v=gcS2H3p-YOg",
          favorited: true
        },
        {
          name: "Ingobernable",
          artist: "C.Tangana",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",

          url: "https://www.youtube.com/watch?v=uV0r4a2QVkQ",
          favorited: true
        },
        {
          name: "Nominao",
          artist: "C. Tangana",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",

          url: "https://www.youtube.com/watch?v=wAZZ9Xe3HKA",
          favorited: true
        },
        {
          name: "Un Veneno - G-Mix",
          artist: "C. Tangana",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",

          url: "https://www.youtube.com/watch?v=h0Tb9VtVzVE",
          favorited: true
        },
        {
          name: "Rag'n'Bone Man",
          artist: "Human",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",

          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
