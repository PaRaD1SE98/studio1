<script setup lang="ts">
import { ref } from 'vue';

const menuItems = [
  { name: 'HOME', path: '/' },
  { name: 'NEWS', path: '/news' },
  { name: 'ARTISTS', path: '/artists' },
  { name: 'WORKS', path: '/works' },
  { name: 'EVENTS', path: '/events' },
  { name: 'SHOP', path: '/shop' },
  { name: 'CONTACT', path: '/contact' }
];

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="header">
    <div class="container header-container">
      <router-link to="/" class="logo">VIRTUAL STUDIO</router-link>
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
        <router-link
          v-for="item in menuItems"
          :key="item.name"
          :to="item.path"
          class="nav-link"
          @click="isMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--primary-color);
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  font-weight: 500;
  letter-spacing: 1px;
  position: relative;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: width 0.3s;
  }

  &:hover::after,
  &.router-link-active::after {
    width: 100%;
  }
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--primary-color);
    transition: transform 0.3s;
  }
}

@media (max-width: 768px) {
  .header-container {
    height: 60px;
  }

  .logo {
    font-size: 1.4rem;
  }

  .menu-toggle {
    display: flex;
  }

  .nav {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: calc(100vh - 60px);
    background: rgba(255, 255, 255, 0.98);
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 1.5rem;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    
    &.nav-open {
      transform: translateX(0);
    }
  }

  .nav-link {
    font-size: 1.2rem;
  }
}
</style>