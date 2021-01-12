<template>

      <b-card bg-variant="light" header="Currency Market Transaction" class="text-center">
      <b-table id="tx-table" striped hover :items="data" :fields="fields" :per-page="perPage" :current-page="currentPage"
                             :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" responsive="sm">
      </b-table>
      <b-pagination
          v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="tx-table"
        ></b-pagination>
      </b-card>
  
  
</template>

<script>

import axios from "axios";
import moment from 'moment';

export default {
  name: 'TransactionTable',
  data () {
    return {
      perPage: 5,
      currentPage: 1,
      sortBy: 'timePlaced',
      sortDesc: true,
      fields: [
          {
            key: 'userId',
            label: 'User ID',
            sortable: true
          },
          {
            key: 'currencyFrom',
            label: 'Currency From',
            sortable: true
          },
          {
            key: 'currencyTo',
            label: 'Currency To',
            sortable: true
          },
          {
            key: 'amountSell',
            label: 'Amount Sell',
            sortable: true
          },
          {
            key: 'amountBuy',
            label: 'Amount Buy',
            sortable: true
          },
          {
            key: 'rate',
            label: 'Rate',
            sortable: true,
          },
          {
            key: 'timePlaced',
            label: 'Transaction Time',
            sortable: true,
            sortByFormatted: true,
            formatter: (value, key, item) => {
              return moment(value).format('YYYY-MM-DD HH:mm:ss ZZ');
            }
          },
          {
            key: 'originatingCountry',
            label: 'Origin Country',
            sortable: true,
          }
        ],
      data:[]
    }
  },
  mounted () {
      axios
        .get('http://localhost:7000/v1/demo/getTx')
        .then(response => (
          this.data = response.data.data
          ))
  },
  computed: {
      rows() {
        return this.data.length
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
