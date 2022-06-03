<template>
  <div class="the-header">
    <v-container>
      <div class="d-flex py-2">
        <NuxtLink class="nav-brand sitelogo black--text" to="/" tag="div">
          <div class="text-dark">
            <sup>RE</sup>B4S3
            <span class="mx-2"><v-icon color="black">mdi-close</v-icon></span>
            BELLE HADID
          </div>
          <h1>CY - B3LLA</h1>
        </NuxtLink>
        <div class="header-links ml-auto mr-5">
          <nuxt-link to="/about" class="navbar-link">About</nuxt-link>
          <nuxt-link to="/belle-hadid" class="navbar-link"
            >BELLE HADID</nuxt-link
          >
          <nuxt-link to="/locations" class="navbar-link">locations</nuxt-link>
          <nuxt-link to="#" class="navbar-link text--disabled"
            >gallery</nuxt-link
          >
          <nuxt-link to="/private-society" class="navbar-link"
            >private society</nuxt-link
          >
          <nuxt-link to="/activation" class="navbar-link">activation</nuxt-link>
          <nuxt-link to="#" class="navbar-link text--disabled"
            >game on</nuxt-link
          >
          <nuxt-link to="/shop" class="navbar-link">shop</nuxt-link>
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
<style lang="scss">
.nav-brand {
  cursor: pointer;
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
</style>
