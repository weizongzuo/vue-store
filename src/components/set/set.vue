<template>
	<div class="set-wrapper" ref="setWrapper">
		<div class="full">
			<div class="set-content">
				<back :title="backTitle"></back>
				<div class="set-head">
					<img src="./head-img.png" ref="setPhoto">
					<!-- <h3>点击此处更换头像</h3> -->
					<a href="javascript:;">
						点击此处更换头像
						<input type="file" @change="onFile"></input>
					</a>
					
				</div>
				<div class="purchaser-info">
					<div class="order-head">店铺设置</div>
					<div class="inputGroup">
						<input type="text" placeholder="店铺名称">
						<input type="text" placeholder="店铺描述">
						<div class="realm" @click.stop="onInput">
							<input type="text"  placeholder="店铺域名">
							<i class="realm-text" v-show="inputFlag">{{web}}</i>	
						</div>
					</div>
				</div>
				<div class="addToBtn" @click.stop="onBuy">保存</div>
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
      backTitle: '微店设置',
      web: '.m.youhui6.com',
      inputFlag: true
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.setWrapper, {
        click: true
      })
    })
  },
  components: {
    back: back
  },
  methods: {
    onBuy: function () {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: '/more'})
    },
    onInput: function () {
      this.inputFlag = false
    },
    onFile: function (event) {
      var that = this
      const file = event.target.files[0]
      if (!file.type.match('image.*')) {
        return
      }
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function (arg) {
        const url = arg.currentTarget.result
        that.$refs.setPhoto.src = url
      }
    }
  }
}
</script>

<style>
	.set-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.set-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 0.4rem;
		text-align: center;
		color: #fff;
		
	}
	.inputGroup .realm{
		position: relative;
		margin-bottom: 0.15rem;
	}
	.inputGroup .realm i{
		position: absolute;
		width:0.5rem;
		height: 0.8rem;
		top: 0;
		right: 6em;
		line-height: 0.8rem;
		font-size: 0.28rem;
		font-style: normal;
		color: #999;
	}
	.set-head{
		display: flex;
		width: 100%;
		flex-direction: row;
		align-items: center;
		box-sizing: border-box;
		margin-top: 0.2rem;
		padding: 0.2rem;
		border-radius: 0.04rem;
		border:0.01rem solid #ccc;
		background: #fff;
	}
	.set-head img{
		display: block;
		width: 1.42rem;
		height: 1.42rem;
		flex: 0 0 1.42rem;
	}
	.set-head h3{
		flex: 1;
		box-sizing: border-box;
		padding-left: 0.4rem;
		font-size: 0.28rem;
		color: #ccc;
		text-align: left;
	}
	.set-head a{
		display: inline-block;
		flex: 1;
		height: 1.42rem;
		box-sizing: border-box;
		padding-left: 0.4rem;
		font-size: 0.28rem;
		position: relative;
		color: #ccc;
		text-align: left;
		line-height: 1.42rem;
	}
	.set-head a input{
		display: block;
		position: absolute;
	    font-size: 0.28rem;
	    height: inherit;
	    right: 0;
	    top: 0;
	    opacity: 0;
	}
</style>
