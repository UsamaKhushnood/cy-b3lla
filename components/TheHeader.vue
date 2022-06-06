<template>
  <div>
    <v-app-bar
      app
      color="transparent"
      class="the-header"
      short
      dense
      shrink-on-scroll
      elevation="0"
    >
      <div
        class="header-wrapper glassy-background"
        :class="{ headerFixed: scrollPosition > 0 }"
      >
        <div
          class="d-flex container header-container align-center align-lg-stretch align-md-stretch"
        >
          <v-app-bar-nav-icon
            class="black--text d-sm-flex d-md-none"
            @click="drawer = !drawer"
          ></v-app-bar-nav-icon>
          <NuxtLink
            v-if="scrollPosition < 5"
            class="nav-brand hover sitelogo black--text mx-sm-auto mx-auto mx-md-0"
            to="/"
            tag="div"
          >
            <img src="@/assets/logo.png" class="websiteLogo" alt="Site Logo" />
          </NuxtLink>
          <NuxtLink
            v-else
            class="nav-brand sitelogo black--text d-flex align-center mx-sm-auto mx-auto mx-md-0"
            to="/"
            tag="div"
          >
            <img
              src="@/assets/logo.min.png"
              class="websiteLogo"
              alt="Site Logo"
            />
          </NuxtLink>

          <div
            class="header-links ml-auto d-none d-md-block d-sm-none mr-5 mr-sm-0"
          >
            <nuxt-link to="/about" class="navbar-link">About</nuxt-link>
            <nuxt-link to="/bella-hadid" class="navbar-link"
              >BELLA HADID</nuxt-link
            >
            <nuxt-link to="/locations" class="navbar-link">locations</nuxt-link>
            <nuxt-link to="#" class="navbar-link text--disabled"
              >gala</nuxt-link
            >
            <nuxt-link to="/menifesto" class="navbar-link">manifesto</nuxt-link>
            <nuxt-link to="/activation" class="navbar-link"
              >activation</nuxt-link
            >
            <nuxt-link to="#" class="navbar-link text--disabled"
              >game on</nuxt-link
            >
          </div>
          <div class="social-media-links d-flex align-center ml-md-10 ml-0">
            <a href="#" class="mr-3 mr-md-8 decoration-none">
              <v-icon class="black--text">mdi-twitter</v-icon>
            </a>
            <a href="#" class="decoration-none d-flex align-center pt-1">
              <svg width="24px" height="20px">
                <use href="@/assets/icon/discord.svg#discord"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 text-center">
            <div class="d-flex justify-space-between">
              <img src="@/assets/logo.png" width="150px" alt="logo" />
              <v-icon color="black" @click="drawer = !drawer">mdi-close</v-icon>
            </div>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list class="mt-10" dense nav>
        <NuxtLink to="/about" tag="v-list-item" link>
          <v-btn
            tile
            elevation="0"
            block
            color="black"
            class="white--text text-uppercase sidebarLinks mb-2"
            >About</v-btn
          >
        </NuxtLink>
        <NuxtLink to="/bella-hadid" tag="v-list-item" link>
          <v-btn
            tile
            elevation="0"
            block
            color="black"
            class="white--text text-uppercase sidebarLinks mb-2"
            >bella hadid</v-btn
          >
        </NuxtLink>
        <NuxtLink to="/gala" tag="v-list-item" link>
          <v-btn
            tile
            elevation="0"
            block
            color="black"
            class="white--text text-uppercase sidebarLinks mb-2"
            >gala</v-btn
          >
        </NuxtLink>

        <NuxtLink to="/locations" tag="v-list-item" link>
          <v-btn
            tile
            elevation="0"
            block
            color="black"
            class="white--text text-uppercase sidebarLinks mb-2"
            >locations</v-btn
          >
        </NuxtLink>
        <NuxtLink to="/menifesto" tag="v-list-item" link>
          <v-btn
            tile
            elevation="0"
            block
            color="black"
            class="white--text text-uppercase sidebarLinks mb-2"
            >manifesto</v-btn
          >
        </NuxtLink>
        <NuxtLink to="/activation" tag="v-list-item" link>
          <v-btn
            tile
            elevation="0"
            block
            color="black"
            class="white--text text-uppercase sidebarLinks mb-2"
            >activation</v-btn
          >
        </NuxtLink>
      </v-list>
    </v-navigation-drawer>

    <v-dialog v-model="registrationDialog" width="80%" fullscreen>
      <v-card class="registration-dialog glassy-background">
        <v-card-title class="text-h5">
          <v-icon
            color="black"
            class="ml-auto mb-5"
            @click="$store.dispatch('setRegistrationDialog', false)"
            >mdi-close</v-icon
          >
        </v-card-title>

        <v-card-text class="dialog-body">
          <div>
            <v-text-field
              type="input"
              outlined
              dense
              background-color="#fff"
              placeholder="YOUR EMAIL"
              hide-details
            ></v-text-field>
            <v-btn
              color="black"
              class="white--text mt-2 pa-7 registerButton"
              block
              >REGISTER</v-btn
            >
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      scrollPosition: null,
      drawer: false,
    }
  },
  computed: {
    ...mapState({
      registrationDialog: 'registrationDialog',
    }),
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
// .nav-brand {
//   cursor: pointer;
// }

.registerButton {
  font-size: 50px;
}

.dialog-body {
  width: 480px;
  margin: 0 auto;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 50px !important;
}

.header-wrapper {
  width: 100%;
  padding: 10px;
  padding-right: 30px;
  padding-left: 30px;
}

.the-header {
  z-index: 200;
  .v-toolbar__content {
    padding: 0;
  }
}

.header-container {
  padding-top: 10px;
}

.glassy-background {
  background: rgb(255 255 255 / 66%) !important;
  backdrop-filter: saturate(180%) blur(20px) !important;
}

.registration-dialog {
  height: 100%;
}

.headerFixed {
  position: sticky;
  top: 0;
  z-index: 201;

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
    font-size: 16px;
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
  width: 250px;
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
@media screen and (max-width: 1024px) {
  .header-links {
    .navbar-link {
      padding: 0;
    }
  }
}

@media screen and (max-width: 450px) {
  .header-wrapper {
    padding: 12px 10px !important;
  }

  .websiteLogo {
    width: 150px;
  }

  .v-dialog.v-dialog--active {
    width: 100% !important;
    height: 100%;
    margin: 0;
    overflow: visible;
  }

  .dialog-body {
    width: 80% !important;
    margin: 0 auto;
    height: calc(100% - 0px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 50px !important;
  }
  .registration-dialog {
    height: calc(100% + 55px) !important;
    margin-top: -26px !important;
  }
}

.sidebarLinks {
  &:after {
    content: '';
    position: absolute;
    width: 18px;
    height: 13px;
    background: white;
    right: -7px;
    top: -5px;
    transform: rotate(45deg);
  }
}
</style>
