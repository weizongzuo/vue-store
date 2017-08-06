<template>
	<div class="bank-wrapper" ref="bankWrapper">
		<div class="full">
			<div class="bank-content">
				<back :title="backTitle"></back>
				<div class="bank-type">
					<h2>{{number}}</h2>
					<p>{{name}}</p>
					<p>{{bank}}</p>
				</div>
				<div class="myBankBtn">修改收款账号</div>
				<div class="revise-wrapper">
					<input type="text" placeholder="选择开户银行">
					<input type="text" placeholder="请输入储蓄卡卡号">
					<input type="text" placeholder="请再次输入储蓄卡卡号">
					<div class="addToBtn" >确定</div>
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
      backTitle: '我的银行卡',
      number: '6225 8801 5567 3313',
      name: '徐佳',
      bank: '招商银行'
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.bankWrapper, {
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
	.bank-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.bank-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 0.4rem;
		text-align: center;
		
	}
	.bank-type{
		width: 100%;
		margin-top: 0.2rem;
		box-sizing: border-box;
		border-radius: 0.1rem;
		background: url(./logo-img.png)right 0.3rem bottom 0.3rem no-repeat /1.6rem 0.4rem,#fff;
		border:0.01rem solid #ccc;
		text-align: left;
	}
	.bank-type h2{
		width: 100%;
		box-sizing: border-box;
		padding: 0.2rem 0 0.2rem 0.4rem;
		margin-top: 0.5rem;
		font-size: 0.3rem;
		background: #666666;
		color: #fff;

	}
	.bank-type p{
		padding-left: 0.4rem;
		margin-top: 0.3rem;
		font-size: 0.28rem;
		color: #333;
	}
	.bank-type p:last-child{
		padding-left: 0.4rem;
		margin-top: 0.3rem;
		margin-bottom: 0.3rem;
		color: #999;
	}
	.revise-wrapper{
	    display: flex;
	    flex-direction: column;
	    width: 100%;
	    margin-top: 0.2rem;
	    background: #fff;
	    border: 0.01rem solid #ccc;
		width: 100%;
	    box-sizing: border-box;
	    padding: 0 0.15rem;
	}
	.revise-wrapper input {
	    display: block;
	    height: 0.8rem;
	    width: 100%;
	    box-sizing: border-box;
	    border-radius: 0.04rem;
	    border: 0.01rem solid #ccc;
	    padding: 0.05rem 0.1rem;
	    margin-top: 0.15rem;
	    font-size: 0.28rem;
	    outline: none;
	}
	
</style>
