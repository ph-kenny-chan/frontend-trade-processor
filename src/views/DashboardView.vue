<template>
    <b-container fluid="xl" class="dashboard">
      <b-row>
          <b-col><TransactionSummary /></b-col>
      </b-row>
      <b-row>
          <b-col><TransactionTable /></b-col>
          <b-col><LatestTransaction /></b-col>
      </b-row>
    </b-container>
</template>

<script>
// @ is an alias to /src
import TransactionTable from '@/components/TransactionTable.vue'
import LatestTransaction from '@/components/LatestTransaction.vue'
import TransactionSummary from '@/components/TransactionSummary.vue'

export default {
  name: 'dashboard',
  components: {
    TransactionTable,
    LatestTransaction,
    TransactionSummary
  }
}
</script>
