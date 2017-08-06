<template>
	<div class="salesManagement-wrapper" ref="salesManagementWrapper">
		<div class="full">
			<div class="salesManagement-content">
				<back :title="backTitle"></back>
				<section class="sales-container">
					<div class="purchaser-info" v-for="item in chartInfo" @click.stop="onChart">
						<div class="order-head">{{item.title}}</div>
						<div class="chart-contarner">
							<img src="./chart-img.png" >
						</div>
						<div class="chart-info">
							<p>今天 :
								<strong>{{item.new}}</strong>
							</p>
							<p>昨天 :
								<strong>{{item.old}}</strong>
							</p>
						</div>
					</div>
				</section>
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
      backTitle: '销售管理',
      chartInfo:
      [{
        title: '成交订单',
        new: '0',
        old: '0'
      },
      {
        title: '成交金额',
        new: '￥0',
        old: '￥0'
      },
      {
        title: '每日访客',
        new: '0',
        old: '0'
      }]
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.salesManagementWrapper, {
        click: true
      })
    })
  },
  components: {
    back: back
  },
  methods: {
    onChart () {
      this.$router.push({path: '/salesInfo'})
    }
  }
}
</script>

<style>
	.salesManagement-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.salesManagement-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 0.4rem;
		text-align: center;	
	}
	.chart-contarner{
		width: 100%;
		box-sizing: border-box;
		padding: 0.15rem;
		border-bottom: 0.01rem solid #ccc;
	}
	.chart-contarner img{
		width: 100%;
	}
	.chart-info {
		display: flex;
		flex-direction: row;
	}
	.chart-info p{
		flex: 1;
		height: 0.8rem;
		box-sizing: border-box;
		padding-left: 0.2rem;
		border-right: 0.01rem solid #ccc;
		font-size: 0.28rem;
		text-align: left;
		line-height: 0.8rem;
	}
	.chart-info p:last-child{
		border-right: none;
	}
	.chart-info p:first-child strong{
		color:#0066cc;
	}
	.chart-info p:last-child strong{
		color:#000;
	}
	.sales-container{
		width: 100%;
		margin-bottom: 0.2rem;
	}
	
</style>
