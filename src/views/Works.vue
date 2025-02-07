<script setup lang="ts">
</script>

<template>
  <main class="works-page">
    <div class="container section">
      <h1 class="section-title">WORKS</h1>
      <div class="works-grid">
        <article v-for="i in 9" :key="i" class="work-card">
          <div class="work-image"></div>
          <div class="work-content">
            <h2 class="work-title">Project {{ i }}</h2>
            <p class="work-date">2024.03.{{ i }}</p>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.works-page {
  padding-top: 80px;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.work-card {
  background: var(--section-bg);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-4px);
  }
}

.work-image {
  height: 200px;
  background: #ddd;
}

.work-content {
  padding: 1rem;
}

.work-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.work-date {
  color: #666;
}
</style>