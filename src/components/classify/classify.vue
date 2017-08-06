<template>
	<div class="classify-wrapper">
		<div class="header">
			<h1 class="login-logo">友惠微店</h1>
		</div>
		<nav class="c-nav">			
			<div class="nav-item" >
				<router-link to="/classify">分类</router-link>
			</div>	
			<div class="nav-item" >
				<router-link to="/activity">活动</router-link>
			</div>
			<div class="nav-item" >
				<router-link to="/shop">微店</router-link>
			</div>	
			<div class="nav-item" >
				<router-link to="/more">更多</router-link>
			</div>				
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
  data () {
    return {
      number: ''
    }
  }
}
</script>

<style>
.header,
.c-nav{
	z-index: 99;
}
	.classify-wrapper{
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
	.c-nav{

		
		display: flex;
		flex-direction: row;
		width: 100%;
		
	}
	.c-nav .nav-item{
		flex: 1;
		height: 0.88rem;
		text-align: center;
		line-height: 0.88rem;
		font-size: 0.24rem;
		color: #666;
	}
	.c-nav .nav-item a{
		display: block;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border-left: 0.02rem solid #ccc;
		border-right: 0.02rem solid #ccc;
		border-bottom: 0.04rem solid #ccc;
		background:#f6f6f6;
		
	}
	.c-nav .nav-item a.active{
		box-sizing: border-box;
		border-left: 0.02rem solid #539cd1;
		border-right: 0.02rem solid #539cd1;
		border-bottom: 0.04rem solid #539cd1;
		color: #539cd1;
		background:linear-gradient(#f9fdff, #d5ecff);
	}
</style>
