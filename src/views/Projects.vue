<template>
  <div class="project">
<h1 class="subheading grey--text"> My projects</h1>
<v-container class="my-5">
  <v-expansion-panels>
    <v-expansion-panel v-for="project in myProjects" :key="project.title">
      <v-expansion-panel-header class="title grey--text text--darken-2">{{ project.title }}</v-expansion-panel-header>
      <v-expansion-panel-content class="px-4 grey--text">
        <div class="font-weight-bold">Due by {{ project.due }}</div>
        {{ project.content }}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

</v-container>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
data() {
  return {
          projects: [
        { title: 'Design a new website', person: 'Jonas Frank', due: '1st Jan 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Jonas Frank', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
  }
},
computed: {
  myProjects(){
    return this.projects.filter(project => {
      return project.person === 'Jonas Frank'
    })
  }
}
}
</script>
