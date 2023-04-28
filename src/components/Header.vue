<template>
    <div class="c-header">
        <h1>Header</h1>
        <div>
            variable: <strong>{{count}}</strong>
        </div>
    </div>
</template>

<script>
// mapState permite mapear propiedades del estado del store a propiedades computadas del componente Vue
import { mapState } from 'vuex';


export default {
  name: 'Home-comp',
  props: {
    msg: String
  },
  computed: {
    // llamando a la propiedad count del store 
    ...mapState(['count'])
  },
  mounted() {
  }
}
</script>
