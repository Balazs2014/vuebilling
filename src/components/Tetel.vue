<template>
    <tr>
        <td v-for="tetel in tetel" :key="tetel">{{ tetel }}</td>
        <td><button @click="torol">X</button><button>Edit</button></td>
    </tr>
</template>

<script>
export default {
    props: ["tetel"],
    methods: {
        torol(){
            this.$emit("torol", this.sor.title)
        }
    }
}
</script>