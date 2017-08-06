<template>
	<div class="goods-list-wrapper">
		<div class="goods-list-container">
			<div class="goods-list clear">
				<div class="goods-item" :class="gType?'text-left':''" v-for="(item, index) in goods" @click.stop="onInfo(index)" >
					<img src="./2.png" >
					<p >{{item.title}}</p>
					<strong v-if="showPrice">￥{{item.price}}</strong>
          <strong v-if="showList" class="g-pirce">售价:￥{{item.price}}</strong>
          <strong v-if="showList" class="g-brokerage">佣金:￥{{item.brokerage}}</strong>
          <div class="delBtn" v-if="showBtn" @click.stop="onDel(index)">删除</div>
          <div class="goodsValue" v-if="showCoupon">
            <p>面值:
              <strong>{{item.goodsValue}}元</strong>
            </p>
            <p>优惠券数量: ({{item.coupon}})</p>
            <div class="showCoupon" @click.stop="onCoupon(index)">
              查看优惠券
            </div>
          </div>
				</div>				
			</div>		
		</div>
		<div class="loading" v-if="goods.length"><i class="icon-loading"></i>加载中...</div>
	</div>
</template>

<script>
export default {
  props: {
    gType: {
      type: Boolean
    },
    showList: {
      type: Boolean
    },
    showPrice: {
      type: Boolean
    },
    showBtn: {
      type: Boolean
    },
    showCoupon: {
      type: Boolean
    }
  },
  data () {
    return {
      goods:
      [{
        url: '....',
        title: '苹果（APPLE）iPhone 4S 8G版（白色）',
        price: '2398.00',
        brokerage: '500',
        goodsValue: 10,
        coupon: '3/5'
      },
      {
        url: '....',
        title: '三星 Galaxy S4 I9508 3G手机（皓月白）',
        price: '2999.00',
        brokerage: '200',
        goodsValue: 80,
        coupon: '2/5'
      },
      {
        url: '....',
        title: '魅族 MX3 16G 3G手机（前黑后白）',
        price: '1799.00',
        brokerage: '290',
        goodsValue: 20,
        coupon: '4/5'
      },
      {
        url: '....',
        title: '中兴 红牛 V5 4G手机（前黑后白）',
        price: '899.00',
        brokerage: '200',
        goodsValue: 57,
        coupon: '3/5'
      },
      {
        url: '....',
        title: '努比亚 (nubia）小牛2 Z5S mini (前黑后白）',
        price: '1499.00',
        brokerage: '200',
        goodsValue: 40,
        coupon: '3/5'
      },
      {
        url: '....',
        title: '三星 Galaxy S4 I959 电信3G手机（蓝色）',
        price: '2899.00',
        brokerage: '200',
        goodsValue: 230,
        coupon: '3/5'
      },
      {
        url: '....',
        title: '华为 荣耀3C （白色）3G手机',
        price: '1099.00',
        brokerage: '700',
        goodsValue: 13,
        coupon: '3/5'
      },
      {
        url: '....',
        title: '三星 Galaxy S3 I9308 3G手机 (云石白) ',
        price: '1999.00',
        brokerage: '250',
        goodsValue: 40,
        coupon: '3/5'
      },
      {
        url: '....',
        title: '华为 麦芒B199 电信3G手机（白色）',
        price: '1699.00',
        brokerage: '200',
        goodsValue: 220,
        coupon: '3/5'
      },
      {
        url: '....',
        title: 'HTC Desire 816t 4G手机（自由灰）',
        price: '1999.00',
        brokerage: '200',
        goodsValue: 100,
        coupon: '1/5'
      }],
      titleLeft: true
    }
  },
  methods: {
    onInfo: function (index) {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: '../shopInfo/' + index})
    },
    onCoupon: function (index) {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: '/couponInfo/' + index})
    },
    onDel: function (index) {
      this.goods.splice(index, 1)
    }
  }
}
</script>

<style>
.goods-list-wrapper{
	width: 100%;
	height: 100%;
	display: flex;
  box-sizing: border-box;
	margin-top: 0.2rem;
	flex-direction: column;
	background: #f6f6f6;
}
.goods-list-container{
	overflow: hidden;
}

.goods-item{
	padding-top: 0.15rem;
    max-width: 2.9rem;
    padding: 0.2rem 0;
    box-sizing: border-box;
    margin-bottom: 0.1rem;
    border-radius: 0.04rem;
    font-size: 0;
    background: #fff;

}
.goods-list .goods-item:nth-child(odd){
  float: left;
  border-right: 0.1rem solid #f6f6f6;
}
.goods-list .goods-item:nth-child(even){
  float: right;
  border-left: 0.1rem solid #f6f6f6;
}

.goods-item img{
	display: block;

	margin: 0 auto;
	width: 2.5rem;
	height: 2.5rem;
}
.goods-item p{
	box-sizing: border-box;
	padding:0.2rem 0.2rem 0 0.2rem;
	line-height: 1.2em;
  
	font-size: 0.24rem;
  word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.goods-item >p{
height: 3.2em;
}
.goods-item strong{
	display: block;
	box-sizing: border-box;
	padding:0 0.2rem;
	font-size: 0.24rem;
  line-height: 1.2em;
	color: #06c;
	
}
.loading{
	display: block;
	height: 0.9rem;
	width: 100%;
	margin: 0 auto ;
  margin-bottom: 0.2rem;
	border-radius: 0.04rem;
	border:none;
	background:#fff;
	font-size: 0.28rem;
	color: #333;
	text-align: center;
	line-height: 0.9rem;
}
.icon-loading{
	display: inline-block;
	width: 0.3rem;
	height: 0.3rem;
	vertical-align: middle;
	margin-right: 0.1rem;
	margin-bottom: 0.05rem;
	background: url(./icon-loading.gif) center center no-repeat;
	background-size: 0.3rem ;
}
.text-left{
  text-align: left;
}
.goods-item strong.g-brokerage{
  color: #fd4d4d;
}
.delBtn{
  height: 0.6rem;
  box-sizing: border-box;
  background: #cc3333;
  border:0.01rem solid #993300;
  margin: 0.15rem 0.2rem 0 0.2rem;
  border-radius: 0.04rem;
  color: #fff;
  font-size: 0.28rem;
  text-align: center;
  line-height: 0.6rem;
}
.showCoupon{
  height: 0.6rem;
  box-sizing: border-box;
  background: #ff9933;
  border:0.01rem solid #cc6633;
  margin: 0.15rem 0.2rem 0 0.2rem;
  border-radius: 0.04rem;
  color: #fff;
  font-size: 0.28rem;
  text-align: center;
  line-height: 0.6rem;
}
.goodsValue strong{
  display: inline-block;
  text-align: left;
  padding: 0;
  color: #fd4d4d;
}
.goodsValue p {
  padding-top: 0;
}
</style>
