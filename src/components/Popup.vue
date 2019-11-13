<template>
  <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
    <v-btn color="success" dark v-on="on">Create a new project</v-btn>
      </template>
    <v-card>
      <v-card-title>
        <span class="title primary--text font-weight-bold"> Create a new project</span>
      </v-card-title>
      <v-card-text>
          <v-form class="px-3">
              <v-text-field label="Project name" v-model="name" prepend-icon="folder"></v-text-field>  
              <v-textarea label="Project information" v-model="content" prepend-icon="edit"></v-textarea>
              <v-btn depressed color="primary" @click="submit">Add project</v-btn>
          </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
        name: '',
        content: ''
    }
  },
  methods: {
      submit() {
          
      }
  }
}
</script>