<script setup>
defineProps({
  blocks: { type: Array, required: true },
})
</script>

<template>
  <template v-for="(block, index) in blocks" :key="index">
    <p v-if="block.p">{{ block.p }}</p>
    <ul v-else-if="block.ul">
      <li v-for="item in block.ul" :key="item">{{ item }}</li>
    </ul>
    <ol v-else-if="block.ol">
      <li v-for="item in block.ol" :key="item">{{ item }}</li>
    </ol>
    <div v-else-if="block.table" class="table-wrap">
      <table>
        <caption v-if="block.table.caption">{{ block.table.caption }}</caption>
        <thead>
          <tr>
            <th v-for="cell in block.table.head" :key="cell" scope="col">{{ cell }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in block.table.rows" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else-if="block.note" class="note">{{ block.note }}</p>
  </template>
</template>
