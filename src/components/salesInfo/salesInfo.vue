<template>
	<div class="salesInfo-wrapper" ref="salesInfoWrapper">
		<div>
			<div class="salesInfo-content">
				<back :title="backTitle"></back>
				<div class="purchaser-info" >
					<div class="order-head">{{chartInfo.title}}</div>
					<div class="chart-contarner">
						<img src="./chart-img.png" >
					</div>
				</div>
				<ul class="chart-tab">
					<li>
						<span>成交时间</span>
						<span>成交订单</span>
					</li>
					<li v-for="item in chartTab">
						<span>{{item.time}}</span>
						<span>
						<strong>{{item.number}}</strong>
						单</span>
					</li>
				</ul>
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
      backTitle: '成交订单',
      chartInfo:
      {
        title: '成交订单'
      },
      chartTab:
      [{
        time: '2014-05-13',
        number: '0'
      },
      {
        time: '2014-05-13',
        number: '0'
      },
      {
        time: '2014-05-13',
        number: '0'
      },
      {
        time: '2014-05-13',
        number: '0'
      },
      {
        time: '2014-05-13',
        number: '0'
      },
      {
        time: '2014-05-13',
        number: '0'
      },
      {
        time: '2014-05-13',
        number: '0'
      },
      {
        time: '2014-05-13',
        number: '0'
      },
      {
        time: '2014-05-13',
        number: '0'
      }]
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.salesInfoWrapper, {
        click: true
      })
    })
  },
  components: {
    back: back
  }
}
</script>

<style>
	.salesInfo-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.salesInfo-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		width: 6.12rem;
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
	.chart-tab{
		display: flex;
		flex-direction: column;
		margin-top: 0.2rem;
		margin-bottom: 0.2rem;
		width: 100%;
		box-sizing: border-box;
		border-radius: 0.04rem;
		border: 0.01rem solid #ccc;
		font-size: 0.28rem;
		background: #fff;
	}
	.chart-tab li {
		display: flex;
		height: 0.8rem;
		line-height: 0.8rem;
		border-bottom: 0.01rem solid #ccc;
		width: 100%;
		flex-direction: row;
		background: #fff;
	}
	.chart-tab li:last-child{
		border-bottom:none;
	}
	.chart-tab li:first-child{
		background: #fafafa;
	}
	.chart-tab li span:nth-child(odd){
		flex: 2;
		margin-left: 0.2rem;
		text-align: left;
		border-right: 0.01rem solid #ccc;
	}
	.chart-tab li span:nth-child(even){
		flex: 1;
		margin-right: 0.2rem;
		text-align: right;
	}
	.chart-tab li strong{
		color:#06c;
	}

</style>
