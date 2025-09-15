<template>
<div class="quiz">
<div v-for="(q, qi) in qs" :key="q.id ?? qi" class="question">
<fieldset :disabled="submitted">
<legend class="prompt">{{ qi + 1 }}. {{ q.prompt }}</legend>
<div class="options">
<label v-for="(opt, oi) in q.options" :key="oi" class="option">
<input
:type="'radio'"
:name="'q' + (q.id ?? qi)"
:value="oi"
v-model="answers[qi]"
/>
<span>{{ opt.text }}</span>
</label>
</div>
</fieldset>

<div v-if="submitted" class="feedback" role="status" aria-live="polite">
<span v-if="isCorrect(qi)" class="correct">Correct</span>
<span v-else class="incorrect">Incorrect</span>
<div v-if="!isCorrect(qi) && q.explanation" class="explanation">
{{ q.explanation }}
</div>
</div>

<hr />
</div>

<div class="controls">
<button @click="submit" v-if="!submitted" class="btn">Check answers</button>
<div v-else class="score">
Score: {{ score }} / {{ qs.length }}
<button @click="reset" class="btn secondary">Try again</button>
</div>
</div>
</div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

const props = defineProps({
questions: {
type: Array,
required: true
},
shuffle: {
type: Boolean,
default: true
}
})

function shuffled(arr) {
const a = arr.slice()
for (let i = a.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1))
;[a[i], a[j]] = [a[j], a[i]]
}
return a
}

const qs = computed(() =>
(props.shuffle ? shuffled(props.questions) : props.questions).map(q => {
const opts = q.options.map(o => ({ text: o.text, correct: !!o.correct }))
</style>
