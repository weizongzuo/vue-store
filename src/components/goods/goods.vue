<template>
	<div class="goods-wrapper" ref="goodsWrapper">
		<div class="full-wrapper">
			<nav class="goods-nav">
				<ul class="g-nav">
					<li>
						佣金排序
						<i class="icon-tri"></i>
					</li>
					<li @click.stop="onSub">
						分类导航
						<i class="icon-tri"></i>
						<ul v-show="isShow" class="g-sub-nav">
							<li v-for="item in subTitle">
								{{item.title}}
							</li>							
						</ul>
					</li>
				</ul>
			</nav>
			<div class="goodsListContainer">
				<goodsList :gType="gType" :showList="showList" :showCoupon="showCoupon"></goodsList>
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
      isShow: false,
      gType: true,
      showList: true,
      showCoupon: false,
      subTitle:
      [{
        title: '三星'
      },
      {
        title: '苹果'
      },
      {
        title: '华为'
      },
      {
        title: 'HTC'
      },
      {
        title: '小米'
      }]
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.goodsWrapper, {
        click: true
      })
    })
  },
  methods: {
    onSub: function () {
      this.isShow = !this.isShow
    }
  },
  components: {
    goodsList: goodsList
  }
}
</script>

<style>
	.goods-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
		margin-top: 0.15rem;
	}
	.goods-content{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 6.12rem;
		height: 2.52rem;
		
		text-align: center;
		background: #539cd1;
		color: #fff;
		
	}
	.goods-nav {
		height: 0.8rem;
		width: 100%;
		box-sizing: border-box;
		background:#ddd;
		border-bottom:0.01rem solid #ccc; 
	}
	.goods-nav .g-nav{
		display: flex;
		flex-direction: row;
		height: initial;
		width: initial;
	}
	.goods-nav .g-nav>li{
		display: inline-block;
		flex: 1;
		position: relative;
		font-size: 0.24rem;
		line-height: 0.8rem;
		text-align: center;
		color: #333;
		border-right: 0.01rem solid #ccc; 
	}
	.goods-nav .g-nav>li:last-child{
		border-right:none;

	}
	.goods-nav .icon-tri{
		display: inline-block;
		
		border: 0.1rem solid transparent;
		border-top-color: #999;
		width: 0;
		height: 0;
		vertical-align: middle;
	}
	.g-sub-nav{
		position: absolute;
		top: 0.8rem;
		width: 100%;
	}
	.g-sub-nav>li{
		box-sizing: border-box;
		background: #eee;
		border:0.01rem solid #ccc;
		border-top: none;
	}
.full-wrapper{
	width: 100%;
}
.goodsListContainer{
	width: 100%;
	box-sizing: border-box;
	padding: 0 0.2rem;
}
</style>
