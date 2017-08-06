<template>
	<div class="couponInfo-wrapper" ref="couponInfoWrapper">
		<div class="full">
			<div class="couponInfo-content">
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
					<ul class="table-item" v-for="item in couponList">
						<li>{{item.couponCode}}</li>
						<li>{{item.couponValue}}元</li>
						<li @click="watchActive(item.couponActive)" :class="item.couponActive?'use':'used'">{{couponUse[item.couponActive]}}</li>
					</ul>
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
      backTitle: '优惠券详情',
      couponList:
      [{
        couponCode: '35264',
        couponValue: '89',
        couponActive: 1
      },
      {
        couponCode: '78564',
        couponValue: '30',
        couponActive: 0
      },
      {
        couponCode: '35264',
        couponValue: '10',
        couponActive: 0
      },
      {
        couponCode: '36264',
        couponValue: '24',
        couponActive: 1
      },
      {
        couponCode: '86745',
        couponValue: '40',
        couponActive: 1
      }],
      couponUse: ['已使用', '未使用'],
      title: '苹果（APPLE）iPhone 4S 8G版（白色）',
      price: '￥321'
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.couponInfoWrapper, {
        click: true
      })
    })
  },
  components: {
    back: back
  },
  methods: {
    onUsed: function () {
      if (!event._constructed) {
        return
      }
      console.log('111')
    },
    onUse: function () {
      if (!event._constructed) {
        return
      }
      console.log('222')
    },
    watchActive: function (flag) {
      if (!event._constructed) {
        return
      }
      if (flag) {
        this.$router.push({path: '/send'})
      } else {
        this.$router.push({path: '/orderInfo'})
      }
    }
  }
}
</script>

<style>
	.couponInfo-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.couponInfo-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 0.4rem;
		text-align: center;
		
	}
	.table-wrapper{
		display: flex;
		flex-direction: column;
		width: 100%;
		box-sizing: border-box;
		padding: 0.2rem;
		margin-top: 0.2rem;
		background: #fff;
	}
	.table-wrapper .table-item{
		display: flex;
		width: 100%;
		margin-top: 0.25rem;
		flex-direction: row;
		font-size: 0.28rem;
		height:100%;
	}
	.table-item li{
		display: block;
		flex: 1;
	}
	.table-head{
		display: flex;
		flex-direction: row;
		width: 100%;
	}
	.table-wrapper .table-head h3{
		flex: 1;
		display: block;
		box-sizing: border-box;
		border: 0.04rem solid #fff;
		font-size: 0.28rem;
		padding: 0.18rem 0;
		background: #f6f6f6;
	}
	.use{
		color: #fd4d4d;
	}
	.used{
		color:#812525;
	}
	.showCouponInfo{
	    display: flex;
	    width: 100%;
	    justify-content: column;
	    box-sizing: border-box;
	    background: #fff;
	    padding: 0.15rem;
	    border-top: none;
	    margin-top: 0.2rem;
	}
	.showCouponInfo img{
		width: 1.6rem;
		height: 1.6rem;
	}
	.showCouponInfo h2 {
	    line-height: 1.2em;
	    margin-top: 0.1rem;
	    font-size: 0.4rem;
	    color: #333;
	}
	.showCouponInfo strong {
	    padding-top: 0.1rem;
	    margin-bottom: 1em;
	    font-size: 0.24rem;
	    color: #06c;
	}
	.coupon-info{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		text-align: left;
	}

</style>
