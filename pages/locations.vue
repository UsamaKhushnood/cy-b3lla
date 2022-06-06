<template>
  <div class="locations">
    <v-container class="mt-10">
      <h1 class="pb-3 locations-heading border-bottom">
        11,111 EXCLUSIVE NFTS <br />
        10 LOCATIONS X 1,111 NFTS
      </h1>

      <div class="loaction-data-table mt-5">
        <v-data-table
          dense
          :headers="headers"
          :items="items"
          hide-default-footer
        >
          <template #item.sr="{ index }">
            {{ index + 1 }}
          </template>
          <template #item.action>
            <v-btn block tile color="black" class="white--text">DISCOVER</v-btn>
          </template>
        </v-data-table>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: ' ',
          align: 'center',
          filterable: false,
          sortable: false,
          value: 'sr',
        },
        {
          text: 'LOCATION',
          align: 'start',
          filterable: false,
          sortable: false,
          value: 'location',
        },
        {
          text: 'DATE',
          align: 'start',
          filterable: false,
          sortable: false,
          value: 'date',
        },
        {
          text: 'TIME',
          align: 'start',
          filterable: false,
          sortable: false,
          value: 'time',
        },
        {
          text: 'EDITION',
          align: 'start',
          filterable: false,
          sortable: false,
          value: 'edition',
        },
        {
          text: 'STATUS',
          align: 'start',
          filterable: false,
          sortable: false,
          value: 'status',
        },
        {
          text: ' ',
          align: 'end px-0',
          filterable: false,
          sortable: false,
          value: 'action',
        },
      ],
      items: [
        {
          location: 'Tokyo',
          date: '20/JUN/2022',
          time: '11:11',
          edition: '1,111',
          status: 'ANNOUNCED / WAITING FOR REVEAL',
          action: 'DISCOVER',
        },
        {
          location: '0X92CVAB72BXS/10',
          date: 'XX/XXX/XXX',
          time: '00:00',
          edition: '0',
          status: 'WAITING FOR REVEAL',
          action: 'DISCOVER',
        },
        {
          location: '0X92CVAB72BXS/10',
          date: 'XX/XXX/XXX',
          time: '00:00',
          edition: '0',
          status: 'WAITING FOR REVEAL',
          action: 'DISCOVER',
        },
        {
          location: '0X92CVAB72BXS/10',
          date: 'XX/XXX/XXX',
          time: '00:00',
          edition: '0',
          status: 'WAITING FOR REVEAL',
          action: 'DISCOVER',
        },
        {
          location: '0X92CVAB72BXS/10',
          date: 'XX/XXX/XXX',
          time: '00:00',
          edition: '0',
          status: 'WAITING FOR REVEAL',
          action: 'DISCOVER',
        },
        {
          location: '0X92CVAB72BXS/10',
          date: 'XX/XXX/XXX',
          time: '00:00',
          edition: '0',
          status: 'WAITING FOR REVEAL',
          action: 'DISCOVER',
        },
        {
          location: '0X92CVAB72BXS/10',
          date: 'XX/XXX/XXX',
          time: '00:00',
          edition: '0',
          status: 'WAITING FOR REVEAL',
          action: 'DISCOVER',
        },
        {
          location: '0X92CVAB72BXS/10',
          date: 'XX/XXX/XXX',
          time: '00:00',
          edition: '0',
          status: 'WAITING FOR REVEAL',
          action: 'DISCOVER',
        },
        {
          location: '0X92CVAB72BXS/10',
          date: 'XX/XXX/XXX',
          time: '00:00',
          edition: '0',
          status: 'WAITING FOR REVEAL',
          action: 'DISCOVER',
        },
        {
          location: '0X92CVAB72BXS/10',
          date: 'XX/XXX/XXX',
          time: '00:00',
          edition: '0',
          status: 'WAITING FOR REVEAL',
          action: 'DISCOVER',
        },
        {
          location: '0X92CVAB72BXS/10',
          date: 'XX/XXX/XXX',
          time: '00:00',
          edition: '0',
          status: 'WAITING FOR REVEAL',
          action: 'DISCOVER',
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.locations-heading {
  border-bottom: 1px solid black;
  line-height: 35px;
}

.loaction-data-table table {
  tr {
    &.revealed td {
      background: #ffaaaa;
    }
    &:nth-child(1) td {
      background: #ffaaaa;
    }
    &:hover td {
      background: #ffaaaa;
    }
  }
  th span {
    font-size: 16px;
    color: #000;
  }
  thead > tr:last-child > th {
    border: 0 !important;
  }
  border-spacing: 5px 5px !important;
  td {
    background: #f4f4f4;
    border: 0 !important;
    font-size: 16px !important;
    color: #000;
  }
}
</style>
