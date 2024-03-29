<template>
  <div class="custom-cursor">
    <div
      ref="customCursorCircle"
      class="custom-cursor__circle"
      :style="circleStyle"
    ></div>
    <div
      ref="customCursorDot"
      class="custom-cursor__dot"
      :style="dotStyle"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'CustomCursor',
  props: {
    targets: Array,
    circleColor: String,
    circleColorHover: String,
    dotColor: String,
    dotColorHover: String,
    hoverSize: Number,
  },
  data() {
    return {
      scale: 1,
      x: null,
      y: null,
      circlePosX: null,
      circlePosY: null,
      dotPosX: null,
      dotPosY: null,
      circleStyle: null,
      dotStyle: null,
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.customCursor)
  },
  methods: {
    customCursor(e) {
      // cursor pos
      this.x = e.clientX
      this.y = e.clientY

      // cursor circle
      const circle = this.$refs.customCursorCircle

      this.circlePosX = this.x - 31 / 2
      this.circlePosY = this.y - 31 / 2

      // cursor circle
      const dot = this.$refs.customCursorDot

      this.dotPosX = this.x - 5 / 2
      this.dotPosY = this.y - 5 / 2

      // change style when hovering on selected targets
      if (
        (this.targets.length > 0 &&
          this.targets.includes(e.target.tagName.toLowerCase())) ||
        this.targets.includes(e.target.className.toLowerCase())
      ) {
        this.scale = this.hoverSize
        this.circleStyle = { borderColor: this.circleColorHover }
        this.dotStyle = { backgroundColor: this.dotColorHover }
      } else {
        this.scale = 1
        this.circleStyle = { borderColor: this.circleColor }
        this.dotStyle = { backgroundColor: this.dotColor }
      }

      // move custom cursor
      circle.style.transform = `translate(${this.circlePosX}px,${this.circlePosY}px) scale(${this.scale})`
      dot.style.transform = `translate(${this.dotPosX}px,${this.dotPosY}px)`
    },
  },
}
</script>

<style lang="scss" scoped>
$ease: cubic-bezier(0.23, 1, 0.32, 1);

@media screen and (min-width: 800px) {
  .custom-cursor {
    cursor: none;
    z-index: 9999999999;
    pointer-events: none;
  }
  .custom-cursor__circle {
    position: fixed;
    cursor: none;
    top: 0;
    left: 0;
    width: 34px;
    height: 34px;
    border: 1px solid #2f2f2f;
    border-radius: 50%;
    transform: translate(-100%, -100%);
    transition: transform 0.4s $ease;
  }

  .custom-cursor__dot {
    position: fixed;
    cursor: none;
    top: 1px;
    left: 1px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #2f2f2f;
    transform: translate(-100%, -100%);
    transition: transform 0.2s $ease;
  }
}
</style>
