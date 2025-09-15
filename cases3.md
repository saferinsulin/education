# Quiz Page

<script setup>
import { ref } from "vue"

const stage = ref("intro") // intro | quiz | done
const currentQuestion = ref(0)
const openAnswer = ref(null)
const answeredCorrectly = ref(false)

const questions = [
  {
    text: "You are caring for a 48-year-old female patient who is recovering following a sub arachnoid haemorrhage. She has not yet passed a swallow assessment and remains enterally fed. 
She is known to have type 2 diabetes and normally takes metformin, empagliflozin and Lantus 10 units at home. Since admission she has required insulin to maintain blood glucose between 6-10mmol/l and she has been established on Humulin M3 20 units at start and 8 hours into her feed. She is prescribed a 20 hour feed starting at 2pm.
You check a blood glucose before the start of the feed at 2pm and it is 4.6mmol/l.

What should you do?",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_as_seen_from_the_Tour_Saint-Jacques_2011_03.jpg",
    answers: [
      { text: "Give IV glucose", explanation: "Whilst the blood glucose is below target range and close the hypoglycaemic range, the import question here would be whether it's falling. If the most recent glucose was, for example 9.4mmol/l then this would constitute looming hypoglycaemia. She's not hypo yet but she will be. Correcting glucose at 4.6mmol/l would then be the right thing to do. In this case though this result may just reflect a pre-feed level that is too low and starting feed will likely cause it to rise quickly", correct: false },
      { text: "Hold the insulin and start the feed", explanation: "Not quite", correct: false },
      { text: "Give the insulin and start the feed ✅", explanation: "Correct!", correct: true }
    ]
  },
  {
    text: "Which planet is known as the Red Planet?",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    answers: [
      { text: "Venus", explanation: "Venus is Earth’s twin, not red.", correct: false },
      { text: "Mars ✅", explanation: "Correct! Mars is the Red Planet.", correct: true },
      { text: "Jupiter", explanation: "Too big! Jupiter is the gas giant.", correct: false }
    ]
  }
]

function selectAnswer(i) {
  if (answeredCorrectly.value) return
  openAnswer.value = i
  if (questions[currentQuestion.value].answers[i].correct) {
    answeredCorrectly.value = true
  }
}

function nextQuestion() {
  if (answeredCorrectly.value && currentQuestion.value < questions.length - 1) {
    currentQuestion.value++
    openAnswer.value = null
    answeredCorrectly.value = false
  } else if (answeredCorrectly.value && currentQuestion.value === questions.length - 1) {
    stage.value = "done"
  }
}
</script>

<!-- Intro Section -->
<div v-if="stage === 'intro'" style="text-align:center; padding:2rem;">
  <h1>Welcome to the Quiz 🎓</h1>
  <p style="font-size:1.2rem; margin:1rem 0;">
    In this section we'll work through a typical intensive care case to discuss some of the important questions that come up in regard to insulins in critical care. In this case we'll review the risks and benefits of using different subcutaneous insulins in critically ill patients, how we can use them safely and try to make a complex topic just a little easier to understand. 
  </p>
  <button
    @click="stage = 'quiz'"
    style="padding:0.7rem 1.5rem; font-size:1rem; border-radius:8px; background:#2563eb; color:white; border:none; cursor:pointer;"
  >
    Start Quiz →
  </button>
</div>

<!-- Quiz Section -->
<div v-else-if="stage === 'quiz'">
  <div
    v-for="(q, i) in questions"
    :key="i"
    v-show="i === currentQuestion"
    :style="{
      display: 'flex',
      flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
      gap: '1rem',
      alignItems: 'flex-start',
      marginBottom: '2rem'
    }"
  >
    <!-- Question text + answers -->
    <div style="flex:2;">
      <h2>Q{{ i + 1 }}: {{ q.text }}</h2>

      <ul>
        <li
          v-for="(a, j) in q.answers"
          :key="j"
          style="margin-bottom:0.5rem;"
        >
          <div
            @click="selectAnswer(j)"
            :style="{
              cursor: answeredCorrectly && !a.correct ? 'not-allowed' : 'pointer',
              opacity: answeredCorrectly && !a.correct ? 0.5 : 1,
              padding: '0.3rem',
              border: '1px solid #ccc',
              borderRadius: '6px',
              fontWeight: 500
            }"
          >
            {{ a.text }}
          </div>
          <p
            v-if="openAnswer === j"
            style="margin-left:1rem; margin-top:0.3rem;"
          >
            {{ a.explanation }}
          </p>
        </li>
      </ul>

      <button
        :disabled="!answeredCorrectly"
        @click="nextQuestion"
        style="margin-top:1rem; padding:0.5rem 1rem;"
      >
        {{ i < questions.length - 1 ? 'Next Question →' : 'Finish Quiz 🎉' }}
      </button>
    </div>

    <!-- Image -->
    <div v-if="q.image" style="flex:1;">
      <img :src="q.image" alt="Question image" style="max-width:100%; border-radius:8px;" />
    </div>
  </div>
</div>

<!-- Completion Card -->
<div
  v-else-if="stage === 'done'"
  style="
    margin-top:2rem;
    padding:2rem;
    text-align:center;
    border-radius:12px;
    background:linear-gradient(135deg, #4ade80, #22c55e);
    color:white;
    font-weight:bold;
    font-size:1.5rem;
    box-shadow:0 4px 12px rgba(0,0,0,0.2);
  "
>
  🎉 Congratulations! <br /> You’ve finished the quiz!
</div>
