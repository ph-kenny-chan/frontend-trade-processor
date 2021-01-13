<template>

      <b-card bg-variant="light" header="Transaction Summary" class="text-center">
        <b-table-simple responsive borderless>
          <b-thead>
            <b-tr>
              <b-th sticky-column>Total Transaction(s)</b-th>
              <b-th sticky-column>Country of Origin</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td><h5>{{data.totalTransaction}}</h5></b-td>
              <b-td>{{data.originDistribution}}</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-card>
  
  
</template>

<script>

import axios from "axios";
import moment from 'moment';

export default {
  name: 'TransactionTable',
  data () {
    return {
      data:[]
    }
  },
  mounted () {
      axios
        .get('http://localhost:7000/v1/demo/getSummary')
        .then(response => {
          this.data = response.data.data;
          this.data.originDistribution=
          this.data.originDistribution.substring(1,this.data.originDistribution.length-1);

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
</style>
