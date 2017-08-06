<template>
	<div class="draw-wrapper" ref="drawWrapper">
		<div class="full">
			<div class="draw-content">
				<back :title="backTitle"></back>
				<div class="draw-money">
					未提现收入<br />
					<strong>0.01</strong>元
				</div>
				<div class="apply-for">
					<input type="text" placeholder="提现金额">
					<input type="text" placeholder="请输入密码">
					<div class="addToBtn">提交提现申请</div>
				</div>
				<ul class="chart-tab">
					<li>
						<span>提现时间</span> 
						<span>提现金额</span>
					</li> 
					<li v-for="item in chartTab">
						<span>{{item.time}}</span> 
						<span>
							<strong>{{item.price}}</strong>
							元
						</span>
					</li>										
				</ul>
				<div class="loading">
					<i class="icon-loading"></i>加载中...
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
      backTitle: '提现',
      chartTab:
      [{
        time: '2014-05-13',
        price: '500'
      },
      {
        time: '2014-05-13',
        price: '500'
      },
      {
        time: '2014-05-13',
        price: '500'
      },
      {
        time: '2014-05-13',
        price: '500'
      },
      {
        time: '2014-05-13',
        price: '100'
      },
      {
        time: '2014-05-13',
        price: '200'
      },
      {
        time: '2014-05-13',
        price: '500'
      },
      {
        time: '2014-05-13',
        price: '100'
      },
      {
        time: '2014-05-13',
        price: '100'
      }]
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.drawWrapper, {
        click: true
      })
    })
  },
  components: {
    back: back
  },
  methods: {
  }
}
</script>

<style>
	.draw-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.draw-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 0.4rem;
		text-align: center;
		
	}
	.draw-money{
		width: 100%;
		margin-top: 0.2rem;
		box-sizing: border-box;
		padding: 0.2rem 0.4rem;
		border-radius: 0.04rem;
		background: #fff;
		text-align: left;
	    line-height: 1.5em;
	    font-size: 0.24rem;
	    color: #999;
	}
	.draw-money strong {
	    font-size: 0.4rem;
	    color: #333;
	}
	.apply-for{
	    width: 100%;
	    box-sizing: border-box;
	    padding: 0 0.2rem;
	    margin-top: 0.2rem;
	    background: #fff;
	}
	.apply-for input{
	    display: block;
	    height: 0.8rem;
	    width: 100%;
	    box-sizing: border-box;
	    border-radius: 0.04rem;
	    border: 0.01rem solid #ccc;
	    padding: 0.05rem 0.1rem;
	    margin-top: 0.2rem;
	    font-size: 0.28rem;
	    outline: none;
	}

</style>
