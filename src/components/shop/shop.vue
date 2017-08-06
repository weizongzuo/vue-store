<template>
	<div class="shop-wrapper" ref="shopWrapper">
		<div class="shop-box">
			<div class="shop-content">
				<div class="head-content">
					<img class="head-img" src="./head-img.png" >
					<div class="shop-info">
						<div class="trade-name">
							<h1>{{shopName}}</h1>
							<span>分享微店</span>
						</div>
						<p>{{shopInfo}}</p>
					</div>
				</div>
				<div class="shop-msg">
					<p>联系电话: {{shopPhone}}</p>
					<span class="icon-phone">
						联系店主
					</span>
				</div>
			</div>
		<nav class="s-nav">			
			<div class="nav-item active" >
				<router-link to="/classify">微店首页</router-link>
			</div>	
			<div class="nav-item" >
				<router-link to="/activity">活动中心</router-link>
			</div>
			<div class="nav-item" >
				<router-link to="/shop">商品分类</router-link>
			</div>	
			<div class="nav-item" >
				<router-link to="/more">个人中心</router-link>
			</div>				
		</nav>
		<div class="shopContainer">
			<goodsList :gType="gType" :showList="showList" :showPrice="showPrice" :showCoupon="showCoupon"></goodsList>
			<div class="moreBtn">更多商品</div>
		</div>	
		
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import goodsList from '../goodsList/goodsList.vue'

export default {
  data () {
    return {
      shopName: '机锋通讯',
      shopPhone: '18611181358',
      shopInfo: '本店主营苹果、三星、小米、HTC等高中端品牌手机欢迎选购 ~',
      gType: false,
      showList: false,
      showPrice: true,
      showCoupon: false
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.shopWrapper, {
        click: true
      })
    })
  },
  components: {
    goodsList
  }
}
</script>

<style>
	.shop-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		margin-top: 0.12rem;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.shop-wrapper .shop-box{
		width: 100%;
	}
	.shop-content{
		display: flex;
		position: relative;
		height: 2.82rem;
		width: 100%;
		flex-direction: column;
		background: url(head-bg.png)center center no-repeat;
		background-size: 100%;
	}
	.head-content{
		display: flex;
		flex: 1;
		box-sizing: border-box;
		align-items: center;
		padding: 0 0.2rem;
		flex-direction: row;
	}
	.head-img{
		display: block;
		width: 1.62rem;
		box-sizing: border-box;
		height: 1.62rem;
		border-radius: 50%;
		border:0.1rem solid #fff;
	}
	.shop-msg{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 0.8rem;
		background: rgba(0,0,0,0.4);
		font-size: 0.24rem;
	}
	.shop-msg p{
		display: inline-block;
		margin-left: 0.2rem;
		color: #fff;
	}
	.shop-msg .icon-phone{
		height: 0.5rem;
		width: 1.6rem;
		margin-right: 0.2rem;
		border-radius: 0.25rem;
		text-indent: 1.5em;
		line-height: 0.5rem;
		background: url(icon-phone.png)0.1rem center no-repeat,#fff;
		background-size: 0.2rem; 
	}
	.shop-info{
		display: flex;
		flex: 1;
		height: 100%;
		flex-direction: column;
		justify-content: flex-start;
		margin-left: 0.15rem;
	}
	.trade-name{
		display: flex;
		flex:1;
		height: 0.6rem;
		justify-content: space-between;
		align-items: center;
	}
	.trade-name h1{
		flex:1;
		display: inline-block;
		font-size: 0.32rem;
		color: #fff;
	}
	.trade-name span{
		height: 0.5rem;
		width: 1.6rem;
		position: relative;
		border-radius: 0.25rem;
		font-size: 0.24rem;
		text-indent: 1.8em;
		line-height: 0.5rem;
		background: #fff;
		background-size: 0.2rem; 
	}
	.trade-name span:before{
		content: '';
		position:absolute;
		width: 0.3rem;
		height: 0.3rem;
		border-radius: 50%;
		background: #539cd1;
		top: 50%;
		transform: translateY(-50%);
		left: 0.1rem;
	}
	.shop-info p{
		flex: 1;
		font-size: 0.24rem;
		color: #fff;
		line-height: 1.2em;
	}
	.s-nav{		
		display: flex;
		flex-direction: row;
		width: 100%;
		
	}
	.s-nav .nav-item a{
		display: block;
		height: 0.88rem;
	}
	.s-nav .nav-item {
		flex: 1;
		height: 0.88rem;
		text-align: center;
		line-height: 0.88rem;
		font-size: 0.24rem;
		color: #666;
	}
	.s-nav .nav-item {
		display: block;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border-left: 0.02rem solid #ccc;
		border-right: 0.02rem solid #ccc;
		border-bottom: 0.04rem solid #ccc;
		background:#f6f6f6;
		
	}
	.s-nav .nav-item.active{
		box-sizing: border-box;
		background: #ddd;
		border-left: 0.02rem solid #999;
		border-right: 0.02rem solid #999;
		border-bottom: 0.04rem solid #999;
		background: linear-gradient(#f2f2f2, #ddd);
	}
	.moreBtn{
	display: block;
	height: 0.9rem;
	width: 100%;
	margin: 0.2rem auto 0.2rem ;
	border-radius: 0.04rem;
	border:0.01rem solid #e4cce8;
	background:#539cd1;
	color: #fff;
	font-size: 0.28rem;
	text-align: center;
	line-height: 0.9rem;
}
.shopContainer{
	width: 100%;
	box-sizing: border-box;
	padding: 0 0.2rem;
}

</style>
