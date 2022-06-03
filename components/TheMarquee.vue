<template>
  <div class="the-marquee d-flex">
    <div class="marquee-sec black pa-2">
      <div class="marquee-container">
        <div class="marquee">
          <div class="d-flex">
            <h4 v-for="i in 4" :key="i" class="white--text mx-5">
              A COLLECTION OF 111111 NFTs 10 COUNTRIES
            </h4>
          </div>
        </div>
        <div class="marquee marquee2">
          <div class="d-flex">
            <h4 v-for="i in 4" :key="i" class="white--text mx-5">
              A COLLECTION OF 111111 NFTs 10 COUNTRIES
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="register-sec">
      <NuxtLink to="/" class="regiesterBtn py-5" tag="v-btn">
        Regiester
      </NuxtLink>
    </div>
  </div>
</template>
<style lang="scss">
// custom marquee with pure CSS
.marquee-sec {
  width: calc(100% - 250px);
  box-shadow: 5px 0px 20px #000000ab;
  .marquee-container {
    height: 30px;
    overflow: hidden;
    line-height: 30px;
    position: relative;

    .marquee {
      top: 0;
      left: 100%;
      width: calc(100% - 120px);
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      animation: marquee 28s linear infinite;
    }
    .marquee2 {
      animation-delay: 14s;
    }
  }
}
.register-sec {
  width: 250px;
  border: 1px solid black;
  border-left: 0;
  border-right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .regiesterBtn {
    border: none !important;
    box-shadow: none;
    background: none !important;
    width: 100%;
    text-align: center;

    span {
      font-size: 20px;
      letter-spacing: 6px;
    }
  }
}
// marquee animation
@keyframes marquee {
  0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
}
</style>
