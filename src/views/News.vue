<script setup lang="ts">
</script>

<template>
  <main class="news-page">
    <div class="container section">
      <h1 class="section-title">NEWS</h1>
      <div class="news-list">
        <article v-for="i in 5" :key="i" class="news-item">
          <div class="news-image"></div>
          <div class="news-content">
            <p class="news-date">2024.03.{{ i }}</p>
            <h2 class="news-title">Latest Announcement {{ i }}</h2>
            <p class="news-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.news-page {
  padding-top: 80px;
}

.news-list {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

.news-item {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  background: var(--section-bg);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-4px);
  }
}

.news-image {
  height: 200px;
  background: #ddd;
}

.news-content {
  padding: 1.5rem;
}

.news-date {
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.news-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.news-excerpt {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .news-item {
    grid-template-columns: 1fr;
  }
}
</style>