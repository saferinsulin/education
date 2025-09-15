<script setup>
import { ref } from "vue"

const stage = ref("intro")
const currentQuestion = ref(0)
const openAnswer = ref(null)
const answeredCorrectly = ref(false)

// ... your questions + functions here ...
</script>

<template>
  <!-- Intro Section -->
  <div v-if="stage === 'intro'">
    <h1>Welcome to the Quiz 🎓</h1>
    <!-- ... rest of the quiz markup ... -->
  </div>
</template>
