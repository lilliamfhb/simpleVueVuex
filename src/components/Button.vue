<template>
<button type="button" class="c-button" @click="onClick">
    {{title}}
</button>
</template>

<script>

export default {
  name: 'ButtonComp',
  props: {
    msg: String,
    title: String,
    onClick: {
      type: Function,
      required: true
    },
  },
}
</script>
