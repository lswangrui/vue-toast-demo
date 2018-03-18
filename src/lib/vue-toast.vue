<template>
  <div>
    <section class="toast-container">
      <div class="toast" :class="[visible?'fade-in':'fade-out']">
        <span>hello,toast</span>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        visible:false
      }
    }
  }
</script>

<style lang='scss'>
.toast-container{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  .toast{
    width: 180px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: rgba(0,0,0,0.63);
    border-radius: 10px;
    color: #fff;
  }
  .fade-in{
    animatiopn-name:fade-in;
    animatiopn-duration:0.3;
    animatiopn-fill-mode:both;
  }
  .fade-out{
    animatiopn-name:fade-out;
    animatiopn-duration:0.3;
    animatiopn-fill-mode:both;
  }
}
@keyframe fade-in{
  0% {
    opacity:0;
    transform:scale(0.7);
  }
  100% {
    opacity:1;
    transform:scale(1);
  }
} 
@keyframe fade-out{
  0% {
    opacity:1;
    transform:scale(1);
  }
  100% {
    opacity:0;
    transform:scale(0.7);
  }
} 
</style>