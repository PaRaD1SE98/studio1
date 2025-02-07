<script setup lang="ts">
</script>

<template>
  <main class="events-page">
    <div class="container section">
      <h1 class="section-title">EVENTS</h1>
      <div class="events-list">
        <article v-for="i in 5" :key="i" class="event-card">
          <div class="event-date">
            <span class="month">MAR</span>
            <span class="day">{{ i + 15 }}</span>
          </div>
          <div class="event-content">
            <h2 class="event-title">Virtual Concert {{ i }}</h2>
            <p class="event-location">Virtual Space {{ i }}</p>
            <p class="event-description">Join us for an unforgettable virtual concert experience featuring our talented virtual artists.</p>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.events-page {
  padding-top: 80px;
}

.events-list {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

.event-card {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 2rem;
  background: var(--section-bg);
  transition: transform 0.3s;

  &:hover {
    transform: translateX(4px);
  }
}

.event-date {
  background: var(--primary-color);
  color: white;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .month {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .day {
    font-size: 2rem;
    font-weight: 700;
  }
}

.event-content {
  padding: 1.5rem;
}

.event-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.event-location {
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 1rem;
}

.event-description {
  color: #666;
  line-height: 1.6;
}
</style>