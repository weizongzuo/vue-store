<template>
	<div class="classifyGroup-wrapper" ref="classifyGroupWrapper">
	<div >
		<div class="c-box">
			<div class="c-serch" ref="serch">
				<div class="serch-wrapper">
					<input type="text" placeholder="搜索商品名称" v-model="serchValue"></input>
					<input type="submit" value=""></input>
				</div>
			</div>
			<div class="c-container">
				<div class="c-top">
					<div class="c-logo">
						<router-link to="/classify/goods">
							<div class="c-img">
								<img src="./logo-1.png" >
							</div>
						</router-link>
						<i class="sp"></i>
						<div class="c-img">
							<img src="./logo-2.png" >
						</div>
					</div>
					<div class="c-logo">
						<div class="c-img">
							<img src="./logo-3.png">
						</div>
						<i class="sp"></i>
						<div class="c-img">
							<img src="./logo-4.png">
						</div>
					</div>
					<div class="c-logo">
						<div class="c-img">
							<img src="./logo-5.png">
						</div>
						<i class="sp"></i>
						<div class="c-img">
							<img src="./logo-6.png">
						</div>
					</div>
				</div>
				<div class="c-main">
					<dl class="main-item">
						<dt>
							<img src="./beard.png" >
						</dt>
						<dd>老人机</dd>
					</dl>
					<dl class="main-item">
						<dt>
							<img src="./m-phone.png"  >
						</dt>
						<dd>智能手机</dd>
					</dl>
					<dl class="main-item">
						<dt>
							<img src="./photo.png" >
						</dt>
						<dd>拍照手机</dd>
					</dl>
				</div>
				<div class="c-bottom">
					<div class="c-bottom-item" v-for="item in pirceTip">
						<div class="b-pirce">
							{{item.tip}}
						</div>
						<i class="sp"></i>
						<div class="b-pirce">
							{{item.tip2}}
						</div>
					</div>
				</div>
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
      serchValue: '',
      pirceTip:
      [
        {
          tip: '500以下',
          tip2: '500元 - 1000元'
        },
        {
          tip: '1000元 - 2000元',
          tip2: '2000元 - 3000元'
        },
        {
          tip: '3000元 - 5000元',
          tip2: '5000以上'
        }
      ]
    }
  },
  created: function () {
    this.$nextTick(() => {
      const startY = -(document.documentElement.clientWidth > 1300 ? 1300 : document.documentElement.clientWidth) / 6.4 * 1.2
      this.scroll = new BScroll(this.$refs.classifyGroupWrapper, {
        click: true,
        startY: startY
      })
    })
  }
}
</script>

<style>
.classifyGroup-wrapper{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}
	.c-box{
		display: flex;
		flex-direction: column;

		align-items: center;
		overflow: hidden;
	}
	.c-serch{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 1.2rem;
		box-sizing: border-box;
		padding: 0 0.2rem;
		background: #dddddd;
		margin-top: 0.12rem;
	}
	.serch-wrapper{
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 0.72rem;
		border:0.01rem solid #ccc;
		border-radius: 0.04rem;
	}
	.serch-wrapper input:first-child{
		height: 100%;
		flex: 1;
		box-sizing: border-box;
		padding: 0.1rem;
		background:#fff;
		font-size: 0.28rem;
		outline: none;
	}
	.serch-wrapper input:first-child::-webkit-input-placeholder{
		font-size: 0.28rem;
	}
	.serch-wrapper input:last-child{
		width: 1.2rem;
		height: 100%;
		font-size: 0.28rem;
		background:url(./serch.png)center center no-repeat,#f9f9f9;
		border-radius: 0.04rem;
		background-size: 0.3rem 0.3rem;
		border-left:0.01rem solid #ccc;
		outline: none;
	}
	.c-logo{
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
	
		margin-top: 0.2rem;
	}
	.c-logo .c-img{
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		height: 1.2rem;
		box-sizing: border-box;
		border-radius: 0.04rem;
		border:0.01rem solid #ccc;
		background:#fff;
	}
	.sp{
		width: 0.15rem;
	}
	.c-main{
		display: flex;
		flex-direction: row;
		width: 100%;
		border-radius: 0.04rem;
		border:0.01rem solid #ccc;
		margin-top: 0.2rem;
	}
	.c-main .main-item{
		flex: 1;
	}
	.main-item dt{
		display: flex;
		height: 1.2rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-bottom: 0.01rem solid #ccc;
		border-right: 0.01rem solid #ccc;
	}
	.main-item dt img{
		width: 0.6rem;
		height: 0.6rem;
	}
	.main-item dd{
		font-size: 0.28rem;
		color: #333;
		height: 0.6rem;
		line-height: 0.6rem;
		text-align: center;
		border-right: 0.01rem solid #ccc;
	}
	.c-main dl:last-child dt,
	.c-main dl:last-child dd{
		border-right:none;
	}
	.c-img img{
		width: 2rem;
		height: 0.8rem;
	}
	.c-bottom{
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: column;
		align-items: center;
		margin-top: 0.2rem;
		margin-bottom: 0.2rem;
	}
	.c-bottom-item{
		display: flex;
		width: 100%;

		flex-direction: row;
		margin-bottom: 0.2rem;
	}
	.b-pirce{
		flex: 1;
		height: 0.8rem;
		position: relative;
		background: #fff;
		color:#333;
		box-sizing: border-box;
		border-radius: 0.04rem;
		border:0.01rem solid #ccc;
	}
	.b-pirce:before{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: inherit;
		box-sizing: border-box;
		width: 0.4rem;
		border:0.01rem solid #0066cc;
		background:#2aa0e9;
	}
	.b-pirce{
		font-size: 0.24rem;
		text-indent: 0.55rem;
		line-height: 0.8rem;
	}
	.c-main{
		background: #fff;
	}
	.c-top {
	    box-sizing: border-box;
	    width: 100%;
	    /* margin: 0 0.2rem; */
	}
	.c-container{
		width: 100%;
		box-sizing: border-box;
		padding:0 0.2rem;
	}
</style>
