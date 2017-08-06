<template>
	<div class="orderInfo-wrapper" ref="orderInfoWrapper">
		<div class="full">
			<div class="orderInfo-content">
				<back :title="backTitle"></back>
				<ul class="order-active">
					<li>
						订单类型 :
						<strong>{{orderType}}</strong>
					</li>
					<li>
						订单状态 :
						<strong>{{orderActive}}</strong>
					</li>
				</ul>
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
					<div class="order-head">已选购商品</div>
					<div class="order-main">
						<img src="./phone-img.png" >
						<div class="show-info">
							<h2>{{shopTitle}}</h2>
							<p>内存:{{memory}} 颜色:{{color}}</p>
							<strong>￥{{price}}</strong>
						</div>
					</div>
					<div class="order-item order-a">
						<p>
							订单优惠
						
							<strong>
								未使用优惠卷
							</strong>
						</p>
					</div>
					<div class="order-item order-p">
						<p>
							订单总价
						
							<strong>
								￥{{price}}
							</strong>
						</p>
					</div>
					<div class="order-item order-b">
						<p>
							佣金返还
						
							<strong>
								￥{{commision}}
							</strong>
						</p>
					</div>
				</div>
				<div class="order2-shop-info">
					<div class="order-head">订单信息</div>
					<div class="order-item order-code">
						<p>
							订单编号						
							<strong>
								{{code}}
							</strong>
						</p>
					</div>
					<div class=" order-item order-place">
						<p>
							下单时间
						
							<strong>
								{{place}}
							</strong>
						</p>
					</div>	
					<div class="order-item order-time">
						<p>
							付款时间
						
							<strong>
								{{time}}
							</strong>
						</p>
					</div>	
					<div class="order-item order-send">
						<p>
							发货时间
						
							<strong>
								{{send}}
							</strong>
						</p>
					</div>	
					<div class="order-item order-copy">
						<p>
							物流公司
						
							<strong>
								{{copy}}
							</strong>
						</p>
					</div>				
				</div>
				<div class="addTrack" @click="onTrack">订单追踪</div>
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
      backTitle: '订单详情',
      name: '刘祥龙',
      phone: '13641103305',
      adds: '北京市东城区夕照寺大街2号北京电信工程局10层产品中心',
      msg: '请尽快发货',
      shopTitle: '苹果（APPLE）iPhone 4S 8G版（3G版）',
      price: '5999.00',
      number: '1',
      memory: '32G',
      color: '黑色',
      commision: '200.00',
      orderType: '直接付款',
      orderActive: '已关闭',
      code: '3733545',
      place: '2014-05-13 10：11：47',
      time: '2014-05-13 10：11：47',
      send: '2014-05-13 10：11：47',
      copy: '顺丰快递'

    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.orderInfoWrapper, {
        click: true
      })
    })
  },
  components: {
    back: back
  },
  methods: {
    onTrack () {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: '/orderTrack'})
    }
  }
}
</script>

<style>
	.orderInfo-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.orderInfo-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 0.4rem;
		text-align: center;	
	}
	.order-active{
		display: flex;
		flex-direction: column;
		width: 100%;
		box-sizing: border-box;
		border-radius: 0.04rem;
		border: 0.01rem solid #ccc;
		margin-top: 0.2rem;
		background: #fff;
	}
	.order-active li{
		height: 0.8rem;
		width: 100%;
		box-sizing: border-box;
		font-size: 0.28rem;
		line-height: 0.8rem;
		border-bottom: 0.01rem solid #ccc;
		padding-left: 0.2rem;
		text-align: left;
	}
	.order-active li strong{
		color: #fd4d4d;
	}
	.order-active li:last-child{
		border-bottom: none;
	}
	.order-item{
		line-height: 1.5em;
	    font-size: 0.28rem;
	    text-align: left;
	    border-bottom: 0.01rem solid rgb(204, 204, 204);
	    padding: 0.2rem 0px;
	}
	.order-item p{
		width: 100%;
	    box-sizing: border-box;
	    padding-left: 0.75rem;
	}
	.order-a{
		color: #000;
	    background: url(./5.png)left 0.2rem center no-repeat;
	    background-size: 0.35rem;
	}
	.order-a strong{
		color: #999;
	}
	.order-p{
		color: #000;
	    background: url(./6.png)left 0.2rem center no-repeat;
	    background-size: 0.35rem;
	}
	.order-p strong{
		color: #06c;
	}
	.order-b{
		color: #000;
	    background: url(./7.png)left 0.2rem center no-repeat;
	    background-size: 0.35rem;
	}
	.order-b strong{
		color:#fd4d4d;
	}
	.order-code strong,
	.order-place strong,
	.order-send strong,
	.order-time strong,
	.order-copy strong{
		color: #999;
	}
	.order-code{
		background: url(./8.png)left 0.2rem center no-repeat /0.35rem;
	}
	.order-place{
		background: url(./9.png)left 0.2rem center no-repeat /0.35rem;
	}
	.order-send{
		background: url(./10.png)left 0.2rem center no-repeat /0.35rem;
	}
	.order-time{
		background: url(./11.png)left 0.2rem center no-repeat /0.35rem;
	}
	.order-copy{
		background: url(./12.png)left 0.2rem center no-repeat /0.35rem;
	}
	.addTrack{
		display: block;
	    height: 0.9rem;
	    width: 100%;
	    margin: 0.2rem auto 0.2rem;
	    border-radius: 0.04rem;
	    border: 0.01rem solid #339999;
	    background: #33cc99;
	    color: #fff;
	    font-size: 0.28rem;
	    text-align: center;
	    line-height: 0.9rem;
	}
	
</style>
