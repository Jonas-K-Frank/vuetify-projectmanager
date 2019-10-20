<template>
    <nav>
        
        <v-toolbar dark color="deep-purple">
           <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>

                <span class="font-weight-light">Project</span>
                <span>Management</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn depressed color="deep-purple">
               <span>Log ud</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
            
        </v-toolbar>

        <v-navigation-drawer app v-model="drawer" class="deep-purple lighten-2" >
            <v-icon dark right class="white--text" @click="drawer = !drawer">close</v-icon>
         
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
export default {
    data (){
        return {
            drawer: false,
            links: [
                { icon: 'dashboard', text: 'Dashboard', route: '/'},
                { icon: 'folder', text: 'My Projects', route: '/projects'},
                { icon: 'person', text: 'Team', route: '/team'},
            ]
        }
    }
}
</script>