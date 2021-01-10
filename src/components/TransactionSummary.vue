<template>

    <b-container fluid class="latest-transaction">
      <b-card bg-variant="light" header="Transaction Summary" class="text-center">
        Coming Soon!
      </b-card>
    </b-container>
  
  
</template>

<script>

import axios from "axios";
import moment from 'moment';

export default {
  name: 'TransactionTable',
  data () {
    return {
      fields: [
          {
            key: 'userId',
            label: 'User ID'
          },
          {
            key: 'currencyFrom',
            label: 'Currency From'
          },
          {
            key: 'currencyTo',
            label: 'Currency To'
          },
          {
            key: 'amountSell',
            label: 'Amount Sell'
          },
          {
            key: 'amountBuy',
            label: 'Amount Buy'
          },
          {
            key: 'rate',
            label: 'Rate'
          },
          {
            key: 'timePlaced',
            label: 'Transaction Time',
            formatter: (value, key, item) => {
              return moment(value).format('YYYY-MM-DD HH:mm:ss ZZ');;
            }
          },
          {
            key: 'originatingCountry',
            label: 'Origin Country'
          }
        ],
      data:null
    }
  },
  mounted () {
      axios
        .get('http://localhost:7000/v1/demo/getTx')
        .then(response => (
          this.data = response.data.data
          ))
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
