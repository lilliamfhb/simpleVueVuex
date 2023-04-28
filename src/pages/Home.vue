<template>
    <div class="c-home">
        <h1>Home</h1>
        <div class="c-var">
            variable: <strong>{{count}}</strong>
        </div>
        <ButtonComp @Click="miFuncionIncrementar()" title="aumentar funcion normal"/>
        <ButtonComp @Click="incrementar()" title="aumentar directament con el action"/>
        <div></div>
        <ButtonComp @Click="changeData(55)" title="cambiar funcion normal " />
        <ButtonComp @Click="cambiarNumero(77)" title="cambiar con el action " />
    </div>
</template>

<script>
// mapACtions permite mapear acciones del store a métodos del componente
// mapState permite mapear propiedades del estado del store a propiedades computadas del componente Vue
import { mapActions, mapState } from 'vuex';

import ButtonComp from '../components/Button.vue'

export default {
    name: 'HomeComp',
    props: {
        msg: String
    },
    computed: {
         // llamando a la propiedad count del store 
        ...mapState(['count'])
    },
    components: {
        ButtonComp,
    },
    methods: {
    // llamando a las acciones creadas en el store 
    ...mapActions(['incrementar', 'changeData']),

    miFuncionIncrementar() {
        this.incrementar()
    },
    cambiarNumero(nuevoNumero) {
        this.changeData(nuevoNumero)
    },
  }
}
</script>
