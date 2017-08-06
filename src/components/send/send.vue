<template>
	<div class="send-wrapper" ref="sendWrapper">
		<div class="full">
			<div class="send-content">
				<back :title="backTitle"></back>
				<div class="showCouponInfo">
					<img src="./show-img.png" >
					<div class="coupon-info">
						<h2>{{title}}</h2>
						<strong>{{price}}</strong>
					</div>
				</div>
				<div class="table-wrapper">
					<div class="table-head">
						<h3>优惠码</h3>
						<h3>面值</h3>
						<h3>状态</h3>
					</div>
					<ul class="table-item" v-for="item in couponList" >
						<li>{{item.couponCode}}</li>
						<li>{{item.couponValue}}元</li>
						<li  :class="item.couponActive?'use':'used'">{{couponUse[item.couponActive]}}</li>
					</ul>
				</div>
				<div class="send-container">
					<input type="text" placeholder="请输入用户手机号码"></input>
					<div class="send-msg">
						<p>{{msg}}</p>
						<a>{{url}}</a>
					</div>

				</div>
				<div class="addToBtn" @click.stop="onSend">发送优惠卷</div>
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
      backTitle: '发送优惠卷',
      couponList:
      [{
        couponCode: '35264',
        couponValue: '89',
        couponActive: 1
      }],
      couponUse: ['已使用', '未使用'],
      title: '苹果（APPLE）iPhone 4S 8G版（白色）',
      price: '￥321',
      msg: '  您的好友送您一张面值48元的苹果iPhone5S 16G的现金优惠券，请尽快通过以下链接进行购买：',
      url: '  http://m.deshouji.com/detail /product_42378.html （使用期限2天）'
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.sendWrapper, {
        click: true
      })
    })
  },
  components: {
    back: back
  },
  methods: {
    onSend: function () {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: '/couponInfo/1'})
    }
  }
}
</script>

<style>
	.send-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.send-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 0.4rem;
		text-align: center;
		
	}
	.send-container{
		display: flex;
		width: 100%;
		flex-direction: column;
		box-sizing: border-box;
		padding: 0.2rem;
		margin-top: 0.2rem;
		background: #fff;
	}
	.send-container input{
		display: block;
	    height: 0.8rem;
	    width: 100%;
	    box-sizing: border-box;
	    border-radius: 0.04rem;
	    border: 0.01rem solid #ccc;
	    padding: 0.05rem 0.1rem;
	    margin-top: 0.15rem;
	    font-size: 0.28rem;
	    outline: none;
	}
	.send-msg {
		box-sizing: block;
		border-radius: 0.04rem;
	    border: 0.01rem solid #ccc;
	    margin-top: 0.2rem;
	    padding: 0.15rem;
	}
	.send-msg p,
	.send-msg a{
		display: block;
		font-size: 0.28rem;
		color: #999;
		text-align: left;
		line-height: 1.5em;
	}

</style>
