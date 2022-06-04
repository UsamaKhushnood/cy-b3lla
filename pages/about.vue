<template>
  <div class="about-page">
    <v-container>
      <v-row
        justify="center"
        align="center"
        class="py-10 flex-column-reverse flex-md-row"
      >
        <v-col cols="12" sm="12" md="6" class="pa-10">
          <h1 class="heading mb-3">About</h1>
          <div class="paragraphWrapper">
            <p>
              A collection of 11,111 NFTs spread across 10 real-world regions.
              CY-B3LLA is a digital revolution that seeks a revival of human
              connection. It is a celebration of high fashion, women in web3,
              and love that has no borders. CY-B3LLA will serve as identity
              passes to the CY-B3R GALA.
            </p>
            <p>
              Inspired by the cyborg/robotics theme, we breathe life into our
              design, transforming core ideas into a cohesive product. With
              recent tragedies such as wars and COVID-19 plaguing our world, we
              are forgetting how to communicate, love, appreciate and care for
              each other. We are reviving how we used to live, how we used to
              connect, in a new way.
            </p>
            <p>
              In order to express the emotions and portray this revival into
              art, CY-B3LLA utilizes innovative tech-styling such as 3D body
              scanning, lighting effects and geo-based attributes. Design
              advancement is key to creating the best possible representation of
              CY-B3LLA.
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="6" class="pa-5">
          <img
            src="@/assets/images/about/sec1.png"
            width="100%"
            class="sec1Img"
            alt="Belle Hadid"
          />
          <div class="pt-10">
            <v-slider
              v-model="sliderStep"
              :tick-labels="ticksLabels"
              :max="4"
              step="1"
              ticks="always"
              tick-size="4"
              color="black"
              class="slider mt-10"
              track-color="black"
            ></v-slider>
          </div>
          <div
            class="d-flex justify-space-between px-1"
            style="margin-top: -15px"
          >
            <h4>HUMAN</h4>
            <h4>CYBORG</h4>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row
        justify="center"
        align="center"
        class="sec2 py-10 flex-column-reverse flex-md-row"
      >
        <v-col cols="12" sm="12" md="6" class="pa-10">
          <h1 class="heading mb-3">
            GEO-BASED <br />
            TRAITS
          </h1>
          <div class="paragraphWrapper">
            <p>
              CY-BELLA is the first NFT collection that focuses its design based
              on the 10 countries that it represents.
            </p>
            <p>
              To truly embrace and celebrate inclusive globalization, the
              collection incorporates unique regional attributes. Each of the
              regional attributes will be collaborated on by local artists to
              add their own touch and interpretation of their regions to
              genuinely portray the unique heritage, pop culture, trends and
              emotions. These traits are well-researched beforehand to graspa
              true representation of each of the regions.
            </p>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="6"
          class="pa-5 d-flex justify-center postion-relative"
        >
          <div class="nftInfoPanel">
            <div class="infoBoxSquared infoBox">
              <p class="mb-0">
                #00983 <br />
                LOCATION - TOKYO <br />
                CYBORG - WHITE <br />
                SPECIAL TRAITS: <br />
                // DAY
              </p>
            </div>
            <div class="infoBox infoBoxSec">
              <div>
                <div class="d-flex justify-space-between">
                  <h5>HUMAN</h5>
                  <h5>CYBORG</h5>
                </div>
                <v-progress-linear
                  value="75"
                  color="black"
                  height="25"
                ></v-progress-linear>
              </div>
              <div>
                <div class="d-flex justify-space-between">
                  <h5>RARE</h5>
                  <h5>COMMON</h5>
                </div>
                <v-progress-linear
                  value="45"
                  color="black"
                  height="25"
                ></v-progress-linear>
              </div>
              <div>
                <div class="d-flex justify-space-between">
                  <h5>HOLY</h5>
                  <h5>EVIL</h5>
                </div>
                <v-progress-linear
                  value="35"
                  color="black"
                  height="25"
                ></v-progress-linear>
              </div>
              <div>
                <div class="d-flex justify-space-between">
                  <h5>X</h5>
                  <h5>Y</h5>
                </div>
                <v-progress-linear
                  value="65"
                  color="black"
                  height="25"
                ></v-progress-linear>
              </div>
            </div>
          </div>
          <img
            src="@/assets/images/about/sec2.png"
            class="sec2Img nftImage"
            alt="Belle Hadid"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row class="sec3 py-10 flex-column-reverse flex-md-row">
        <v-col cols="12" sm="12" md="6" class="pa-10">
          <h1 class="heading mb-3">TOKYO</h1>
          <div class="paragraphWrapper">
            <p>
              Each location will hold inspiration from the country’s pop culture
              and culture, to which a local artist will add his/her own ‘touch’
              to the collection to make it even more representative of the
              country.
            </p>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="6"
          class="pa-5 d-flex justify-center postion-relative"
        >
          <div class="nftInfoPanel">
            <div class="infoBoxSquared infoBox">
              <p class="mb-0">
                #00983 <br />
                LOCATION - TOKYO <br />
                CYBORG - WHITE <br />
                SPECIAL TRAITS: <br />
                // DAY
              </p>
            </div>
            <div class="infoBox infoBoxSec">
              <div>
                <div class="d-flex justify-space-between">
                  <h5>HUMAN</h5>
                  <h5>CYBORG</h5>
                </div>
                <v-progress-linear
                  value="75"
                  color="black"
                  height="25"
                ></v-progress-linear>
              </div>
              <div>
                <div class="d-flex justify-space-between">
                  <h5>RARE</h5>
                  <h5>COMMON</h5>
                </div>
                <v-progress-linear
                  value="45"
                  color="black"
                  height="25"
                ></v-progress-linear>
              </div>
              <div>
                <div class="d-flex justify-space-between">
                  <h5>HOLY</h5>
                  <h5>EVIL</h5>
                </div>
                <v-progress-linear
                  value="35"
                  color="black"
                  height="25"
                ></v-progress-linear>
              </div>
              <div>
                <div class="d-flex justify-space-between">
                  <h5>X</h5>
                  <h5>Y</h5>
                </div>
                <v-progress-linear
                  value="65"
                  color="black"
                  height="25"
                ></v-progress-linear>
              </div>
            </div>
          </div>
          <img
            src="@/assets/images/about/sec3.png"
            class="sec2Img nftImage"
            alt="Belle Hadid"
          />
        </v-col> </v-row
    ></v-container>
    <v-container>
      <v-row class="sec4 py-10 flex-column-reverse flex-md-row">
        <v-col cols="12" sm="12" md="6" class="pa-10">
          <div class="tableView">
            <h2 class="pa-3">LOCATION #1 Of 10</h2>
            <div class="tableCell">
              <h4>MAIN INSPIRATION</h4>
              <p class="mb-0">// ROBOTICS</p>
            </div>
            <div class="tableCell">
              <h4>SECONDARY INSPIRATION</h4>
              <p class="mb-0 text-uppercase">// Manga</p>
              <p class="mb-0 text-uppercase">// Shibari</p>
              <p class="mb-0 text-uppercase">// Cosplay</p>
              <p class="mb-0 text-uppercase">// Sakura</p>
              <p class="mb-0 text-uppercase">// Minimalism</p>
              <p class="mb-0 text-uppercase">// Kimono</p>
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="6"
          class="pa-5 d-flex justify-center postion-relative"
        >
          <div class="nftInfoPanel">
            <div class="infoBoxSquared infoBox">
              <p class="mb-0">
                #00983 <br />
                LOCATION - TOKYO <br />
                CYBORG - WHITE <br />
                SPECIAL TRAITS: <br />
                // DAY
              </p>
            </div>
            <div class="infoBox infoBoxSec">
              <div>
                <div class="d-flex justify-space-between">
                  <h5>HUMAN</h5>
                  <h5>CYBORG</h5>
                </div>
                <v-progress-linear
                  value="75"
                  color="black"
                  height="25"
                ></v-progress-linear>
              </div>
              <div>
                <div class="d-flex justify-space-between">
                  <h5>RARE</h5>
                  <h5>COMMON</h5>
                </div>
                <v-progress-linear
                  value="45"
                  color="black"
                  height="25"
                ></v-progress-linear>
              </div>
              <div>
                <div class="d-flex justify-space-between">
                  <h5>HOLY</h5>
                  <h5>EVIL</h5>
                </div>
                <v-progress-linear
                  value="35"
                  color="black"
                  height="25"
                ></v-progress-linear>
              </div>
              <div>
                <div class="d-flex justify-space-between">
                  <h5>X</h5>
                  <h5>Y</h5>
                </div>
                <v-progress-linear
                  value="65"
                  color="black"
                  height="25"
                ></v-progress-linear>
              </div>
            </div>
          </div>
          <img
            src="@/assets/images/about/sec4.png"
            class="sec2Img nftImage"
            alt="Belle Hadid"
          />
        </v-col> </v-row
    ></v-container>
    <div class="grey lighten-3">
      <v-container>
        <v-row class="sec5 py-10 flex-column-reverse flex-md-row">
          <v-col cols="12" sm="12" md="6" class="pa-10">
            <h1 class="heading mb-3">4K 3D DETAILS</h1>
            <div style="width: 300px" class="sec7Para">
              <p>
                Here you can see an example of the rendered 3D scan created by a
                group of designers who are experts in their field (some have
                worked in CD Projekt that created “The Witcher”, “Cyberpunk
                2077” and many other worldwide recognized games known for their
                amazing graphics).
              </p>
              <p>
                The left side represents the scan without any skin texture on it
                - it shows how detailed the scan is, taking into account every
                lash, every pore separately.
              </p>
              <p>
                On the right we see the same model but with already rendered
                texture on it.
              </p>
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="12"
            md="6"
            class="pa-5 d-flex justify-center postion-relative sec5Nfts"
          >
            <img
              src="@/assets/images/about/sec5Avatar.png"
              class="sec5Avatar"
              alt="Belle Hadid"
            />
            <img
              src="@/assets/images/about/sec5.png"
              class="sec5Img nftImage"
              alt="Belle Hadid"
            />

            <img
              src="@/assets/images/about/sec5Avatar2.png"
              class="sec5Avatar"
              alt="Belle Hadid"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="black">
      <v-container>
        <v-row class="sec6 py-10 flex-column-reverse flex-md-row">
          <v-col cols="12" sm="12" md="6" class="pa-10">
            <h1 class="heading mb-3 white--text">
              UNIQUE TRAITS <br />
              / LIGHTING
            </h1>
            <div class="paragraphWrapper">
              <p class="white--text">
                CY-B3LLA is the first NFT collection to fully embrace the
                concept of lighting. Lighting brings the beauty of multi-faceted
                angles that bring new perspectives to the scene. In order to
                achieve this, each NFT is individually designed in contrast to a
                conventional algorithm-based attribute design. Our design team
                has dedicated artisanal design efforts to each individual NFT
                with attention to details, instead of mass producing the
                collection.
              </p>
            </div>

            <div class="mt-5">
              <div class="listView">
                <div class="list-header">
                  <h4 class="white--text">LIGHTING</h4>
                </div>
                <div class="list-item">
                  <h4 class="white--text">DAY</h4>
                </div>
                <div class="list-item">
                  <h4 class="white--text">NIGHT</h4>
                </div>
                <div class="list-item">
                  <h4 class="white--text">SPECIAL TOKYO 1</h4>
                </div>
                <div class="list-item">
                  <h4 class="white--text">SPECIAL TOKYO 2</h4>
                </div>
              </div>
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="12"
            md="6"
            class="pa-5 d-flex justify-center postion-relative align-center"
          >
            <img
              src="@/assets/images/about/sec6.png"
              class="sec6Img nftImage"
              alt="Belle Hadid"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="grey lighten-5">
      <v-container>
        <v-row class="sec7 py-10 flex-column-reverse flex-md-row">
          <v-col cols="12" sm="12" md="6" class="pa-10">
            <h1 class="heading mb-3">
              MONO-COLOUR <br />
              TRAITS
            </h1>
            <div style="width: 300px" class="sec7Para">
              <p>
                There will be special monochrome traits specific for each
                region. Without all the color, things are more raw.
              </p>
              <p>
                It is able to depict the true beauty of lines, shapes and
                textures that form the art. This brings out the uniqueness of
                the CY-B3LLA design.
              </p>
              <p>
                For example for Japan: a whole CY-BELLA will be only in white,
                Sakura pink and red (as shown below). No other NFT collection
                has implemented monocolor before!
              </p>
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="12"
            md="6"
            class="pa-5 d-flex justify-center postion-relative sec7Nfts"
          >
            <img
              src="@/assets/images/about/Group322.png"
              class="sec7Img"
              alt="Belle Hadid"
            />
            <img
              src="@/assets/images/about/Group323.png"
              class="sec7Img"
              alt="Belle Hadid"
            />

            <img
              src="@/assets/images/about/Group321.png"
              class="sec7Img"
              alt="Belle Hadid"
            />
            <div class="color-bullets">
              <div class="bullet bullet-pink"></div>
              <div class="bullet bullet-red"></div>
              <div class="bullet bullet-white"></div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutView',
  data() {
    return {
      sliderStep: 2,
      ticksLabels: ['100%', '75%', '50%', '75%', '100%'],
    }
  },
}
</script>
<style lang="scss">
.sec1Img {
  border-bottom: 1px solid black;
}

.heading {
  font-size: 75px;
  line-height: 75px;
}

.paragraphWrapper {
  width: 500px;
}

.v-slider__ticks-container--always-show .v-slider__tick {
  top: calc(50% - 50px) !important;
}

.v-slider__tick {
  background-color: transparent !important;
}

.nftImage {
  width: 100%;
  min-width: 600px;
  max-width: 600px;
}

.sec2 {
  background: url('~assets/images/about/sec2Background.png');
  background-repeat: no-repeat;
  background-size: 1300px;
  background-position: center right;
}

.nftInfoPanel {
  position: absolute;
  left: -117px;
  bottom: 290px;
  .infoBoxSquared.infoBox {
    background: #fff;
    padding: 20px;
    border: 1px solid #999;
    border-right: 0;
    width: 263px;
    border-bottom: 0;
  }
  .infoBox.infoBoxSec {
    border: 1px solid #999;
    padding: 25px;
    background: #fff;
    width: 320px;
    position: absolute;
    left: -23px;
    &:after {
      content: '';
      width: 24px;
      border: 1px solid #999;
      height: 31px;
      position: absolute;
      left: -10px;
      background: #fff;
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      border-bottom: 0;
      top: -13px;
    }
  }
}

.tableView {
  border: 1px solid;
  width: 300px;
  .tableCell {
    border: 1px solid;
    border-left: 0;
    border-right: 0;
    padding: 10px;
    padding-left: 30px;
    position: relative;
    &:nth-last-child(1) {
      border-top: 0;
      border-bottom: 0;
    }
    &:before {
      content: '';
      position: absolute;
      left: 20px;
      width: 1px;
      height: 100%;
      background: #000;
      top: 0;
    }
  }
}

.sec5Nfts {
  position: relative;
  .sec5Avatar {
    width: 300px;
    height: 300px;
    position: absolute;
    left: 0;
    top: 250px;
    &:nth-last-child(1) {
      top: 50px;
      left: auto;
      right: 0;
    }
  }
}

.listView {
  width: 200px;
  .list-header {
    border: 1px solid #fff;
    padding: 6px;
    width: 150px;
    position: relative;
    &:after {
      content: '';
      width: 13px;
      height: 10px;
      background: #000;
      position: absolute;
      right: -6px;
      top: -4px;
      border: 1px solid #fff;
      transform: rotate(45deg);
      border-top: 0;
      border-right: 0;
      border-left: 0;
    }
  }
  .list-item {
    padding: 10px;
    border: 1px solid #fff;
  }
}

img.sec7Img {
  position: absolute;
  width: 100%;
  min-width: 400px;
  max-width: 400px;
  left: 0;
  z-index: 8;
  &:nth-child(2) {
    left: 50%;
    transform: translate(-50%);
    top: 65px;
    z-index: 9;
  }
  &:nth-child(3) {
    right: 0;
    left: auto;
    z-index: 8;
  }
}

.color-bullets {
  display: flex;
  column-gap: 10px;
  position: absolute;
  bottom: 30px;
  .bullet {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #999;
    &.bullet-pink {
      background: #ffe3e5;
    }
    &.bullet-red {
      background: #e63b3b;
    }
  }
}

@media (max-width: 1790px) {
  .heading {
    font-size: 50px !important;
    line-height: 50px !important;
  }

  .paragraphWrapper {
    width: 450px;
  }

  .nftInfoPanel {
    position: absolute;
    left: 0;
    top: 60px;

    .infoBoxSquared.infoBox {
      padding: 10px;
      width: 192px;
      font-size: 14px;
    }
    .infoBox.infoBoxSec {
      width: 266px;
      left: -23px;
    }
  }
  .nftImage {
    min-width: 420px !important;
    max-width: 400px !important;
    margin-left: auto;
  }
  .sec5Img {
    min-width: 420px !important;
    max-width: 420px !important;
    height: 420px;
    margin-left: auto;
    margin-right: auto;
  }
  img.sec7Img {
    min-width: 300px;
    max-width: 300px;
    left: 0;
  }
  .sec5Nfts .sec5Avatar {
    width: 200px;
    height: 200px;
    left: 10px;
    top: 245px;
    &:nth-last-child(1) {
      right: 10px;
    }
  }
}

@media (max-width: 1024px) {
  .heading {
    font-size: 45px !important;
    line-height: 45px !important;
  }

  .paragraphWrapper {
    width: 350px;
  }

  .nftInfoPanel {
    left: -93px;
    top: 70px;
    .infoBoxSquared.infoBox {
      width: 165px;
      font-size: 14px;
    }
    .infoBox.infoBoxSec {
      padding: 20px;
      width: 230px;
      left: -23px;
    }
  }
  .nftImage {
    min-width: 420px !important;
    max-width: 400px !important;
  }
  .sec5Img {
    min-width: 420px !important;
    max-width: 420px !important;
    height: 420px;
  }

  .sec5Nfts .sec5Avatar {
    width: 150px;
    height: 150px;
    &:nth-last-child(1) {
      right: 10px;
    }
    &:nth-child(2) {
      top: 55px;
    }
  }

  img.sec7Img {
    left: 20px;
    &:nth-child(3) {
      right: 20px;
    }
  }
  .color-bullets {
    bottom: 100px;
  }
}

@media (max-width: 768px) {
  .paragraphWrapper,
  .sec7Para {
    width: 100% !important;
  }

  .heading {
    text-align: center;
    margin-bottom: 30px !important;
  }
  .nftInfoPanel {
    left: 113px;

    .infoBoxSquared.infoBox {
      width: 165px;
      font-size: 14px;
    }
    .infoBox.infoBoxSec {
      padding: 20px;
      width: 230px;
      left: -23px;
    }
  }
  .nftImage {
    min-width: 420px !important;
    max-width: 400px !important;
    margin-right: 50px;
  }
  .sec5Img {
    margin: auto;
  }

  .sec7Nfts {
    min-height: 540px !important;
  }
  .sec5Nfts {
    .sec5Avatar {
      left: 70px;
      &:nth-last-child(1) {
        right: 70px;
      }
      &:nth-child(2) {
        top: 55px;
      }
    }
  }

  .tableView {
    width: 100%;
  }

  .sec6Img {
    margin: auto;
  }

  img.sec7Img {
    left: 20px;
    &:nth-child(3) {
      right: 20px;
    }
  }
  .color-bullets {
    bottom: 100px;
  }
}
</style>
