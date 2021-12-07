<template>
  <div id="app">
    <Raktar 
    :tetelek="rows"
    @add="add" 
    @deletef="deletef"/>
  </div>
</template>
<script>

import Raktar from './components/Raktar.vue'

export default {
  name: 'App',
  components: {
    Raktar
  },
  data() {
    return {
      rows: [
        {
          title: 'Kerék',
          price: 100,
          quantity: 12
        },
        {
          title: 'Teleszkóp',
          price: 1000,
          quantity: 300
        },
        {
          title: 'Kormány',
          price: 230,
          quantity: 5
        },
        {
          title: 'Ajtó',
          price: 45120,
          quantity: 321
        },
      ]
    }
  },
  methods: {
    add(e){
        this.rows.push({ 
          title: e.title,
          price: e.price,
          quantity: e.quantity 
        })
    },
    deletef(e){
      this.rows.splice(this.rows.indexOf(e.original), 1);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
