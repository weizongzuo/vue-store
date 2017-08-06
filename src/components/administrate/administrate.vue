<template>
	<div class="administrate-wrapper" ref="administrateWrapper">
		<div class="full">
			<div class="administrate-content">
				<back :title="backTitle"></back>
				<div class="aWrapper">
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
      backTitle: '商品管理',
      gType: true,
      showList: true,
      showBtn: true,
      showCoupon: false
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.administrateWrapper, {
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
	.administrate-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.administrate-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 0.4rem;
		text-align: center;
		
		
	}
	.aWrapper{
		width: 100%;
		margin-top: 0.15rem;
	}
	
</style>
