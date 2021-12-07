<template>
  <div>
      <table>
          <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Operations</th>
              <th>Összérték</th>
          </tr>
          <Tetel v-for="tetel in tetelek"
          :key="tetel.title"
          :tetel="tetel"
          @deletef="deletef"/>
          <tr>
              <td><input type="text" v-model="title"></td>
              <td><input type="number" v-model="price"></td>
              <td><input type="number" v-model="quantity"></td>
              <td><button @click="add">Hozzáad</button></td>
          </tr>
      </table>
  </div>
</template>

<script>
import Tetel from "./Tetel.vue"
export default {
    props: ["tetelek"],
    components:{
        Tetel
    },
    data() {
        return {
            title: null,
            price: null,
            quantity: null
        }
    },
    methods: {
        add(){
            this.$emit("add", { title: this.title, price: this.price, quantity: this.quantity})
            this.title = null
            this.price = null
            this.quantity = null
        },
        deletef(e){
            this.$emit("deletef", e)
        }
    }
}
</script>