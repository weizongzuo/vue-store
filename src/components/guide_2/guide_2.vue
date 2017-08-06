<template>
	<div class="guide2-wrapper" @click="onMove">
	
		  <div class="infoItem" :class="moveGroup[move]">

		  	<p v-for="info in msg">{{info}}</p>		  	
		  	<p>
		  		<span @click.stop="onLogin">立即进入</span>
		  	</p>
		  </div>
	</div>
</template>

<script >
export default {
  data () {
    return {
      moveIndex: 0,
      moveGroup: ['', 'moveLeft', 'moveLeft2', 'moveLeft3'],
      msg: ['欢乐分享啦', '分享啦', 'gogogo']
    }
  },
  methods: {
    onMove: function () {
      this.moveIndex++
    },
    onLogin: function () {
      this.$router.push({path: './login'})
    }
  },
  computed: {
    move () {
      if (this.moveIndex <= 3) {
        return this.moveIndex
      } else {
        return 3
      }
    }
  }
}
</script>
<style>
	.guide2-wrapper{
		width: 100%;
		height: 100%;
		background: url(bg.png)center center no-repeat ,#63a6d5;
		background-size: 120%;
		background-position: 33% 189% ;
		overflow: hidden;
	}
	.infoItem{
		width: 400%;
		display: flex;
		flex-direction: row;
		transform: translate(0,2.8rem);
		font-size: 0;
		transition: all 0.5s;
	}
	.infoItem p{
		display: inline-block;
		flex:1;
		width: 25%;
		height: 0.8rem;
		font-size: 0.36rem;
		color: #fff;
		text-align: center;
	}
	.infoItem p span{
		display: inline-block;
		height: 0.8rem;
		background: #fff;
		width: 4rem;
		color: #000;
		font-size: 0.36rem;
		line-height: 0.8rem;
		letter-spacing: 0.04rem;
	}
	.moveLeft{
		transform: translate(-25%,2.8rem);
	}
	.moveLeft2{
		transform: translate(-50%,2.8rem);
	}
	.moveLeft3{
		transform: translate(-75%,2.8rem);
	}
	.moveLeft4{
		transform: translate(-75%,2.8rem);
	}

	
</style>
