<template>
	<div class="order2-wrapper" ref="order2Wrapper">
		<div class="full">
			<div class="order2-content">
				<back :title="backTitle"></back>	
				<div class="order2-shop-info">
					<div class="order-head">收货人信息</div>
					<div class="user-name">
						<p>{{name}}</p>
					</div>
					<div class="user-phone">
						<p>{{phone}}</p>
					</div>
					<div class="user-adds">
						<p>{{adds}}</p>
					</div>
					<div class="user-msg">
						<p>{{msg}}</p>
					</div>					
				</div>
				<div class="order2-shop-info">
					<div class="order-head">选择支付方式</div>
					<div class="zhiF" @click.stop="onZhiF">
						<i v-show="check" class="circle"></i>
						<h3>支付宝支付</h3>
						<p>支持信用卡、储蓄卡快捷支付及支付宝</p>
					</div>
					<div class="weiX" @click.stop="onWeiX">
						<i v-show="!check" class="circle"></i>
						<h3>微信支付</h3>
						<p>支持信用卡、储蓄卡快捷支付及财付通</p>
					</div>				
				</div>
				<div class="order-shop-info">
					<div class="order-head">已选购商品</div>
					<div class="order-main">
						<img src="./phone-img.png" >
						<div class="show-info">
							<h2>{{shopTitle}}</h2>
							<p>内存:{{memory}} 颜色:{{color}}</p>
							<strong>￥{{price}} x {{number}}</strong>
						</div>
					</div>
					<div class="order-footer">
						优惠券 : 
						<strong>未使用</strong>
					</div>
					<div class="total">
						<strong>{{number}}</strong>
						件商品，合计：
						<strong>￥{{price}}</strong>
					</div>
					<div class="sum">
						应付总额:
						<strong>￥{{price * number}}</strong>
					</div>
				</div>
				<div class="buyBtn" @click.stop="_onBuy">支付</div>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import back from '../back/back.vue'

export default {
  data () {
    return {
      backTitle: '确认订单',
      check: true,
      shopTitle: '苹果（APPLE）iPhone 4S 8G版（3G版）',
      memory: '32G',
      color: '黑色',
      price: '5999.00',
      number: '1',
      name: '刘祥龙',
      phone: '13641103305',
      adds: '北京市东城区夕照寺大街2号北京电信工程局10层产品中心',
      msg: '请尽快发货'
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.order2Wrapper, {
        click: true
      })
    })
  },
  components: {
    back: back
  },
  methods: {
    onZhiF: function () {
      this.check = true
    },
    onWeiX: function () {
      this.check = false
    },
    _onBuy: function () {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: '/paySuccess'})
    }
  }
}
</script>

<style>
	.order2-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.order2-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 0.4rem;
		text-align: center;
		color: #fff;
		
	}
	.order2-shop-info{
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-top: 0.2rem;
		background:#fff;
		border: 0.01rem solid #ccc;
	}
	.user-name,
	.user-phone,
	.user-adds,
	.user-msg,
	.user-email,
	.user-other{
		
		line-height: 1.5em;
		font-size: 0.28rem;
		border-bottom: 0.01rem solid #ccc;
		padding: 0.2rem 0;
		text-align: left;
		/*text-indent: 3em;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis; */
	}
	.user-name p,
	.user-phone p,
	.user-adds p,
	.user-msg p,
	.user-email p,
	.user-other p{
		box-sizing: border-box;
		width: 100%;
		white-space: normal;
		padding-left:0.75rem; 
		padding-right: 0.1rem;
	}
	.user-name{
		color:#333;
		background:url(./1.png)left 0.2rem center no-repeat;
		background-size: 0.35rem;
	}
	.user-phone{
		color:#06c;
		background:url(./2.png)left 0.2rem center no-repeat /0.35rem,
		url(./right-arrow.png)right 0.2rem center no-repeat /0.15rem;
	}
	.user-email{
		color:#06c;
		background:url(./right-arrow.png)right 0.2rem center no-repeat /0.15rem;
	}
	.user-adds{
		color:#666;
		background:url(./3.png)left 0.2rem center no-repeat;
		background-size: 0.35rem;
		
	}
	.user-msg{
		color:#999;
		background:url(./4.png)left 0.2rem center no-repeat;
		background-size: 0.35rem;
	}
	.user-other{
		color:#999;
	}
	.zhiF,
	.weiX{
		height: 1.32rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		box-sizing: border-box;
		padding-left: 0.75rem;
		border-bottom: 0.01rem solid #ccc;
	}
	.zhiF h3,
	.weiX h3{
		width: 100%;
		font-size: 0.28rem;
		text-align: left;
		color:#000;
	}
	.zhiF p,
	.weiX p{
		width: 100%;
		margin-top: 0.1rem;
		font-size: 0.24rem;
		color: #999;
		text-align: left;
	}
	.zhiF:before,
	.weiX:before{
		content: '';
		position: absolute;
		width: 0.35rem;
		height: 0.35rem;
		border-radius: 50%;
		box-sizing: border-box;
		border: 0.01rem solid #ccc;
		top: 50%;
		left: 0.2rem;
		transform: translateY(-50%);
	}
	.zhiF .circle,
	.weiX .circle{
		position: absolute;
		width: 0.25rem;
		height: 0.25rem;
		left: 0.25rem;
		top: 50%;
		transform: translateY(-50%);
		border-radius: 50%;
		background: #539cd1;
	}
	.total,
	.sum{
		height: 0.8rem;
	    box-sizing: border-box;
	    padding-right: 0.15rem;
	    font-size: 0.28rem;
	    border-bottom:0.01rem solid #ccc;
	    background-size: 0.15rem;
	    color: #333;
	    line-height: 0.8rem;
	    text-align: right;
	}
	.total{
		border-top:0.01rem solid #ccc;
	}
	.total strong{
		color: #000;
	}
	.sum strong{
		color: #539cd1;
	}
</style>
