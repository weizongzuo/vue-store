<template>
	<div class="income-wrapper" ref="incomeWrapper">
		<div class="full">
			<div class="income-content">
				<back :title="backTitle"></back>
				<div class="income-main">
					<header>
						<div class="left-container">
							未提现收入<br />
							<strong>0.01</strong>元
						</div>
						<div class="right-btn" @click="onDraw">提现</div>
					</header>
					<footer>
						<div class="freeze">
							担保交易冻结金额<i>?</i><br />
							<strong>0.01</strong>元
						</div>
						<div class="income">
							累计收入<br />
							<strong>0.01</strong>元
						</div>
					</footer>
				</div>
				<div class="myBankBtn" @click.stop="onBank">我的银行卡</div>
				<div class="income-goods-wrapper">
					<ul class="management-list" >
						<li class="management-item" v-for="item in goodsList" @click="onInfo">
							<img src="./phone-img.png" >
							<div class="item-info">
								<h3>{{item.userName}}</h3>
								<h3>付款:{{item.goodsPrice}}元({{item.number}}件商品)</h3>
								<p>{{item.time}}}</p>
							</div>
						</li>
						<div class="loading">
							<i class="icon-loading">	
							</i>加载中...
						</div>
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
      backTitle: '我的收入',
      goodsList:
      [{
        userName: '刘祥龙',
        goodsPrice: '5999.00',
        number: 1,
        time: '2014-05-13'
      },
      {
        userName: '刘祥龙',
        goodsPrice: '5999.00',
        number: 1,
        time: '2014-05-13'
      },
      {
        userName: '刘祥龙',
        goodsPrice: '5999.00',
        number: 1,
        time: '2014-05-13'
      },
      {
        userName: '刘祥龙',
        goodsPrice: '5999.00',
        number: 1,
        time: '2014-05-13'
      },
      {
        userName: '刘祥龙',
        goodsPrice: '5999.00',
        number: 1,
        time: '2014-05-13'
      }]
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.incomeWrapper, {
        click: true
      })
    })
  },
  components: {
    back: back
  },
  methods: {
    onInfo: function () {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: '/orderInfo'})
    },
    onBank: function () {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: '/bank'})
    },
    onDraw: function () {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: '/draw'})
    }
  }
}
</script>

<style>
	.income-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.income-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 0.4rem;
		text-align: center;
		
	}
	.income-main{
		width: 100%;
		margin-top: 0.2rem;
	}
	.income-main{
		display: flex;
		flex-direction: column;
		border-radius: 0.04rem;
		background: #fff;
	}
	.income-main header{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding:  0.2rem;
		border-bottom: 0.01rem dashed #ccc;
	}
	.left-container{
		text-align: left;
		line-height: 1.5em;
		font-size: 0.24rem;
		color: #999;
	}
	.left-container strong{
		font-size: 0.4rem;
		color: #333;
	}
	.right-btn{
		font-size: 0.3rem;
		padding:0.2rem 0.5rem;
		border-radius: 0.04rem;
		border: 0.01rem solid #3379ae;
		background: #539cd1;
		color: #fff;
	}
	.income-main footer{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		text-align: left;
		line-height: 1.4em;
		color: #999;
		font-size: 0.24rem;
	}
	.income-main footer strong{
		color: #333;
	}
	.freeze, .income{
		flex: 1;
		padding: 0.2rem;
	}
	.freeze{
		border-right: 0.01rem dashed #ccc;
	}
	.freeze i{
		display: inline-block;
		width: 0.3rem;
		height: 0.3rem;
		margin-left: 0.1rem;
		font-style: normal;
		background: #cc3333;
		color: #fff;
		line-height: 0.3rem;
		text-align: center;
		border-radius: 50%;
	}
	.income{
		flex: 1;
	}
	.myBankBtn{
		display: block;
	    height: 0.9rem;
	    width: 100%;
	    margin: 0.2rem auto 0 auto;
	    border-radius: 0.04rem;
	    border: 0.01rem solid #993300;
	    background: #cc3333;
	    color: #fff;
	    font-size: 0.28rem;
	    text-align: center;
	    line-height: 0.9rem;
	}
	.income-goods-wrapper{
		width: 100%;
	}
	
</style>
