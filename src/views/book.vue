<template>
  <div id="book">
    <v-container>
      <v-layout>
        <v-flex>
          <v-card>
            <v-card-title>{{findBook.name}}</v-card-title>
            <v-img :src="findBook.url"></v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
export default {
    props:{
      'id':{
        type: String,
        required: true
      }
    },
    computed:{
      findBook(){
        return this.$store.getters.GetBooks.find(b => b.id == this.id)
      }
    },
    methods:{
        
    
    }
}
</script>

<style>

</style>