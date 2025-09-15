---
title: Quiz — Example
---

# Quiz — Example

Below is a short multiple‑choice quiz. Click **Check answers** to see your score.

<ClientOnly>
<Quiz :questions="[
{
id: 1,
prompt: 'Which insulin has the fastest onset of action?',
options: [
{ text: 'Regular insulin' },
{ text: 'Lispro', correct: true },
{ text: 'NPH' },
{ text: 'Glargine' }
],
explanation: 'Lispro is a rapid-acting analogue with an onset of ~15 minutes.'
},
{
id: 2,
prompt: 'True or false: Basal insulin should always be held on the morning of surgery.',
options: [
{ text: 'True' },
{ text: 'False', correct: true }
],
explanation: 'Most patients continue a reduced basal dose; holding entirely risks ketosis.'
}
]" :shuffle="true" />
</ClientOnly>
