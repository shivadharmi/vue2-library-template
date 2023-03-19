<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageComponent",
  props: {
    msg: {
      type: String,
      default: "Hello",
    },
  },
});
</script>
