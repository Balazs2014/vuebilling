<template>
    <tr>
        <td v-for="tetel in tetel" :key="tetel">{{ tetel }}</td>
        <td><button @click="deletef">X</button><button>Edit</button></td>
        <td>{{tetel.quantity*tetel.price}}</td>
    </tr>
</template>

<script>
export default {
    props: ["tetel"],
    methods: {
        deletef(){
            this.$emit("deletef", this.sor.title)
        }
    }
}
</script>