<template>
  <div class="love-effect">
    <transition name="fade">
      <h1 v-if="showMessage" class="message">赵佳宁是大傻瓜！</h1>
    </transition>
    <button class="btn"  v-if="!showMessage" @click="showMessage = !showMessage">点这查看王浩文的心事</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMessage: false
    };
  }
};
</script>

<style>
.love-effect {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #ff4d4d, #ff99cc);
}

.message {
  font-size: 3rem;
  color: white;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.btn {
  padding: 10px 20px;
  font-size: 1.5rem;
  background-color: #ff99cc;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #ff4d4d;
}
</style>