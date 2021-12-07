<template>
<div>
  <table v-if="!edit">
      <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Operations</th>
          <th>Összérték</th>
      </tr>
      <tr v-for="tetel in rows"
        v-bind:key="tetel.title"
        @sor-item-changed="Changed">
        <td>{{ tetel.title }}</td>
        <td>{{ tetel.price }}</td>
        <td>{{ tetel.quantity }}</td>
        <td>
          <button @click="Delete">X</button>
          <button @click="Edit">Edit</button>
        </td>
        <td>{{ tetel.price * tetel.quantity }}</td>
      </tr>
      <tr>
        <td><input type="text"></td>
        <td><input type="number"></td>
        <td><input type="number"></td>
        <button>Hozzáad</button>
      </tr>
  </table>
  <div v-if="edit">
    <input type="text" v-model="title">
    <input type="number" v-model="price">
    <input type="number" v-model="quantity">
    <button @click="Save">Save</button>
  </div>
</div>
</template>
<script>


export default {
  name: 'App',
  data() {
    return {
      edit: false,
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
  },  methods: {
        Changed(e) {
            this.$emit('sor-item-changed', e)
        },
        Edit() {
            this.edit = true
        },
        Save() {
            this.edit = false
            this.$emit('sor-item-changed', {
                original: {
                    title: this.title,
                    price: this.price,
                    quantity: this.quantity
                    },
                new: {
                    title: this.title,
                    price: this.price,
                    quantity: this.quantity
                    },
            })
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
