<template>

    <div class="container-lg">
      {{msg}}
      <b-table striped hover :items="data"></b-table>
    </div>
  
  
</template>

<script>

import axios from "axios";

export default {
  name: 'TransactionTable',
  data () {
    return {
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
