<template>
  <v-app-bar app class="topbar" :height="topBarHeight" :style="{ transition: 'height 0.5s' }">
    <v-container fluid>
      <v-row align-center>
        <v-col>
          <v-img src="@/assets/logotipo.png" class="logo mt-n6" :style="{ opacity: logoOpacity, transform: `translateY(${logoTranslateY}px)` }" />
        </v-col>
        <v-col class="buttons mt-n7" :style="{ transform: `translateY(${buttonsTranslateY}px)` }">
          <router-link v-for="(item, i) in items" :key="i" :to="item.link" class="custom-btn" :class="{ active: selectedItem === i }" @click="selectItem(i)">
            {{ item.text }}
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      topBarHeight: 160,
      logoOpacity: 1,
      logoTranslateY: -10,
      buttonsTranslateY: 0,
      scrollTop: 0,
      selectedItem: 0,
      items: [
        { link: "/", text: "Home" },
        { link: "/Courses", text: "Cursos" },
        { link: "/Internship", text: "Estágio" },
        { link: "/Registration", text: "Matrícula" },
      ],
    };
  },
  methods: {
    handleScroll() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.logoTranslateY = Math.min(0, -1 * this.scrollTop);
      this.logoOpacity = Math.max(0, 1 - 1 * this.scrollTop);
      const maxButtonsTranslateY = this.topBarHeight - 15;
      this.buttonsTranslateY = Math.max(-maxButtonsTranslateY, -1.5 * this.scrollTop);
      this.topBarHeight = Math.max(60, 160 - 1 * this.scrollTop);
    },
    adjustTopBarOnLoad() {
      this.handleScroll();
    },
    selectItem(index) {
      this.selectedItem = index;
    },
  },
  mounted() {
    window.addEventListener("load", this.adjustTopBarOnLoad);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("load", this.adjustTopBarOnLoad);
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.topbar {
  background: linear-gradient(to right, #23832c, #40e0d0);
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: "Arial", sans-serif;
  font-size: 24px;
}

.logo {
  max-width: 70%;
  display: block;
  transition: opacity 0.5s, transform 0.3s;
  margin: 0 auto;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s;
}
.custom-btn {
  margin: 0 1%;
  padding: 0.5%;
  color: #fff;
  font-family: sans-serif;
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.custom-btn:hover {
  background-color: rgba(255, 255, 255, 0.1); 
  border-radius: 5px;
}
</style>
