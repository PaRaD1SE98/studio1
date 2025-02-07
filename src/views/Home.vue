<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useScroll } from '@vueuse/core'
import gsap from 'gsap'

const { y } = useScroll(window)
const heroRef = ref<HTMLElement | null>(null)
const isBackgroundLoaded = ref(false)

const parallaxStyle = computed(() => {
  const scrolled = Math.min(y.value / window.innerHeight, 1)
  const scale = 1 + scrolled * 0.2
  const blur = scrolled * 5
  const opacity = 1 - scrolled * 0.5

  return {
    transform: `scale(${scale})`,
    filter: `blur(${blur}px)`,
    opacity: opacity
  }
})

const loadBackground = () => {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30'
    img.onload = () => resolve(true)
  })
}

onMounted(async () => {
  await loadBackground()
  isBackgroundLoaded.value = true
  
  gsap.from('.hero-title', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  })
  
  gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
  })
})
</script>

<template>
  <main>
    <section class="hero" ref="heroRef">
      <div class="hero-background" :style="parallaxStyle"></div>
      <div class="hero-content" :class="{ 'content-visible': isBackgroundLoaded }">
        <div class="content-wrapper">
          <h1 class="hero-title">VIRTUAL ARTIST STUDIO</h1>
          <p class="hero-subtitle">Creating Tomorrow's Virtual Stars</p>
        </div>
      </div>
    </section>

    <section class="section about">
      <div class="container">
        <h2 class="section-title">ABOUT US</h2>
        <p class="about-text">
          We are a cutting-edge virtual artist studio, specializing in creating and producing
          virtual singers that captivate audiences worldwide. Our team combines advanced
          technology with artistic excellence to bring unique virtual performances to life.
        </p>
      </div>
    </section>

    <section class="section featured-artists">
      <div class="container">
        <h2 class="section-title">FEATURED ARTISTS</h2>
        <div class="artists-grid">
          <div class="artist-card" v-for="i in 3" :key="i">
            <div class="artist-image"></div>
            <h3 class="artist-name">Virtual Singer {{ i }}</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="section latest-news">
      <div class="container">
        <h2 class="section-title">LATEST NEWS</h2>
        <div class="news-grid">
          <article class="news-card" v-for="i in 3" :key="i">
            <div class="news-image"></div>
            <div class="news-content">
              <h3 class="news-title">Latest Announcement {{ i }}</h3>
              <p class="news-date">2024.03.{{ i }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.hero {
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30') center/cover;
  will-change: transform;
  transition: all 0.1s ease-out;
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  &.content-visible {
    opacity: 1;
  }
}

.content-wrapper {
  position: relative;
  padding: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 110%;
    height: 120%;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0) 80%
    );
    backdrop-filter: blur(4px);
    pointer-events: none;
  }
}

.hero-title {
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: 6px;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  letter-spacing: 4px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
}

.about-text {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.8;
}

.artists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.artist-card {
  background: var(--section-bg);
  padding: 1rem;
}

.artist-image {
  height: 300px;
  background: #ddd;
  margin-bottom: 1rem;
}

.artist-name {
  font-size: 1.5rem;
  text-align: center;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.news-card {
  background: var(--section-bg);
}

.news-image {
  height: 200px;
  background: #ddd;
}

.news-content {
  padding: 1rem;
}

.news-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.news-date {
  color: #666;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
    letter-spacing: 4px;
  }

  .hero-subtitle {
    font-size: 1.2rem;
    letter-spacing: 2px;
  }

  .content-wrapper {
    padding: 1.5rem;
  }

  .about-text {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .artists-grid,
  .news-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .artist-image {
    height: 250px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
    letter-spacing: 3px;
  }

  .hero-subtitle {
    font-size: 1rem;
    letter-spacing: 1.5px;
  }

  .content-wrapper {
    padding: 1rem;
  }
}
</style>