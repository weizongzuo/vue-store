<template>
	<div class="order-wrapper" ref="orderWrapper">
		<div class="full">
			<div class="order-content">
				<back :title="backTitle"></back>
				<div class="order-shop-info">
					<div class="order-head">已选购商品</div>
					<div class="order-main">
						<img src="./phone-img.png" >
						<div class="show-info">
							<h2>{{shopTitle}}</h2>
							<p>内存:{{memory}} 颜色:{{color}}</p>
							<strong>￥{{price}}</strong>
						</div>
					</div>
					<div class="order-footer">
						优惠券 : 
						<strong>未使用</strong>
					</div>
				</div>
				<div class="purchaser-info">
					<div class="order-head">填写收货人</div>
					<div class="inputGroup">
						<input type="text" placeholder="收货人姓名">
						<input type="text" placeholder="手机号码">
						<input type="text" placeholder="省份">
						<input type="text" placeholder="城市">
						<input type="text" placeholder="地区">
						<input type="text" placeholder="详细地址">
						<input type="text" placeholder="备注">
					</div>
				</div>
				<div class="buyBtn" @click.stop="onBuy">结算</div>
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
      backTitle: '填写订单',
      shopTitle: '苹果（APPLE）iPhone 4S 8G版（3G版）',
      memory: '32G',
      color: '黑色',
      price: '5999.00',
      number: '1'
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.orderWrapper, {
        click: true
      })
    })
  },
  components: {
    back: back
  },
  methods: {
    onBuy: function () {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: '/order2'})
    }
  }
}
</script>

<style>
	.order-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.order-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		width: 100%;
		margin-top: 0.4rem;
		text-align: center;
		color: #fff;
		
	}
	.order-shop-info,
	.purchaser-info{
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-top: 0.2rem;
		margin-bottom: 0.2rem;
		background:#fff;
		border: 0.01rem solid #ccc;
	}
	.order-head{
		height: 0.8rem;
		font-size: 0.28rem;
		line-height: 0.8rem;
		text-align: left;
		color: #333;
		box-sizing: border-box;
		border-bottom: 0.01rem solid #ccc;
		position: relative;
		text-indent: 2em;
	}
	.order-head:before{
		content: '';
		position: absolute;
		top: 0;
	    left: 0;
	    height: inherit;
	    box-sizing: border-box;
	    width: 0.4rem;
	    border: 0.01rem solid #0066cc;
	    background: #2aa0e9;
	}
	.order-main{
		display: flex;
		justify-content: row;
		box-sizing: border-box;
		padding:0.15rem;
		border: 0.01rem solid #ccc;
		border-top: none;
	}
	.order-footer{
		height: 0.8rem;
		box-sizing: border-box;
		padding-left: 0.15rem;
		font-size: 0.28rem;
		background: url(right-arrow.png)right 0.15rem center no-repeat;
		background-size: 0.15rem;
		color: #333;
		line-height: 0.8rem;
		text-align: left;
	}
	.order-footer strong{
		color: #666;
	}
	.order-main img{
       width: 1.6rem;
       height: 1.6rem;
	}
	.show-info{
		flex: 1;
		padding-left: 0.15rem;
		padding-right: 0.2rem;
		text-align: left;
		font-size: 0;
	}
	.show-info h2{
		line-height: 1.5em;
		font-size: 0.28rem;
		
		color: #333;
	}
	.show-info p{
		font-size: 0.24rem;
		margin: 0.1rem 0;
		color: #333;
	}
	.show-info strong{
		padding-top: 0.1rem;
		font-size: 0.24rem;
		color:#06c;
	}
	.inputGroup{
		width: 100%;
		box-sizing: border-box;
		padding: 0 0.15rem;
	}
	.purchaser-info {

	}
	.purchaser-info input{
		display: block;
		height: 0.8rem;
		width: 100%;
		box-sizing: border-box;
		border-radius: 0.04rem;
		border:0.01rem solid #ccc;
		padding: 0.05rem 0.1rem;
		margin-top: 0.15rem; 
		font-size: 0.28rem;
		outline: none;
	}
	.purchaser-info input:last-child{
		margin-bottom: 0.15rem;
	}
	.buyBtn{
		display: block;
	    height: 0.9rem;
	    width: 100%;
	    margin: 0.2rem auto 0.2rem;
	    border-radius: 0.04rem;
	    border: 0.01rem solid #e4cce8;
	    background: #cc3333;
	    color: #fff;
	    font-size: 0.28rem;
	    text-align: center;
	    line-height: 0.9rem;
	}
</style>
