<template>
  <a class="card3" href="#">
    <h3>This is option 3</h3>
    <p class="small">
      Card description with lots of great facts and interesting details.
    </p>
    <div class="go-corner" href="#">
      <div class="go-arrow">→</div>
    </div>
  </a>
</template>

<script setup>
// Set Props
const props = defineProps({
  title: String,
  pathName: String,
});
</script>

<style scoped>
.go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 32px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: #00838d;
  border-radius: 0 4px 0 32px;
}

.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans;
}

.card3 {
  display: block;
  top: 0px;
  position: relative;
  max-width: 262px;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  overflow: hidden;
  border: 1px solid #f2f8f9;
}
.card3 .go-corner {
  opacity: 0.7;
}
.card3:hover {
  border: 1px solid #00838d;
  box-shadow: 0px 0px 999px 999px rgba(255, 255, 255, 0.5);
  z-index: 500;
}

.card3:hover p {
  color: #00838d;
}
.card3:hover .go-corner {
  transition: opactiy 0.3s linear;
  opacity: 1;
}
</style>
