<template>
  <div class="container">
    <TransactionTable msg="CurrencyFair Demo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TransactionTable from '@/components/TransactionTable.vue'

export default {
  name: 'dashboard',
  components: {
    TransactionTable
  }
}
</script>
