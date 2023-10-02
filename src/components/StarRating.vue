<template>
    <div>
        <v-icon v-for="index in 5" :key="index" :class="{ 'yellow--text': index <= rating }" @click="setRating(index)">
            mdi-star
        </v-icon>
    </div>
</template>
  
<script>
export default {
    props: {
        value: Number,
    },

    data() {
        return {
            rating: this.value,
        };
    },
    methods: {
        setRating(rating) {

            this.rating = rating;
            this.$emit('input', rating);
        },
    },
};
</script>
  

<style scoped>

.yellow--text {
    color: #FFD700;
    font-size: 24px;
    margin-right: 5px;
   
}


.v-icon:not(.yellow--text) {
    color: #ccc;
    font-size: 24px;
    margin-right: 5px;
}
</style>


  