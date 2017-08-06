<template>
	<div class="present-wrapper" ref="presentWrapper">
		<div class="present-wrapper-content ">
			<back :title="backTitle"></back>
			<div class="present-container">
				<ul class="present-nav">
					<li v-for="(title, index) in navTitle" @click.stop="onTab(index)" :class="{'active':navIndex == index}">{{title}}</li>
				</ul>
                <present-info :containerIndex = "navIndex" :tabLength = "navTitle"></present-info>
			</div>
			<div class="addToBtn">添加商品到微店</div>
		</div>
		<div class="bottomBtnGroup">
			<div class="buy" @click.stop="onOrder">代客下单</div>
			<div class="share">分享商品</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import presentInfo from '../presentInfo/presentInfo.vue'
import back from '../back/back.vue'

export default {
  data () {
    return {
      navTitle: ['商品介绍', '规格参数', '包装清单', '售后服务'],
      navIndex: 0,
      backTitle: '商品详情'
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.presentWrapper, {
        click: true
      })
    })
  },
  methods: {
    onTab: function (index) {
      if (!event._constructed) {
        return
      }
      this.navIndex = index
      this.$nextTick(() => {
        if (this.scroll) {
          this.scroll.refresh()
        } else {
          this.scroll = new BScroll(this.$refs.presentWrapper, {
            click: true
          })
        }
      })
    },
    onOrder: function () {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: '/order'})
    }
  },
  components: {
    presentInfo,
    back
  }
}
</script>

<style>
	.present-wrapper-content{
		    width: 100%;
		    box-sizing: border-box;
		    padding:  0 0.2rem 1.5rem 0.2rem;
	}
	.present-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 0.4rem;
		background: #f6f6f6;
		overflow: hidden;
	}
	.present-container{
		width: 100%;
	}
	.present-nav{
		display: flex;
		justify-content: center;
		flex-direction: row;
		box-sizing: border-box;
		border-radius: 0.04rem;
		border:0.01rem solid #ccc;
		margin-top: 0.2rem;
		background: #fff;
		width: 100%;
		height: 0.8rem;
	}
	.present-nav li{
		display: block;
		flex: 1;
		font-size: 0.26rem;
		color: #333;
		text-align: center;
		line-height: 0.8rem;
		border-right: 0.01rem solid #ccc;
	}
	.present-nav li:last-child{
		border-right: none;
	}
	.present-nav li.active{
		color: #06c;
		border-bottom: 0.02rem solid #06c;
	}

</style>
