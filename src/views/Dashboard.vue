<template>
  <div class="dashboard">
<h1 class="subheading grey--text"> Dashboard</h1>

<v-container class="my-5">
<v-layout row class="mb-3 mr-3">

     <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-icon small>folder</v-icon>
         <v-btn text small color="grey" v-on="on" @click="sortBy('title')" slot="activator" class="caption text-lowercase">sort by project</v-btn>
      </template>
      <span>Sort by project</span>
    </v-tooltip>

     <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn text small color="grey" v-on="on" @click="sortBy('person')" slot="activator" class="caption text-lowercase">sort by Person</v-btn>
        <v-icon small left>person</v-icon>
      </template>
      <span>Sort by person name</span>
    </v-tooltip>

</v-layout>
 <v-card flat class="pl-3" v-for="project in projects" :key="project.title">
   <v-layout row wrap :class="`pa-3 project ${project.status}`">
     <v-flex xs12 md6>
        <div class="caption grey--text">Project title</div>
        <div> {{ project.title }}</div>
     </v-flex>
      <v-flex xs6 sm4 md2>
        <div class="caption grey--text">Person</div>
        <div>{{ project.person }}</div>
      </v-flex>
           <v-flex xs6 sm4 md2>
        <div class="caption grey--text">Due date</div>
        <div>{{ project.due }}</div> 
      </v-flex>
           <v-flex xs2 sm4 md2>
        <div>
           <v-chip small :color="`${project.status}`" :class="`v-chip--active white--text caption my-2`">{{ project.status}}</v-chip>
            
           </div>
      </v-flex>
   </v-layout>
   <v-divider></v-divider>
  </v-card>
</v-container>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  data() {
      return {
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>
<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background:  #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>