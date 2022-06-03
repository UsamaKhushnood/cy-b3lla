<template>
  <div class="locations">
    <v-container class="mt-10">
      <h1 class="pb-3 locations-heading border-bottom">
        11,111 EXCLUSIVE NFTS <br />
        10 LOCATIONS X 1,111 NFTS
      </h1>

      <table class="locations-table mt-5">
        <tr>
          <th></th>
          <th>LOCATION</th>
          <th>DATE</th>
          <th>TIME</th>
          <th>EDITION</th>
          <th>STATUS</th>
          <th></th>
        </tr>
        <tr v-for="i in 10" :key="i" :class="[i == 1 ? 'revealed' : '']">
          <td class="text-center">{{ i }}</td>
          <td>TOKYO</td>
          <td>20/JUN/2022</td>
          <td>11:11</td>
          <td>1,111</td>
          <td v-if="i == 1">ANNOUNCED / WAITING FOR REVEAL</td>
          <td v-else>WAITING FOR REVEAL</td>
          <td class="text-right button">
            <v-btn color="black" tile class="px-5 white--text">DISCOVER</v-btn>
          </td>
        </tr>
      </table>
    </v-container>
  </div>
</template>
<style lang="scss">
.locations-heading {
  border-bottom: 1px solid black;
  line-height: 35px;
}
.locations-table {
  width: 100%;
  border-spacing: 5px 5px;
  th {
    text-align: left;
  }

  tr {
    td {
      &:not(.button) {
        padding: 0 10px;
        background: #f4f4f4;
      }
      &.button {
        button {
          background: grey !important;
          width: 100%;
        }
      }
    }
    &.revealed {
      td {
        &:not(.button) {
          background: #ffaaaa;
        }
        &.button {
          button {
            background: black !important;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
