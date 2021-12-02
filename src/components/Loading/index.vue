<template>
  <div class="loading">
    <div class="center">
      <span>正</span><span>在</span><span>加</span><span>载</span><span>中</span><span>...</span>
    </div>
    <div class="box">
      <div class="up"></div>
      <div class="down"></div>
      <div class="left"></div>
      <div class="right"></div>
      <div class="forward"></div>
      <div class="back"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style scoped>
  .loading{
    height: 100%;
    width: 100%;
  }
  .center{
    text-align: center;
    margin: 40% auto 0;
    font-size: 20px;
  }
  span{
    display: inline-block;
    margin: 5px;
    color: #666;
  }
  span:nth-of-type(1){
    animation: moving 1.5s linear 100ms infinite;
  }
  span:nth-of-type(2){
    animation: moving 1.5s linear 400ms infinite;
  }
  span:nth-of-type(3){
    animation: moving 1.5s linear 700ms infinite;
  }
  span:nth-of-type(4){
    animation: moving 1.5s linear 1000ms infinite;
  }
  span:nth-of-type(5){
    animation: moving 1.5s linear 1300ms infinite;
  }
  span:nth-of-type(6){
    animation: moving 2s linear 1600ms infinite;
  }
  @keyframes moving{
    from{
      transform: scale(1,1);
    }
    50%{
      transform: scale(1.5,1.5);
    }
    100%{
      transform: scale(1,1);
      }
  }
  .box {
    width: 50px;
    height: 50px;
    margin: 20px auto;
    position: relative;
    /* 让子盒子保持3d效果*/
    transform-style: preserve-3d;
    /* transform:rotateX(30deg) rotateY(-30deg); */
    animation: gun 8s linear infinite;
  }
  .box > div {
    width: 100%;
    height: 100%;
    position: absolute;
    text-align: center;
    line-height: 50px;
    font-size: 12px;
    color: #daa520;
  }
  .left {
    background-color: rgba(255, 0, 0, 1);
    /* 变换中心*/
    transform-origin: left;
    /* 变换*/
    transform: rotateY(90deg) translateX(-25px);
  }
  .right {
    background: rgba(0, 0, 255, 1);
    transform-origin: right;
    /* 变换*/
    transform: rotateY(90deg) translateX(25px);
  }
  .forward {
    background: rgba(255, 255, 0, 1);
    transform: translateZ(25px);
  }

  .back {
    background: rgba(0, 255, 255, 1);
    transform: translateZ(-25px);
  }

  .up {
    background: rgba(255, 0, 255, 1);
    transform: rotateX(90deg) translateZ(25px);
  }

  .down {
    background: rgba(99, 66, 33, 1);
    transform: rotateX(-90deg) translateZ(25px);
  }

  @keyframes gun {
    0% {
        transform: rotateX(0deg) rotateY(0deg);
    }
    100% {
        transform: rotateX(360deg) rotateY(360deg);
    }
  }
</style>
