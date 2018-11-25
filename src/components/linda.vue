<template>
  <div class="md-layout">
    <md-field :class="messageClass">
      <label>Enter Your Body Weight</label>
      <md-input 
        autofocus
        id="weight"
        v-model="userWeight"
        type="number"
        required
        @change="calculate">
      </md-input>
      <span class="md-error">{{ errorMessage }}</span>
    </md-field>
    <md-table>
      <md-table-row >
        <md-table-cell><span class="md-subheading">Deadlift</span></md-table-cell>
        <md-table-cell md-numeric><span class="md-subheading">{{deadlift}}</span></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell><span class="md-subheading">Bench Press</span></md-table-cell>
        <md-table-cell md-numeric><span class="md-subheading">{{benchPress}}</span></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell><span class="md-subheading">Clean</span></md-table-cell>
        <md-table-cell md-numeric><span class="md-subheading">{{clean}}</span></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'linda',
  data: () => {
    return {
      userWeight: '',
      deadlift: 0,
      benchPress: 0,
      clean: 0,
      hasErrors: false,
      errorMessage: ''
    }
  },
  methods: {
    calculate: function(){
      if ( this.userWeight.length > 0 ){
        if (this.userWeight > 0 ){
          this.hasErrors = false;
          this.deadlift = parseInt(this.userWeight) * 1.75
          this.benchPress = parseInt(this.userWeight) * 1
          this.clean = parseInt(this.userWeight) * .75
        }
        else {
          this.errorMessage = "Must be > 0"
          this.hasErrors = true;
        }
      }
      else {
        this.errorMessage = "Required"
        this.hasErrors = true;
      }

      if (this.hasErrors){
        this.deadlift = 0
        this.benchPress = 0
        this.clean = 0
      }
    }
  },
  computed: {
    messageClass () {
      return {
        'md-invalid': this.hasErrors
      }
    }
  }
}
</script>

