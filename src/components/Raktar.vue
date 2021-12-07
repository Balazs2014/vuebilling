<template>
  <table>
        <RaktarTetel
        v-for="t in tetel"
        v-bind:key="t.title"
        :tetel="t"/>
  </table>
</template>

<script>
import RaktarTetel from './RaktarTetel.vue'
export default {
    props: ['tetel'],
    components: {RaktarTetel},
}
</script>