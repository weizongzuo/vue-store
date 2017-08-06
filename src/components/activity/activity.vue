<template>
	<div class="activity-wrapper" ref="activityWrapper">
		<div class="full">
			<div class="activity-content">
				<div class="a-c-info">
					<h1>{{title}}</h1>
					<p>{{subtitle}}</p>
				</div>		
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      title: '月销售冠军礼品大派送',
      subtitle: '活动时间：2014年05月01日 - 2014年05月31日'
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.activityWrapper, {
        click: true
      })
    })
  }
}
</script>

<style>
	.activity-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.activity-content{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 2.52rem;
		margin-top: 0.4rem;
		text-align: center;
		background: #539cd1;
		color: #fff;
		
	}
	.a-c-info{
	
		
	}
	.activity-content h1{
		font-size: 0.4rem;
		margin-bottom: 0.2rem;
	}
	.activity-content p{
		font-size: 0.24rem;
		color: #FFFF00;

	}
</style>
