<script setup lang="ts">
</script>

<template>
  <main class="artists-page">
    <div class="container section">
      <h1 class="section-title">ARTISTS</h1>
      <div class="artists-grid">
        <article v-for="i in 6" :key="i" class="artist-card">
          <div class="artist-image"></div>
          <div class="artist-content">
            <h2 class="artist-name">Virtual Singer {{ i }}</h2>
            <p class="artist-description">A unique virtual singer with a captivating voice and stunning visual presence.</p>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.artists-page {
  padding-top: 80px;
}

.artists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.artist-card {
  background: var(--section-bg);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-4px);
  }
}

.artist-image {
  height: 400px;
  background: #ddd;
}

.artist-content {
  padding: 1.5rem;
}

.artist-name {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.artist-description {
  color: #666;
  line-height: 1.6;
}
</style>