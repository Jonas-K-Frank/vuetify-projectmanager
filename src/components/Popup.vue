<template>
  <v-dialog v-model="dialog" max-width="600px" transition="dialog-transition">
      <template v-slot:activator="{ on }">
    <v-btn color="success" dark v-on="on">Create a new project</v-btn>
      </template>
    <v-card>
      <v-card-title>
        <span class="title primary--text font-weight-bold"> Create a new project</span>
      </v-card-title>
      <v-card-text>
          <v-form class="px-3" ref="form">
              <v-text-field label="Project name" v-model="name" prepend-icon="folder" :rules="inputRules"></v-text-field>  
              <v-textarea label="Project information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>

  <v-menu max-width="290">
    <template v-slot:activator="{ on }">
        <v-text-field :value="formattedDate" label="Due date" prepend-icon="mdi-calendar-range" v-on="on" :rules="inputRules"></v-text-field>
    </template>
        <v-date-picker v-model="due"></v-date-picker>
  </v-menu> 

              <v-btn depressed color="primary" @click="submit">Add project</v-btn>
          </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import db from '@/fb'
export default {
  name: 'Popup',
  data() {
   return {
    title: '',
    content: '',
    due: null,
    inputRules: [
      value => value.length >= 3 || 'You must use at least 3 characters'
    ]
   }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()){
        const project = {
          title: this.title,
          content: this.content,
          due: format(this.due, 'd MMMM yyyy'),
          person: 'Jonas Frank',
          status: 'ongoing'
        }

      db.collection('projectmanagement').add(project).then(() => {
          //console.log('added to db')
        })
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), 'd MMMM yyyy') : ''
    },
  }
}
</script>