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
          source: "https://raw.githubusercontent.com/haruki/C. Tangana/mini-player-master/mp3/01 - C. Tangana - Demasiadas Mujeres.mp3",
          url: "https://www.youtube.com/watch?v=ZlFri4ez_lE",
          favorited: true
        },
        {
          name: "Tú Me Dejaste De Querer",
          artist: "C. Tangana",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",
          source: "https://raw.githubusercontent.com/haruki/C. Tangana/mini-player-master/mp3/02 - C. Tangana, Niño de Elche, La Húngara - Tú Me Dejaste De Querer.mp3", 
          url: "https://www.youtube.com/watch?v=ltmO9XQVdSg",
          favorited: true
        },
        {
          name: "Comerte Entera",
          artist: "C. Tangana",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",
          source: "https://raw.githubusercontent.com/haruki/C. Tangana/mini-player-master/mp3/03 - C. Tangana, Toquinho - Comerte Entera.mp3",
          url: "https://www.youtube.com/watch?v=3xlExHPyqM0",
          favorited: true
        },
        {
          name: "Nunca Estoy",
          artist: "C. Tangana",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",
          source: "https://raw.githubusercontent.com/haruki/C. Tangana/mini-player-master/mp3/04 - C. Tangana - Nunca Estoy.mp3",
          url: "https://www.youtube.com/watch?v=U6phuhL1YbY",
          favorited: true
        },
        {
          name: "Párteme La Cara",
          artist: "C. Tangana",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",
          source: "https://raw.githubusercontent.com/haruki/C. Tangana/mini-player-master/mp3/05 - C. Tangana, Ed Maverick - Párteme La Cara.mp3",
          url: "https://www.youtube.com/watch?v=gcS2H3p-YOg",
          favorited: true
        },
        {
          name: "Ingobernable",
          artist: "C.Tangana",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",
          source: "https://raw.githubusercontent.com/haruki/C. Tangana/mini-player-master/mp3/06 - C. Tangana, Gipsy Kings, Nicolás Reyes, Tonino Baliardo - Ingobernable.mp3",
          url: "https://www.youtube.com/watch?v=uV0r4a2QVkQ",
          favorited: true
        },
        {
          name: "Nominao",
          artist: "C. Tangana",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
          source: "https://raw.githubusercontent.com/haruki/C. Tangana/mini-player-master/mp3/07 - C. Tangana, Jorge Drexler - Nominao.mp3",
          url: "https://www.youtube.com/watch?v=wAZZ9Xe3HKA",
          favorited: true
        },
        {
          name: "Un Veneno - G-Mix",
          artist: "C. Tangana",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",
          source: "https://raw.githubusercontent.com/haruki/C. Tangana/mini-player-master/mp3/08 - C. Tangana, José Feliciano, Niño de Elche - Un Veneno - G-Mix.mp3",
          url: "https://www.youtube.com/watch?v=h0Tb9VtVzVE",
          favorited: true
        },
        {
          name: "Te Olvidaste",
          artist: "C. Tangana",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",
          source: "https://raw.githubusercontent.com/haruki/C. Tangana/mini-player-master/mp3/09 - C. Tangana, Omar Apollo - Te Olvidaste.mp3",
          url: "https://www.youtube.com/watch?v=cZ9NrVKVywk",
          favorited: true
        },
        {
          name: "Muriendo De Envidia",
          artist: "C. Tangana",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",
          source: "https://raw.githubusercontent.com/haruki/C. Tangana/mini-player-master/mp3/10 - C. Tangana, Eliades Ochoa - Muriendo De Envidia.mp3",
          url: "https://www.youtube.com/watch?v=HfkjnAv_uRE",
          favorited: true
        },
        {
          name: "CAMBIA!",
          artist: "C. Tangana",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",
          source: "https://raw.githubusercontent.com/haruki/C. Tangana/mini-player-master/mp3/11 - C. Tangana, Carin Leon, Adriel Favela - CAMBIA!.mp3",
          url: "https://www.youtube.com/watch?v=Bs-jN1EV0q0",
          favorited: true
        },
        {
          name: "Cuándo Olvidaré",
          artist: "C. Tangana",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",
          source: "https://raw.githubusercontent.com/haruki/C. Tangana/mini-player-master/mp3/12 - C. Tangana, Pepe Blanco - Cuándo Olvidaré.mp3",
          url: "https://www.youtube.com/watch?v=A6hDkJEbcuE",
          favorited: true
        },
        {
          name: "Los Tontos",
          artist: "C. Tangana",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",
          source: "https://raw.githubusercontent.com/haruki/C. Tangana/mini-player-master/mp3/13 - C. Tangana, Kiko Veneno - Los Tontos.mp3",
          url: "https://www.youtube.com/watch?v=vjWyRfnR5CQ",
          favorited: true
        },
        {
          name: "Hong Kong",
          artist: "C. Tangana",
          cover: "https://aws.traveler.es/prod/designs/v1/assets/290x290/203216.jpg",
          source: "https://raw.githubusercontent.com/haruki/C. Tangana/mini-player-master/mp3/14 - C. Tangana, Andrés Calamaro - Hong Kong.mp3",
          url: "https://www.youtube.com/watch?v=XLLkSBLqlvQ",
          favorited: true
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
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
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
