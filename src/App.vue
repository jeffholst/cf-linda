<template>
  <div id="app">
    <md-toolbar class="md-primary">
      <h3 class="md-title" style="flex: 1">CF Linda</h3>
      <md-button @click="showAbout = true">About</md-button>
    </md-toolbar>
    <md-dialog :md-active.sync="showAbout">
      <md-dialog-title>CF Linda</md-dialog-title>
      <div class="container">
        <a href="http://www.jeffholst.net" target="_blank"><img alt="Logo" src="./assets/jd-vue-logo.png" style="display: block; margin-left: auto; margin-right: auto;"></a>
        <p>Built at <a href="http://www.jeffholst.net" target="_blank">Jeff's DŌJŌ</a> using <a href="https://vuejs.org/" target="_blank">Vue.js</a> and styled with <a href="https://vuematerial.io/" target="_blank">Material Design</a>.
        <br><br><a href="https://github.com/jeffholst/cf-linda/blob/master/LICENSE" target="_blank">MIT License</a> Copyright (c) 2018 <a href="http://www.jeffholst.net/" target="_blank">Jeff Holst</a></p>
        <p><a href= "https://www.crossfit.com/workout/2003/07/05#/comments" target="_blank">CrossFit Linda Reference</a></p>
      </div>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showAbout = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
    <div class="container">
      <linda/>
      <br>
      <md-card>
        <md-card-header>
          <div class="md-title">"Linda"</div>
        </md-card-header>
        <md-card-content>
          <p>10-9-8-7-6-5-4-3-2-1 reps of the triplet for time:</p>

          Deadlift: 1 1/2 body weight<br>
          Bench press: body weight<br>
          Clean: 3/4 body weight<br>
        </md-card-content>
      </md-card>

    </div>
  </div>
</template>

<script>
import linda from './components/linda.vue'

export default {
  name: 'app',
  components: {
    linda
  },
  data: () => ({
      showAbout: false
    })
}
</script>

<style>

.container {
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
}

</style>