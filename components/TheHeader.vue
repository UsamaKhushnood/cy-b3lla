<template>
  <div class="the-header" :class="{ headerFixed: scrollPosition > 0 }">
    <v-container>
      <div class="d-flex header-container">
        <NuxtLink
          v-if="scrollPosition < 5"
          class="nav-brand sitelogo black--text"
          to="/"
          tag="div"
        >
          <img src="@/assets/logo.png" class="websiteLogo" alt="Site Logo" />
        </NuxtLink>
        <NuxtLink
          v-else
          class="nav-brand sitelogo black--text"
          to="/"
          tag="div"
        >
          <img src="@/assets/logo.min.png" alt="Site Logo" />
        </NuxtLink>
        <div class="header-links ml-auto mr-5">
          <nuxt-link to="/about" class="navbar-link">About</nuxt-link>
          <nuxt-link to="/bella-hadid" class="navbar-link"
            >BELLA HADID</nuxt-link
          >
          <nuxt-link to="/locations" class="navbar-link">locations</nuxt-link>
          <nuxt-link to="#" class="navbar-link text--disabled"
            >gallery</nuxt-link
          >
          <nuxt-link to="/menifesto" class="navbar-link">menifesto</nuxt-link>
          <nuxt-link to="/activation" class="navbar-link">activation</nuxt-link>
          <nuxt-link to="#" class="navbar-link text--disabled"
            >game on</nuxt-link
          >
        </div>
        <div class="social-media-links d-flex align-center ml-10">
          <a href="#" class="mr-8 decoration-none">
            <v-icon class="black--text">mdi-twitter</v-icon>
          </a>
          <a href="#" class="decoration-none">
            <v-icon class="black--text">mdi-discord</v-icon>
          </a>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scrollPosition: null,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
  },
}
</script>
<style lang="scss">
.nav-brand {
  cursor: pointer;
}

.header-container {
  padding-top: 8px;
  padding-bottom: 8px;
}

.headerFixed {
  position: sticky;
  top: 0;
  z-index: 99999;
  background: #fffc;
  backdrop-filter: saturate(180%) blur(20px);
  .header-container {
    padding: 0;
  }
  .header-links {
    display: flex;
    align-items: center;
  }
  a.navbar-link.nuxt-link-active {
    &:after {
      content: none;
    }
  }
}

.header-links {
  .navbar-link {
    text-transform: uppercase;
    color: #000 !important;
    padding: 0 10px;
    text-decoration: navajowhite;
    transition: 0.1s all ease-in-out;
    &:not(.nuxt-link-active):hover {
      text-decoration: underline;
    }
  }
}

a.navbar-link.nuxt-link-active {
  position: relative;
  font-weight: 700;
  &:after {
    content: '\F0415';
    font: normal normal normal 24px/1 'Material Design Icons';
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translate(-50%);
    font-size: 40px;
  }
}

.websiteLogo {
  width: 300px;
}

@media screen and (max-width: 1336px) {
  .websiteLogo {
    width: 200px;
  }
  .header-links {
    .navbar-link {
      padding: 0 5px;
    }
  }
}
</style>
