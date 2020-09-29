<template>
  <q-page class="flex flex-center">
    <h1>Hello Quasar</h1>
    <button v-on:click="sendData">Greet</button> <br>
  </q-page>
</template>

<script>
import Vue from 'vue'
// import { runQuery } from '../helpers/sqlHelper.js'
// const runQuery = ''
import { sql } from 'mssql/msnodesqlv8'

export default {
  name: 'PageIndex',
  data() {
    return {
      config: "test",
      user: ""
    }
  },
  methods: {
    csvData: function () {
      // csvContent.on('error', error => console.error(error))
      //   .on('data', row => console.log(row))
      //   .on('end', (rowCount) => console.log(`Parsed ${rowCount} rows`));
    },
    sendData: function () {
      (async () => {
        this.user = await runQuery('select * from dbo.csvProduct')
      })()
    }
  }
}
</script>
