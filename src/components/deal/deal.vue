<template>
	<div class="deal-wrapper" ref="dealWrapper">
		<div class="full">
			<div class="deal-content">
				<back :title="backTitle"></back>
				<ul class="deal-container">
					<li v-for="item in dealList" @click="onDeal">
						<div>
							<header>
								{{item.time}}
								<span>{{item.active}}</span>
							</header>
							<div class="deal-item" >
								<div class="deal-main" v-for="_item in item.dealInfo">
									<img src="./phone-img.png" >
									<div class="show-info">
										<h2>{{_item.title}}</h2>
										<p>内存:{{_item.memory}} 颜色:{{_item.color}}</p>
										<strong>￥{{_item.price}} x {{_item.number}}</strong>
									</div>
								</div>								
							</div>
						</div>
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
      backTitle: '交易详情',
      dealList:
      [{
        time: '2014-05-13 17:23:06',
        active: '已完成',
        dealInfo:
        [{
          title: '苹果（APPLE）iPhone 4S 8G版（3G版）',
          memory: '32G',
          color: '黑色',
          price: '5999.00',
          number: '1'
        }]
      },
      {
        time: '2014-05-13 17:23:06',
        active: '已完成',
        dealInfo:
        [{
          title: '苹果（APPLE）iPhone 4S 8G版（3G版）',
          memory: '32G',
          color: '黑色',
          price: '5999.00',
          number: '1'
        },
        {
          title: '苹果（APPLE）iPhone 4S 8G版（3G版）',
          memory: '32G',
          color: '黑色',
          price: '5999.00',
          number: '1'
        }]
      },
      {
        time: '2014-05-13 17:23:06',
        active: '已完成',
        dealInfo:
        [{
          title: '苹果（APPLE）iPhone 4S 8G版（3G版）',
          memory: '32G',
          color: '黑色',
          price: '5999.00',
          number: '1'
        }]
      },
      {
        time: '2014-05-13 17:23:06',
        active: '已完成',
        dealInfo:
        [{
          title: '苹果（APPLE）iPhone 4S 8G版（3G版）',
          memory: '32G',
          color: '黑色',
          price: '5999.00',
          number: '1'
        }]
      },
      {
        time: '2014-05-13 17:23:06',
        active: '已完成',
        dealInfo:
        [{
          title: '苹果（APPLE）iPhone 4S 8G版（3G版）',
          memory: '32G',
          color: '黑色',
          price: '5999.00',
          number: '1'
        }]
      },
      {
        time: '2014-05-13 17:23:06',
        active: '已完成',
        dealInfo:
        [{
          title: '苹果（APPLE）iPhone 4S 8G版（3G版）',
          memory: '32G',
          color: '黑色',
          price: '5999.00',
          number: '1'
        }]
      }]
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.dealWrapper, {
        click: true
      })
    })
  },
  components: {
    back: back
  },
  methods: {
    onDeal: function () {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: '/orderInfo'})
    }
  }
}
</script>

<style>
	.deal-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.deal-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 0.4rem;
		text-align: center;
		color: #fff;
		
	}
	.deal-container{
		width: 100%;
		margin-top: 0.2rem;
	}
	.deal-container li{
		margin-bottom: 0.2rem;
	}
	.deal-container li >div{
		display: flex;
		flex-direction: column;
		border-radius: 0.04rem;
		background: #fff;
		font-size: 0.24rem;
		color: #333;
		overflow: hidden;
	}
	.deal-container li div header{
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding:  0.2rem;
		border-bottom: 0.01rem dashed #ccc;
		background: url(./time-icon.png)left 0.2rem center no-repeat /0.35rem;
		text-indent: 2em;
	}
	.deal-container li div header span{
		color: #fd4d4d;
	}
	.deal-main {
	    display: flex;
	    justify-content: row;
	    box-sizing: border-box;
	    padding: 0.15rem;
	    border-top: none;
	}
	.deal-main img {
	    width: 1.6rem;
	    height: 1.6rem;
	}
	.deal-item{
		background: url(./right-arrow.png)right 0.2rem center no-repeat /0.15rem 0.25rem;
	}
	
</style>
