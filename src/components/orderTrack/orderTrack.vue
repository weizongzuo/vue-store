<template>
	<div class="orderTrack-wrapper" ref="orderTrackWrapper">
		<div class="full">
			<div class="orderTrack-content">
				<back :title="backTitle"></back>
				<div class="order2-shop-info">
					<div class="order-head">订单追踪</div>
					<ul class="track">
						<li v-for="item in trackInfo">
							<i>{{item.time}}</i>
							<p>{{item.msg}}</p>
						</li>
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
      backTitle: '订单追踪',
      trackInfo:
      [{
        time: '2014-05-15 09：17',
        msg: '货物已交付顺丰快递，运单号为 789580235'
      },
      {
        time: '2014-05-15 09：17',
        msg: '货物已交付顺丰快递，运单号为 789580235'
      },
      {
        time: '2014-05-15 09：17',
        msg: '货物已交付顺丰快递，运单号为 789580235'
      },
      {
        time: '2014-05-15 09：17',
        msg: '货物已交付顺丰快递，运单号为 789580235'
      }]
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.orderTrackWrapper, {
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
	.orderTrack-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.orderTrack-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 0.4rem;
		text-align: center;
		
	}
	.track{
		width: 100%;
		
	}
	.track li{
		width: 100%;
		box-sizing: border-box;
		padding: 0.2rem;
		border-bottom:0.01rem solid #ccc;
		text-align: left;
		font-size: 0.28rem;
	}
	.track li:last-child{
		border-bottom: none;
	}
	.track li i{
		display: block;
		color: #999;
		font-style: normal;
	}
	.track li p {
		margin-top: 0.2rem;
		color:#333;

	}
	
</style>
