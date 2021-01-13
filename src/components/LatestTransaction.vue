<template>

      <b-card bg-variant="light" header="Latest Transaction" class="text-center">
          <table width="100%">
            <tr class="left">
              <td>User ID</td>
              <td>{{data.userId}}</td>
            </tr>
            <tr class="left">
              <td>Amount Sell</td>
              <td>{{data.currencyFrom}}&nbsp;{{data.amountSell}}</td>
            </tr>
            <tr class="left">
              <td>Amount Buy</td>
              <td>{{data.currencyTo}}&nbsp;{{data.amountBuy}}</td>
            </tr>
            <tr class="left">
              <td>{{data.currencyFrom}} / {{data.currencyTo}}</td>
              <td>{{data.rate}}</td>
            </tr>
            <tr class="left">
              <td>Transaction Time</td>
              <td>{{data.timePlaced}}</td>
            </tr>
            <tr class="left">
              <td>Origin Country</td>
              <td>{{data.originatingCountry}}</td>
            </tr>
          </table>

      </b-card>
  
  
</template>

<script>

import axios from "axios";
import moment from 'moment';

export default {
  data () {
    return {
      data:[]
    }
  },
  mounted () {
      axios
        .get('http://localhost:7000/v1/demo/getLatestTx')
        .then(response => {
          this.data = response.data.data;
          this.data.timePlaced = moment(this.data.timePlaced).format('YYYY-MM-DD HH:mm:ss ZZ')
        })
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

.left{
  text-align: left;
}

</style>
