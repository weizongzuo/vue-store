<template>
  <div class="guide-wrapper" @click="onNext" >
  	<div class="guide-info">
	  	<div :class="{showUp:moveUp}"> 
  			<h1 class="logo" >购物啦</h1>
    		<p class="sentence" >{{msg}}</p> 
  		</div>			 				
  	</div> 	
    <p class="warrant">wzz授权</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '好好学习vue',
      isUp: 0,
      moveUp: false
    }
  },
  methods: {
    onNext: function () {
      this.isUp++
      if (this.isUp === 1) {
        this.moveUp = true
      }
      const that = this
      setTimeout(function () {
        that.$router.push({path: './guide2'})
      }, 1000)
    }
  }
}
</script>

<style> 
	.guide-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		background-color: #63a6d5;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.logo{
		display: block;
		width: 4rem;
		height: 1.2rem;
		text-align: center;
		font-size: 0.2rem;
		background: url(logo.png) center center no-repeat;
		background-size: cover;
		text-indent: -9999rem;
	}
	.sentence{
		display: block;
		font-size: 0.28rem;
		text-align: center;
		color: #fff;
	}
	.warrant{
		display: block;
		font-size: 0.28rem;
		color: #fff;
		position: fixed;
		bottom: 0.7rem;
		left: 50%;
		transform: translateX(-50%);
	}
	.showUp{
		transform: translateY(-2.8rem);
		transition: transform 0.5s;
	}

</style>
