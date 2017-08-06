<template>
	<div class="managementList-wrapper">
		<ul class="management-list" v-show="containerIndex === 0">
			<li class="management-item" v-for="item in orderContainer" @click="onMana">
				<img src="./phone-img.png" >
				<div class="item-info">
					<h3>{{item.name}}</h3>
					<h3>{{item.phone}}</h3>
					<p>{{item.adds}}</p>
				</div>
			</li>
			<div class="loading">
				<i class="icon-loading">	
				</i>加载中...
			</div>
		</ul>
	</div>	
</template>

<script>

export default {
  props: {
    containerIndex: {
      type: Number
    },
    tabLength: {
      type: Array
    }
  },
  data () {
    return {
      orderContainer:
      [{
        name: '刘祥龙',
        phone: '11625584765',
        adds: '北京市东城区夕照寺大街2号北京电信工程局10层产品中心'
      },
      {
        name: '刘祥龙',
        phone: '11625584765',
        adds: '北京市东城区夕照寺大街2号北京电信工程局10层产品中心'
      },
      {
        name: '刘祥龙',
        phone: '11625584765',
        adds: '北京市东城区夕照寺大街2号北京电信工程局10层产品中心'
      },
      {
        name: '刘祥龙',
        phone: '11625584765',
        adds: '北京市东城区夕照寺大街2号北京电信工程局10层产品中心'
      },
      {
        name: '刘祥龙',
        phone: '11625584765',
        adds: '北京市东城区夕照寺大街2号北京电信工程局10层产品中心'
      }]
    }
  },
  methods: {
    onMana () {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: '/orderInfo'})
    }
  }
}
</script>

<style>
	.management-list{
		width: 100%;
		
		margin-top: 0.2rem;
	}

	.management-item{
		display: flex;
		height: 2.12rem;
		width: 100%;
		flex-direction: row;
		box-sizing: border-box;
		padding: 0.2rem;
		border-radius: 0.04rem;
		background: url(./right-arrow.png)right 0.1rem center no-repeat /0.15rem 0.26rem,#fff;
	}
	.management-item img{
		display: block;
		flex:0 0 1.6rem;
		width: 1.6rem;
	}
	.management-item .item-info{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0.05rem 0.05rem 0.05rem 0.1rem;
		text-align: left;
	}
	.item-info h3{
		font-size: 0.28rem;
	}
	.item-info p{
		font-size: 0.24rem;
		line-height: 1.4em;
		color: #333;
	}
	.management-item {
		margin-bottom: 0.2rem;
	}

</style>
