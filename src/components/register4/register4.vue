<template>
	<div class="register4-wrapper">	
		<div class="header">
			<h1 class="login-logo">友惠微店</h1>
		</div>
		<div ref="register4Wrapper" class="hide">
			<div>
				<div class="banner">
					<img src="./banner.png" >
				</div>
				<div class="btn-group">
					<div class="suc-msg">
						{{successMsg}}
					</div>
					<div  class="login-btn" @click="onNext">{{msg}}</div>
				</div>
			</div>	
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      msg: '立即编辑店铺信息',
      successMsg: '恭喜你，注册成功!'
    }
  },
  methods: {
    onNext: function (event) {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: './set'})
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.register4Wrapper, {
        click: true
      })
    })
  }
}
</script>

<style>
	.hide{
		overflow: hidden;
	}
	.register4-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		
		background: #f6f6f6;
	}
	 .register4-wrapper .header{
		flex: 0 0 0.9rem;
		background: #539cd1;
		box-shadow: 0 -0.3rem 0.4rem -0.4rem rgba(0,0,0,0.4) inset;
	}
	.register4-wrapper .header .login-logo{
		font-size: 0.18rem;
		text-indent: -9999rem;
		width: 2.4rem;
		height: 0.8rem;
		background:url(./logo.png)center center no-repeat;
		background-size: 100%;
		margin-top: 0.05rem;
		margin-left: 0.2rem;

	}
	.register4-wrapper .banner{
		height: 2.42rem;
		overflow: hidden;
	}
	.register4-wrapper .banner img{
		display: block;
		width: 100%;
		height: 100%;
	}
	.register4-wrapper .btn-group{
		display: flex;
		flex: 1;
		
		flex-direction: column;
		align-items: center;
		
	}
	.register4-wrapper .btn-group .login-btn{
		display: block;
		height: 0.8rem;
		width: 100%;
		text-align: center;
		box-sizing: border-box;
		margin-top: 0.5rem;
		border-radius: 0.04rem;
		line-height: .8rem;
		border:0.02rem solid #ccc;
		font-size: 0.28rem;
	}
	.register4-wrapper .login-btn{
		background:#539cd1;
		color: #fff;
		margin-bottom: 0.5rem;
	}
	.suc-msg{
		display: block;
		height: 3.22rem;
		width: 100%;
		box-sizing: border-box;
		border-radius: 0.04rem;
		border:0.02rem solid #ccc;
		font-size: 0.28rem;
		color: #333;
		margin-top: 0.5rem;
		text-align: center;
		line-height: 3.22rem;
	}
</style>
