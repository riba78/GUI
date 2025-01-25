<template>
  <div class="background-circles">
    <div class="circle small"></div>
    <div class="circle small2"></div>
    <div class="circle large"></div>
  </div>
</template>

<script>
export default {
  name: "BackgroundCircles",
};
</script>

<style>
.background-circles {
  position: fixed; /* Ensures the circles stay fixed in the background */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Places the circles behind main content but above the body */
  pointer-events: none; /* Prevents blocking user interactions */
}

.circle {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(94, 114, 228, 0.2); /* Adjust color and transparency */
}

.circle.small {
  width: 50px;
  height: 50px;
  top: 20%;
  left: 10%;
}

.circle.small2 {
  width: 110px;
  height: 110px;
  top: 30%;
  left: 10%;
}

.circle.large {
  width: 150px;
  height: 150px;
  bottom: 10%;
  right: 5%;
}
</style>
