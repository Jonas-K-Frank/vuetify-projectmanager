<template>
    <nav>
        
        <v-toolbar dark color="primary">
           <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>

                <span class="font-weight-light">Project</span>
                <span>Management</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

<div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          depressed color="primary"
          v-on="on"
        >
        <v-icon left>expand_more</v-icon>
          <span>Menu</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router :to="link.route"
        >
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>

  <!-- Dropdown menu -->


            <v-btn depressed color="primary">
               <span>Log ud</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer app v-model="drawer" class="primary lighten-2" >
            <v-icon dark right class="white--text" @click="drawer = !drawer">close</v-icon>
         
         <v-layout column align-center>
            <v-flex class="mt-5">
              <v-avatar size="100">
                <img src="/avatar-JF.png" alt="Jonas Frank">
              </v-avatar>
            </v-flex>
             <p class="white--text subheading mt-1">Jonas Frank</p>
            <p class="white--text mt-n5">Front-end Developer</p>
            
            <v-flex class="mt-2 mb-5">
          <Popup/>
        </v-flex>
         </v-layout>
           <v-list>
 <v-list-item-group>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router :to="link.route"
        >
          <v-list-item-icon>
            <v-icon class="white--text"> {{ link.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
            
        </v-navigation-drawer>

    </nav>
</template>

<script>
import Popup from './Popup'

export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/' },
        { icon: 'folder', text: 'My Projects', route: '/projects' },
        { icon: 'person', text: 'Team', route: '/team' },
      ]
    }
  }
}
</script>