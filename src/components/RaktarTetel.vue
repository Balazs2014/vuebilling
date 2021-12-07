<template>
  <table>
      <tr>
          <th>{{ title }}</th>
      </tr>
      <tr>
          <td>{{ price }}</td>
      </tr>
      <tr>
          <td>{{ quantity }}</td>
      </tr>
      <tr>
          <td>
              <input type="text">
              <input type="number">
              <input type="number">
          </td>
      </tr>
  </table>
</template>

<script>
export default {
    props: ['tetel'],
    data() {
        return {
            title: this.tetel.title,
            price: this.tetel.price,
            quantity: this.tetel.quantity
        }
    }
}
</script>