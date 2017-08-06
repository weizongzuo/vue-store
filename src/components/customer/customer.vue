<template>
	<div class="customer-wrapper" ref="customerWrapper">
		<div class="full">
			<div class="customer-content">
				<back :title="backTitle"></back>
				<div class="o-serch" ref="serch">
					<div class="serch-wrapper">
						<input type="text" placeholder="请输入买家姓名或电话" v-model="searchValue"></input>
						<input type="submit" value=""></input>
					</div>
				</div>
				<ul class="goods-list">
					<li v-for="item in newUsersList" @click="onGoods(item.id)">
						<div>
							<p>{{item.name}}</p>
							<strong>{{item.phone}}</strong>
						</div>
						
						<p>
							总共
							<i>{{item.number}}</i>
							交易:
							<i>{{item.money}}</i>
							元
						</p>
					</li>
					<div class="loading"><i class="icon-loading"></i>加载中...</div>
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
      backTitle: '客户管理',
      searchValue: '',
      goodsList:
      [{
        name: '刘祥龙',
        phone: '13725584765',
        number: '1',
        money: '5999.00',
        id: '1'
      },
      {
        name: '张三',
        phone: '13625584765',
        number: '1',
        money: '5999.00',
        id: '2'
      },
      {
        name: '李四',
        phone: '18625584765',
        number: '1',
        money: '5999.00',
        id: '3'
      },
      {
        name: '王五',
        phone: '11625584765',
        number: '1',
        money: '5999.00',
        id: '4'
      },
      {
        name: '赵六',
        phone: '10425584765',
        number: '1',
        money: '5999.00',
        id: '5'
      }]
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.customerWrapper, {
        click: true
      })
    })
  },
  components: {
    back: back
  },
  methods: {
    onGoods: function (id) {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: '/customerInfo/' + id})
    }
  },
  computed: {
    newUsersList: function () {
      var that = this
      return that.goodsList.filter(function (user) {
        return user.name.toLowerCase().indexOf(that.searchValue.toLowerCase()) !== -1 || user.phone.toLowerCase().indexOf(that.searchValue.toLowerCase()) !== -1
      })
    }
  }
}
</script>

<style>
	.customer-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.customer-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 0.4rem;
		text-align: center;
	}
	.goods-list{
		width: 100%;
		margin-top: 0.2rem;
		margin-bottom: 0.2rem;
	}
	.goods-list li{
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		padding: 0.2rem;
		margin-bottom: 0.2rem;
		text-align: left;
		background: url(./right-arrow.png)right 0.2rem center no-repeat /0.15rem ,#fff;
	}
	.goods-list li >div:first-child{
		display: flex;
		flex-direction: row;
		position: relative;
		line-height: 1.5em;
		font-size: 0.28rem;
	}
	.goods-list li >div:first-child strong{
		position: absolute;
		left: 25%;
		top: 0;
		padding-left: 0.4rem;
		background: url(./phone-img.png)left center no-repeat / 0.3rem;
		font-weight: normal;
	}
	.goods-list li >p{
		padding-top: 0.15rem;
		font-size: 0.24rem;
		color: #333;
	}
	.goods-list li >p i{
		font-style: normal;
		color: #fd4d4d;
	}
	
	

</style>
