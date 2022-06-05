<template>
  <div class="activation">
    <v-container class="mt-10 pb-10">
      <v-row align="center" justify="center">
        <v-col cols="12" md="4" sm="12">
          <h1 class="heading">ACTIVATION</h1>
        </v-col>
        <v-col cols="12" md="8" sm="12" class="d-flex justify-end">
          <div class="ticket">
            <div class="sidebar">
              <h4>C-B boarding pass</h4>
            </div>
            <div class="ticket-truncate">
              <div class="ticket-body">
                <div>
                  <v-row>
                    <v-col cols="12">
                      <p>Flight no: CB 2k22</p>
                    </v-col>
                    <v-col cols="12" md="8">
                      <div class="inputField">
                        <div class="label">GATE:</div>
                        <h2 class="input">11</h2>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4">
                      <div class="inputField">
                        <div class="label">SEAT:</div>
                        <h2 class="input">1 C</h2>
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <div class="inputField">
                        <div class="label">DEPARTURE time:</div>
                        <h2 class="input">1:11 PM</h2>
                        <h2>JUN.01.2022</h2>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="ticket-details">
                      <p class="mb-0">Name: BELLA HADID</p>
                      <p class="mb-0">FROM: NYC</p>
                      <p class="mb-0">To: TOKYO</p>
                      <p class="mb-0">class: EXcLUSIVE</p>
                      <p class="mb-0">sequence no: 11,111</p>
                    </v-col>
                  </v-row>
                  <img
                    class="qrocdeImg"
                    src="@/assets/images/activation/qrCode.png"
                  />
                </div>
              </div>
            </div>
            <div class="ticket-truncate">
              <v-row>
                <v-col cols="12" md="8">
                  <p>Flight no: CB 2k22</p>
                  <div class="inputField">
                    <div class="label">SEAT:</div>
                    <h2 class="input">1 C</h2>
                  </div>
                </v-col>
                <v-col cols="12" md="4">
                  <img src="@/assets/images/activation/gb.png" />
                </v-col>
                <v-col cols="12" md="8">
                  <div class="inputField">
                    <div class="label">DEPARTURE time:</div>
                    <h2 class="input">1:11 PM</h2>
                    <h3 class="mt-6">
                      <sup>RE</sup>B 4 S 3
                      <sup>&copy; 2022</sup>
                    </h3>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-10">
        <v-col cols="12" md="3" sm="12" class="mt-10 mt-md-0">
          <div class="activation-card">
            <div class="color-gradient aRed"></div>
            <h1 class="activationSerial">01.</h1>
            <p class="activationDescription">
              Access to the Private Members Club: Exclusive gatherings and
              events will be held with Bella Hadid and other exclusive pass
              holders in physical locations all over the world.
            </p>
            <p>
              Community driven CY:B3LLA Mission Grants. Rewarding active holders
              of the collection.
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="3" sm="12" class="mt-10 mt-md-0">
          <div class="activation-card">
            <div class="color-gradient aYellow"></div>
            <h1 class="activationSerial">02.</h1>
            <p class="activationDescription">
              CY-B3LLA will allow holders to experience highly exclusive legacy
              brand collaborations with Bella Hadid.
            </p>
            <p>
              Once in a lifetime private events, organized for Cy-B3LLA Holders.
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="3" sm="12" class="mt-10 mt-md-0">
          <div class="activation-card">
            <div class="color-gradient aPurple"></div>
            <h1 class="activationSerial">03.</h1>
            <h1 class="activationDescription">
              Exclusive CY-B3LLA DAO Brand Creation.
            </h1>
          </div>
        </v-col>
        <v-col cols="12" md="3" sm="12" class="mt-10 mt-md-0">
          <div class="activation-card">
            <div class="color-gradient aBlue"></div>
            <h1 class="activationSerial">04.</h1>
            <p class="activationDescription">
              Entry pass to global treasure hunts with Bella Hadid in reBASE
              App.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss">
.ticket {
  display: flex;
  width: 800px;
  position: relative;
  .sidebar {
    background: #000;
    color: #fff;
    position: absolute;
    left: -152px;
    top: 120px;
    width: 272px;
    transform: rotate(270deg);
    text-align: center;
    padding: 4px;
  }
  .ticket-truncate {
    position: relative;
    border: 1px solid #000;
    padding: 10px;
    max-height: 328px;
    &:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 30px;
      background: #ffff;
      right: -7px;
      bottom: -12px;
      border: 1px solid black;
      transform: rotate(45deg);
      border-right: 0;
      border-bottom: 0;
      border-top: 0;
    }
    &:nth-child(1) {
      border-right: 0;
    }
  }
  h2.input {
    border-bottom: 3px solid black;
  }
}

.ticket-details p {
  font-size: 12px;
}

img.qrocdeImg {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 70px;
}

.activation-card {
  position: relative;
  padding: 20px;
  &:after {
    position: absolute;
    content: '';
    width: 2px;
    height: 240px;
    background: #000;
    top: 40px;
    left: 0;
  }
  h1.activationSerial {
    font-size: 50px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      min-width: 235px;
      height: 2px;
      background: #000;
      bottom: 0;
      left: -18px;
    }
    &:after {
      content: '';
      position: absolute;
      width: 2px;
      height: 53px;
      background: #000;
      top: 20px;
      left: 200px;
    }
  }
  .activationDescription {
    padding-top: 15px;
  }

  .color-gradient {
    background: rgb(251, 251, 251);
    position: absolute;
    left: 0;
    width: 220px;
    height: 45px;
    top: 50px;
    &.aYellow {
      background: linear-gradient(
        180deg,
        rgba(251, 251, 251, 1) 0%,
        rgba(255, 255, 255, 1) 15%,
        rgba(255, 226, 129, 1) 100%
      );
    }
    &.aRed {
      background: linear-gradient(
        180deg,
        rgba(251, 251, 251, 1) 0%,
        rgba(255, 255, 255, 1) 15%,
        rgba(255, 129, 129, 1) 100%
      );
    }
    &.aPurple {
      background: linear-gradient(
        180deg,
        rgba(251, 251, 251, 1) 0%,
        rgba(255, 255, 255, 1) 15%,
        rgba(177, 129, 255, 1) 100%
      );
    }
    &.aBlue {
      background: linear-gradient(
        180deg,
        rgba(251, 251, 251, 1) 0%,
        rgba(255, 255, 255, 1) 15%,
        rgba(114, 163, 255, 1) 100%
      );
    }
  }
}

@media screen and (max-width: 1336px) {
  .ticket-details {
    p {
      white-space: nowrap;
      font-size: 15px;
    }
  }
}
</style>
