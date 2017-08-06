<template>
	<div class="pay-success-wrapper" ref="paySuccessWrapper">
		<div class="full">
			<div class="pay-success-content">
				<back :title="backTitle"></back>
				<div class="success-msg">
					<div class="msg-top">
						<h3>恭喜你，支付成功！</h3>
						<p>订单号：<strong>{{orderNum}}</strong></p>
					</div>
					<div class="msg-bottom">
						追踪订单请在更多中订单管理进行追踪！
					</div>
				</div>
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
				<div class="order-shop-info">
					<div class="order-head">商品信息</div>
					<div class="order-main">
						<img src="./phone-img.png" >
						<div class="show-info">
							<h2>{{shopTitle}}</h2>
							<p>内存:{{memory}} 颜色:{{color}}</p>
							<strong>￥{{price}} x {{number}}</strong>
						</div>
					</div>
					<div class="discount">
						<p>
							订单优惠
							<strong>{{discountMsg}}</strong>
						</p>
					</div>
					<div class="pay-sum">
						<p>
							订单总价
							<strong>￥{{price*number}}</strong>
						</p>
					</div>
				</div>
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
      backTitle: '支付成功',
      shopTitle: '苹果（APPLE）iPhone 4S 8G版（3G版）',
      memory: '32G',
      color: '黑色',
      price: '5999.00',
      number: '1',
      name: '刘祥龙',
      phone: '13641103305',
      adds: '北京市东城区夕照寺大街2号北京电信工程局10层产品中心',
      msg: '请尽快发货',
      discountMsg: '未使用优惠卷',
      orderNum: '3733545'
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.paySuccessWrapper, {
        click: true
      })
    })
  },
  components: {
    back: back
  }
}
</script>

<style>
	.pay-success-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.pay-success-content{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-top: 0.4rem;
		text-align: center;
		color: #fff;
		
	}
	.discount,
	.pay-sum{
	    min-height: 0.8rem;
	    line-height: 0.8rem;
	    font-size: 0.28rem;
	    border-bottom: 0.01rem solid #ccc;
	    text-align: left;
	    /*text-indent: 3em;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;*/
	}
	.discount p,
	.pay-sum p{
		width: 100%;
		box-sizing: border-box;
		padding-left: 0.75rem;
	}
	.discount{
	    color: #000;
	    background: url(./5.png)left 0.2rem center no-repeat;
	    background-size: 0.35rem;
	}
	.pay-sum{
	    color: #000;
	    background: url(./6.png)left 0.2rem center no-repeat;
	    background-size: 0.35rem;
	}
	.discount strong{
		color:#666;
	}
	.pay-sum strong{
		color:#539cd1;
	}
	.success-msg{
		display: flex;
		height: 2.7rem;
		width: 100%;
		margin-top: 0.2rem;
		flex-direction: column;
		box-sizing: border-box;
		border-radius: 0.04rem;
		border:0.01rem solid #ccc;
		background: #fff;
	}
	.msg-top{
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1;
		border-bottom: 0.01rem dashed #ccc;
	}
	.msg-bottom{
		height: 0.8rem;
		font-size: 0.24rem;
		color: #999;
		line-height: 0.8rem;
	}
	.msg-top h3,
	.msg-top p{
		font-size: 0.28rem;
		color: #333;
	}
	.msg-top p{
		margin-top: 0.2rem;
	}
	.msg-top p strong{
		color: #ff0000;
	}
	
</style>
