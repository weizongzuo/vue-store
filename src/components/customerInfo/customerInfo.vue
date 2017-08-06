<template>
	<div class="customerInfo-wrapper" ref="customerInfoWrapper">
		<div class="full">
			<div class="customerInfo-content">
				<back :title="backTitle"></back>
				<div class="purchaser-info">
					<div class="order-head">客户详情</div>
					<div class="user-name">
						<p>{{name}}</p>
					</div>
					<div class="user-phone">
						<p>{{phone}}</p>
					</div>
					<div class="user-email">
						<p>{{email}}</p>
					</div>
					<div class="user-adds">
						<p>{{adds}}</p>
					</div>	
					<div class="user-other">
						<p> 购买次数:{{number}}次</p>
					</div>
					<div class="user-other">
						<p>交易金额:{{money }}元</p>
					</div>
					
				</div>
				<div class="addToBtn" @click.stop="onInfo">查看交易详情</div>
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
      backTitle: '客户详情',
      web: '.m.youhui6.com',
      inputFlag: true,
      name: '刘祥龙',
      phone: '13641103305',
      adds: '北京市东城区夕照寺大街2号北京电信工程局10层产品中心',
      email: 'liuxl@c-platform.com',
      number: '1',
      money: '5999.00'
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.customerInfoWrapper, {
        click: true
      })
    })
  },
  components: {
    back: back
  },
  methods: {
    onInfo: function () {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: '/deal'})
    }
  }
}
</script>

<style>
	.customerInfo-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.customerInfo-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 0.4rem;
		text-align: center;
		color: #fff;
		
	}
	
</style>
