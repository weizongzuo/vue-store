<template>
	<div class="coupon-wrapper" ref="couponWrapper">
		<div class="full">
			<div class="coupon-content">
				<back :title="backTitle"></back>
				<div class="cWrapper">
					<goodsList :gType="gType" :showList="showList" :showBtn="showBtn" :showCoupon="showCoupon"></goodsList>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import back from '../back/back.vue'
import goodsList from '../goodsList/goodsList.vue'

export default {
  data () {
    return {
      backTitle: '优惠卷管理',
      gType: true,
      showList: false,
      showBtn: false,
      showCoupon: true
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.couponWrapper, {
        click: true
      })
    })
  },
  components: {
    back: back,
    goodsList: goodsList
  }
}
</script>

<style>
	.coupon-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.coupon-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 0.4rem;
		text-align: center;
		
		
	}
	.cWrapper{
		margin-top: 0.15rem;
	}
	
</style>
