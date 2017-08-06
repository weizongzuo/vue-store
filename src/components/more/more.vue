<template>
	<div class="more-wrapper" ref="moreWrapper">
		<div class="full">
			<ul class="more-group">
				<li class="more-item">
					<router-link to="/set">
						<img src="./icon-1.png" >
						微店设置
					</router-link>	
				</li>
				<li class="more-item">
					<router-link to="/administrate">
						<img src="./icon-2.png" >
						商品管理
					</router-link>		
				</li>
				<li class="more-item">
					<router-link to="/coupon">
						<img src="./icon-3.png" >
						优惠卷管理
					</router-link>	
				</li>
			</ul>
			<ul class="more-group">
				<li class="more-item">
					<router-link to="/orderManagement">
						<img src="./icon-4.png" >
						订单管理
					</router-link>	
				</li>
				<li class="more-item">
					<router-link to="/salesManagement">
						<img src="./icon-5.png" >
						销售管理
					</router-link>	
				</li>
				<li class="more-item">
					<router-link to="/customer">
						<img src="./icon-6.png" >
						客户管理
					</router-link>
				</li>
				<li class="more-item">
					<router-link to="/income">
						<img src="./icon-7.png" >
						我的收入
					</router-link>
				</li>
			</ul>
			<ul class="more-group">
				<li class="more-item">
					<router-link to="/personal">
						<img src="./icon-8.png" >
						个人信息
					</router-link>
				</li>
				<li class="more-item">
					<router-link to="/password">
						<img src="./icon-9.png" >
						密码修改
					</router-link>	
				</li>				
			</ul>

		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data () {
    return {
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.moreWrapper, {
        click: true
      })
    })
  }
}
</script>

<style>
	.more-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		margin-top: 0.4rem;
		overflow: hidden;
	}
	.more-group{
		width: 100%;
		border-radius: 0.04rem;
		border:0.01rem solid #ccc;
		margin-bottom: 0.4rem;
	}
	.more-item{
		display: flex;
		align-items: center;
		flex-direction: row;
		height: 0.8rem;
		border-bottom: 0.01rem solid #ccc;
		font-size: 0.32rem;
		line-height: 0.8rem;
		background: #fff;
		color: #333;
	}
	.more-item a{
		display: flex;
		align-items: center;
		flex-direction: row;
		width: 100%;
	}
	.more-item img{
		width: 0.4rem;
		height: 0.4rem;
		margin:0 0.20rem 0 0.15rem;
	}
	.more-group .more-item:last-child{
		border-bottom: none;
	}
	.full{
		width: 100%;
		box-sizing: border-box;
		padding: 0 0.2rem;
	}
</style>
