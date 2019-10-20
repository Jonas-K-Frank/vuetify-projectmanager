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

        <v-navigation-drawer app v-model="drawer" class="primary" >
            <p class="error">Punkt nummer 1</p>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data (){
        return {
            drawer: false
        }
    }
}
</script>