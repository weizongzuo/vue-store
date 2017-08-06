<template>
	<div class="register3-wrapper">	
		<div class="header">
			<h1 class="login-logo">友惠微店</h1>
		</div>
		<div ref="register3Wrapper" class="hide">
			<div>
				<div class="banner">
					<img src="./banner.png" >
				</div>
				<div class="btn-group">
					<input type="text" placeholder="身份证姓名" v-model="username"></input>
					<input type="text" placeholder="身份证号码" v-model="usernumber"></input>
					<input type="text" placeholder="员工编码" v-model="usercode"></input>
					<div class="photo">
						<img src="./photo.png" ref="photo">
						<div class="photo-tip">
							<h2>点击此处上传身份证照片</h2>
							<p>1.身份证照片必须能看清证件号。</p>
							<p>2.照片胸前应佩戴员工编号牌，并能看清员工号。</p>
						</div>
						<input type="file" class="onFile" @change="onFile"></input>
					</div>
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
      username: '',
      usernumber: '',
      usercode: ''
    }
  },
  methods: {
    onNext: function (event) {
      this.$router.push({path: './register4'})
    },
    onFile: function (event) {
      var that = this
      const file = event.target.files[0]
      if (!file.type.match('image.*')) {
        return
      }
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function (arg) {
        const url = arg.currentTarget.result
        that.$refs.photo.src = url
      }
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.register3Wrapper, {
        click: false
      })
    })
  }
}
</script>

<style>
	.hide{
		overflow: hidden;
	}
	.register3-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		
		background: #f6f6f6;
	}
	 .register3-wrapper .header{
		flex: 0 0 0.9rem;
		background: #539cd1;
		box-shadow: 0 -0.3rem 0.4rem -0.4rem rgba(0,0,0,0.4) inset;
	}
	.register3-wrapper .header .login-logo{
		font-size: 0.18rem;
		text-indent: -9999rem;
		width: 2.4rem;
		height: 0.8rem;
		background:url(./logo.png)center center no-repeat;
		background-size: 100%;
		margin-top: 0.05rem;
		margin-left: 0.2rem;

	}
	.register3-wrapper .banner{
		height: 2.42rem;
		overflow: hidden;
	}
	.register3-wrapper .banner img{
		display: block;
		width: 100%;
		height: 100%;
	}
	.register3-wrapper .btn-group{
		display: flex;
		flex: 1;
		
		flex-direction: column;
		align-items: center;
		
	}
	.register3-wrapper .btn-group input{
		display: block;
		height: 0.8rem;
		box-sizing: border-box;
		padding: 0.1rem;
		margin-top: 0.5rem;
		border-radius: 0.04rem;
		border:0.02rem solid #ccc;
		font-size: 0.28rem;
	}
	 .register3-wrapper .btn-group input::-webkit-input-placeholder{
		font-size: 0.28rem;
	}
	.register3-wrapper .login-btn{
		background:#539cd1;
		color: #fff;
		margin-bottom: 0.5rem;
	}
	.register3-info p:last-child{
		margin-top: 0.15rem;
		color: #666;

	}
	.register3-wrapper .btn-group .nub-code{
		width: 5.6rem;
		display: flex;
		flex-direction: row;
	}
	.btn-group .nub-code input:first-child{
		margin-right: 0.1rem;
		width:3.12rem;
	}
	.btn-group .nub-code input:last-child{
		width:2.92rem;
		outline: none;
		border:none;
		background:#33cc99;
	}
	.register3-wrapper .photo{
		width: 100%;
		display: flex;
		position: relative;
		box-sizing: border-box;
		padding:0.1rem;
		margin-top: 0.5rem;
		border-radius: 0.04rem;
		border:0.02rem solid #ccc;
		flex-direction: row;
	}
	.photo img{
		display: block;
		width: 1.42rem;
		height: 1.42rem;
	}
	.photo-tip{
		width: 3.6rem;
		margin-left: 0.24rem;
	}
	.photo-tip h2{
		font-size: 0.28rem;
		color: #666;
		margin-bottom: 0.15rem;
	}
	.photo-tip p{
		font-size: 0.24rem;
		line-height: 1.3em;
		color: #ccc;
	}
	.register3-wrapper .photo .onFile{
		display: block;
		position: absolute;
		margin-top: 0;
	    font-size: 0.28rem;
	    height: 100%;
	    right: 0;
	    top: 0;
	    opacity: 0;
	}
</style>
