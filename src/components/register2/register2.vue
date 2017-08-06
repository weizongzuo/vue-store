<template>
	<div class="register2-wrapper">	
		<div class="header">
			<h1 class="login-logo">友惠微店</h1>
		</div>
		<div ref="register2Wrapper" class="hide">
			<div>
				<div class="banner">
					<img src="./banner.png" >
				</div>
				<div class="register2-info">
					<p>{{hint}}</p>
					<p>+86 {{phone}}</p>
				</div>
				<div class="btn-group">
					<div class="nub-code">
						<input type="text" placeholder="请填写验证码" ></input>
						<input type="button" :value="value" @click="onCode"></input>
					</div>
					<input type="password" placeholder="输入密码" v-model="password"></input>
					<input type="password" placeholder="再次确认密码" v-model="password2"></input>
					<input type="button" value="下一步" class="login-btn" @click.stop="onNext"></input>
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
      password: '',
      password2: '',
      hint: '我们已发送短信验证码到你的手机',
      phone: '13466788674',
      value: '重新获取验证码',
      codeFlag: true
    }
  },
  methods: {
    onNext: function (event) {
      this.$router.push({path: './register3'})
    },
    onCode: function () {
      if (!this.codeFlag) {
        return
      }
      this.codeFlag = false
      var i = 59
      var that = this
      const time = setInterval(function () {
        that.value = '(' + i + 's)后重新获取'
        if (i === 0) {
          that.value = '重新获取验证码'
          that.codeFlag = true
          clearInterval(time)
        }
        i--
      }, 1000)
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.register2Wrapper, {
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
	.register2-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		
		background: #f6f6f6;
	}
	 .register2-wrapper .header{
		flex: 0 0 0.9rem;
		background: #539cd1;
		box-shadow: 0 -0.3rem 0.4rem -0.4rem rgba(0,0,0,0.4) inset;
	}
	.register2-wrapper .header .login-logo{
		font-size: 0.18rem;
		text-indent: -9999rem;
		width: 2.4rem;
		height: 0.8rem;
		background:url(./logo.png)center center no-repeat;
		background-size: 100%;
		margin-top: 0.05rem;
		margin-left: 0.2rem;

	}
	.register2-wrapper .banner{
		height: 2.42rem;
		overflow: hidden;
	}
	.register2-wrapper .banner img{
		display: block;
		width: 100%;
		height: 100%;
	}
	.register2-wrapper .btn-group{
		display: flex;
		flex: 1;
		
		flex-direction: column;
		align-items: center;
		
	}
	.register2-wrapper .btn-group input{
		display: block;
		height: 0.8rem;
		box-sizing: border-box;
		padding: 0.1rem;
		margin-top: 0.5rem;
		border-radius: 0.04rem;
		border:0.02rem solid #ccc;
		font-size: 0.28rem;
	}
	 .register2-wrapper .btn-group input::-webkit-input-placeholder{
		font-size: 0.28rem;
	}
	.register2-wrapper .login-btn{
		background:#539cd1;
		color: #fff;
		margin-bottom: 0.5rem;
	}
	.register2-wrapper .register-btn{
		background: #ff9933;
		color: #fff;
	}
	.register2-wrapper .register2-info{
		width: 100%;
		display: flex;
		margin-top: 0.4rem;
		flex-direction: column;
		align-items: center;
	}
	.register2-wrapper .register2-info p{
		    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.2rem;
    font-size: 0.28rem;
    color: #333;
	}
	.register2-info p:last-child{
		margin-top: 0.15rem;
		color: #666;
	}
	.register2-wrapper .btn-group .nub-code{
		width: 100%;
		display: flex;
		flex-direction: row;
	}
	.btn-group .nub-code input:first-child{
		margin-right: 0.1rem;
	}
	.btn-group .nub-code input:last-child{
		width:2.92rem;
		outline: none;
		background:#33cc99;
	}
</style>
