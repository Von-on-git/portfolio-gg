/* Personalize the content here. All current details are sample placeholders. */
const { createApp, computed, ref, onMounted } = Vue;
createApp({
  setup() {
    const profile = {
      name: 'Your Name', initials: 'GG', email: '',
      intro: 'A curious thinker who enjoys building thoughtful things for the web.',
      about: 'I’m drawn to the space where technology meets creativity. I enjoy turning complex ideas into simple, useful experiences — and learning something new along the way.'
    };
    const education = { dates: 'YOUR YEARS', degree: 'Your degree or field of study', school: 'Your university or school', note: 'Add your coursework, achievements, or a favorite area of study.', focus: 'Lifelong learner' };
    const skills = ['Creative thinking', 'Web development', 'Thoughtful design', 'Always learning'];
    const interests = [
      { title: 'Building for the web', type: 'Interests', description: 'Small experiments. Thoughtful interfaces. Ideas brought to life.', theme: 'blue-card', art: 'code' },
      { title: 'Taking the scenic route', type: 'Hobbies', description: 'Fresh air, a new trail, and a little room to think.', theme: 'green-card', art: 'mountain' },
      { title: 'Finding my rhythm', type: 'Hobbies', description: 'A good playlist. An old favorite. Something new on repeat.', theme: 'pink-card', art: 'music' }
    ];
    const activeFilter = ref('All');
    const filters = ['All', 'Interests', 'Hobbies'];
    const visibleInterests = computed(() => interests.filter(item => activeFilter.value === 'All' || item.type === activeFilter.value));
    const resumeDialog = ref(null);
    const closeResume = () => { resumeDialog.value.close(); document.body.classList.remove('dialog-open'); };
    onMounted(() => {
      document.title = `${profile.name} — Portfolio`;
      resumeDialog.value.addEventListener('close', () => document.body.classList.remove('dialog-open'));
    });
    return { profile, education, skills, interests, activeFilter, filters, visibleInterests, resumeDialog, year: new Date().getFullYear(),
      openResume() { resumeDialog.value.showModal(); document.body.classList.add('dialog-open'); }, closeResume,
      closeOnBackdrop(event) { if (event.target === resumeDialog.value) { const box = event.target.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) closeResume(); } },
      printResume() { window.print(); }
    };
  }
}).mount('#app');
