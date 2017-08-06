<template>
	<div class="shop-info-wrapper" ref="shopInfoWrapper">
		<div class="full">
			<div class="shop-info-wrapper-content" >
				<back :title="backTitle"></back>	
				<div class="shop-banner">
			<swiper :options="swiperOption" ref="mySwiperA">
			  <!-- 幻灯内容 -->
			  <swiper-slide>
			  	<div class="phone-container">
					<img src="./l-phone.png" >
			  	</div>
			  </swiper-slide>
			  <swiper-slide>
			  	<div class="phone-container">
					<img src="./l-phone.png" >
			  	</div>
			  </swiper-slide>
			  <swiper-slide>
			  	<div class="phone-container">
					<img src="./l-phone.png" >
			  	</div>
			  </swiper-slide>
			  <!-- ... -->
			  <!-- 以下控件元素均为可选（使用具名slot来确定并应用一些操作控件元素） -->
			  <div class="swiper-pagination s-d"  slot="pagination"></div>
			 
			  <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
			</swiper>
					<div class="shopNmae">
						{{shopName}}
					</div>
					<router-link to="/present">
						<div class="shopInfo">
							商品详细信息
						</div>
					</router-link>
				</div>
				<ul class="shop-pirce">
					<li v-for="item in contentList">
						<strong>{{item.title}}</strong>
						<p>{{item.pirce}}</p>
					</li>					
				</ul>
				<div class="memory">
					内存 : 
					<span @click.stop="onMem(1)" :class="{'active':memIndex===1}" >16G</span>
					<span @click.stop="onMem(2)" :class="{'active':memIndex===2}">32G</span>
				</div>
				<div class="color">
					颜色 : 
					<span @click.stop="onCol(1)" :class="{'active':colIndex===1}">珍珠白</span>
					<span @click.stop="onCol(2)" :class="{'active':colIndex===2}">深蓝灰</span>
					<span @click.stop="onCol(3)" :class="{'active':colIndex===3}">土豪金</span>
				</div>
				<div class="stock">
					库存 : {{stock}}
					已售 : {{out}}
				</div>
				<div class="shop-number">
					数量 : 
					<div>
						<span @click.stop="onDec" class="dec">-</span>
						<input type="text" v-model="number"></input>
						<span @click.stop="onAdd" class="add">+</span>
						
					</div>				
				</div>
				<div class="addToBtn">添加商品到微店</div>
				
			</div>
		</div>
		<div class="bottomBtnGroup">
			<div class="buy" @click.stop="onOrder">代客下单</div>
			<div class="share">分享商品</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import Vue from 'vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import back from '../back/back.vue'

export default {
  data () {
    return {
      stock: '200',
      out: '20',
      number: 1,
      memIndex: 1,
      colIndex: 1,
      backTitle: '商品详情',
      shopName: '苹果（APPLE）iPhone 5S 16G版 4G手机',
      contentList:
      [{
        'title': '销售价 ：',
        'pirce': '￥5999.00'
      },
      {
        'title': '营销价 ：',
        'pirce': '￥5799.00'
      },
      {
        'title': '佣金 ：',
        'pirce': '￥200.00'
      },
      {
        'title': '优惠券 ：',
        'pirce': '(3/5)'
      }],
      swiperOption: {
        autoplay: 3500,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        loop: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    Vue,
    back
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.shopInfoWrapper, {
        click: true
      })
    })
  },
  methods: {
    onMem: function (index) {
      if (!event._constructed) {
        return
      }
      this.memIndex = index
    },
    onCol: function (index) {
      if (!event._constructed) {
        return
      }
      this.colIndex = index
    },
    onAdd: function () {
      if (!event._constructed) {
        return
      }
      this.number = this.number + 1
    },
    onDec: function () {
      if (!event._constructed) {
        return
      }
      if (this.number) {
        this.number = this.number - 1
      }
    },
    onOrder: function () {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: '/order'})
    }
  }
}
</script>

<style>
	.shop-info-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 0.4rem;
		background: #f6f6f6;
		overflow: hidden;
	}
	.shop-info-wrapper-content{
		display: flex;
		width: 100%;
		flex-direction: column;
		text-align: center;
		padding-bottom: 1.2rem;
	}
	.shop-pirce{
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		padding:0.15rem;
		background: #fff;
		margin-top: 0.2rem;
		border: 0.01rem solid #ccc;
	}
	.shop-pirce li{
		display: block;
		display: flex;
		flex: 1;
		height: 0.72rem;
		flex-direction: row;
	}
	.shop-pirce li strong{
		display: block;
		height: 0.72rem;
		width: 1.82rem;
		box-sizing: border-box;
		border: 0.04rem solid #fff;
		line-height: 0.72rem;
		background: #ccc;
		font-size: 0.24rem;
		color: #333;
		text-align: right;
		padding-right: 0.2rem;
	}
	.shop-pirce li p{
		display: block;
		flex: 1;
		height: 0.72rem;
		box-sizing: border-box;
		border: 0.04rem solid #fff;
		line-height: 0.72rem;
		background: rgba(0,0,0,.1);
		font-size: 0.24rem;
		text-align: left;
		padding-left: 0.2rem;
	}
	.memory, .color , .stock , .shop-number{
		width:100%;
		height: 0.8rem;
		box-sizing: border-box;
		border:0.01rem solid #ccc;
		border-top:none;
		line-height: 0.8rem;
		background: #fff;
		font-size: 0.24rem;
		color: #333;
		text-align: left;
		padding-left: 0.2rem;
	}
	.shop-number{
		position: relative;
	}
	.memory span, .color span{
		display: inline-block;
		padding: 0 0.1rem;
		height: 0.4rem;
		line-height: 0.4rem;
		text-align: center;
		background: #ccc;
		color: #333;
		font-size: 0.24rem;
		border-radius: 0.1rem;
	}
	.memory span.active,
	.color span.active{
		background: #333;
		color: #fff;
	}
	.shop-number>div{
		display: inline-block;
		position: absolute;
		display: flex;
		flex-direction: row;
		height: 0.4rem;
		font-size: 0;
		top: 50%;
		left: 1rem;
		transform: translateY(-50%);
		border:0.02rem solid #ccc;
	}
	.dec,
	.add{
		height: 0.4rem;
		width: 0.4rem;
		font-size: 0.24rem;
		line-height: 0.4rem;
		text-align: center;
		
	}
	.dec{
		border-right: 0.02rem solid #ccc;
	}
	.add{
		border-left: 0.02rem solid #ccc;
	}
	.shop-number>div input{
		display: block;
		width: 0.6rem;
		height: 0.4rem;
		box-sizing: border-box;
		padding: 0 0.1rem;
		outline: none;
		text-align: center;
		font-size: 0.24rem;
	}
	.addToBtn{
		display: block;
	    height: 0.9rem;
	    width: 100%;
	    margin: 0.2rem auto 0.2rem;
	    border-radius: 0.04rem;
	    border: 0.01rem solid #e4cce8;
	    background: #539cd1;
	    color: #fff;
	    font-size: 0.28rem;
	    text-align: center;
	    line-height: 0.9rem;
		
	}
	.bottomBtnGroup{
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 0.9rem;
		flex-direction: row;
		background: rgba(0,0,0,0.7);
		align-items: center;
		
	}
	.buy,
	.share{
		flex: 1;
		height: 0.72rem;
		
		box-sizing: border-box;
		margin:0.1rem;
		
		font-size: 0.28rem;
		border-radius: 0.06rem;
		color:#fff;
		text-align: center;
		line-height: 0.8rem;

	}
	.buy{
		background: #33cc99;
	}
	.share{
		background: #ff9933;
	}
	.shop-banner{
		margin-top: 0.2rem;
	}
	.shopNmae,
	.shopInfo{
		height: 0.8rem;
		box-sizing: border-box;
		border:0.01rem solid #ccc;
		border-top:none;
		line-height: 0.8rem;
		background: #fff;
		font-size: 0.24rem;
		color: #333;
		text-align: left;
		padding-left: 0.2rem;
	}
	.shopNmae{
		position: relative;
	}
	.shopNmae:before{
		content: "";
		position: absolute;
		width: 100%;
		height: 0.6rem;
		background: rgba(0,0,0,0.4);
		left: 0;
		top: 0;
		transform: translateY(-100%);
		z-index: 9999;
	}
	.shopInfo{
		background: url(./right-arrow.png)right 0.2rem center no-repeat,#fff;
		background-size: 0.2rem;
		padding-right: 0.2rem;

	}
	.phone-container{
		height: 5.7rem;
		width: 100%;
		background:#fff;
		
		position: relative;
	}
	.phone-container img{
		display: block;
		width: 4rem;
		height: 4rem;
		position: absolute;
		left: 50%;
		top: 45%;
		transform: translate(-50%,-50%);
	}
	.s-d .swiper-pagination-bullet {
	    width: 0.1rem;
	    height: 0.1rem;
	    display: inline-block;
	    border-radius: 100%;
	}


</style>
