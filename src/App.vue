<template>
  <table>
      <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
      </tr>
      <tr v-for="tetel in rows"
        v-bind:key="tetel.title">
        <td>{{ tetel.title }}</td>
        <td>{{ tetel.price }}</td>
        <td>{{ tetel.quantity }}</td>
      </tr>
  </table>
</template>
<script>


export default {
  name: 'App',
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
