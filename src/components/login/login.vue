<template>
	<div class="login-wrapper">
		<div class="header">
			<h1 class="login-logo">友惠微店</h1>
		</div>
		<div class="banner">
			<img src="./banner.png" >
		</div>
		<div class="btn-group">
			<input type="text" placeholder="手机号码" v-model="number" ></input>
			<input type="password" placeholder="密码" v-model="password"></input>
			<input type="button" value="登录" class="login-btn" @click.stop="onLog"></input>
			<input type="button" value="注册认证店员" class="register-btn" @click.stop="onReg"></input>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      number: '',
      password: ''
    }
  },
  methods: {
    onLog: function () {
      this.$router.push({path: './classify'})
    },
    onReg: function () {
      this.$router.push({path: './register'})
    }
  }
}
</script>

<style >
	.login-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		background: #f6f6f6;
	}
	.header{
		flex: 0 0 0.9rem;
		background: #539cd1;
		box-shadow: 0 -0.3rem 0.4rem -0.4rem rgba(0,0,0,0.4) inset;
	}
	.header .login-logo{
		font-size: 0.18rem;
		text-indent: -9999rem;
		width: 2.4rem;
		height: 0.8rem;
		background:url(./logo.png)center center no-repeat;
		background-size: 100%;
		margin-top: 0.05rem;
		margin-left: 0.2rem;

	}
	.banner{
		width: 100%;
		height: 2.42rem;
	}
	.banner img{
		display: block;
		width: 100%;
		height: 100%;
	}
	.btn-group{
		display: flex;
		flex: 1;
		box-sizing: border-box;
		padding: 0 0.2rem;
		flex-direction: column;
		align-items: center;
		
	}
	.btn-group input{
		display: block;
		width: 100%;
		height: 0.8rem;
		box-sizing: border-box;
		padding: 0.1rem;
		margin-top: 0.5rem;
		border-radius: 0.04rem;
		border:0.02rem solid #ccc;
		font-size: 0.28rem;
	}
	.btn-group input::-webkit-input-placeholder{
		font-size: 0.28rem;
	}
	.login-wrapper .login-btn{
		background:#539cd1;
		color: #fff;
		margin-bottom: 0;
	}
	.register-btn{
		background: #ff9933;
		color: #fff;
	}
</style>
