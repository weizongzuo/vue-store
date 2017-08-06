<template>
	<div class="orderManagement-wrapper" ref="orderManagementWrapper">
		<div class="full">
			<div class="orderManagement-content">
				<back :title="backTitle"></back>
				<div class="o-serch" ref="serch">
					<div class="serch-wrapper">
						<input type="text" placeholder="请输入买家姓名或电话" v-model="serchValue"></input>
						<input type="submit" value=""></input>
					</div>
				</div>
				<div class="present-container">
					<ul class="present-nav">
						<li v-for="(title, index) in navTitle" @click.stop="onTab(index)" :class="{'active':navIndex == index}">{{title}}</li>
					</ul>
	               
				</div>
				<managementList :containerIndex = "navIndex" :tabLength = "navTitle"></managementList>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import back from '../back/back.vue'
import managementList from '../managementList/managementList.vue'

export default {
  data () {
    return {
      backTitle: '订单管理',
      serchValue: '',
      navTitle: ['待处理', '未付款', '已完成', '已关闭'],
      navIndex: 0
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.orderManagementWrapper, {
        click: true
      })
    })
  },
  components: {
    back: back,
    managementList: managementList
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
    }
  }
}
</script>

<style>
	.orderManagement-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.orderManagement-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 0.4rem;
		text-align: center;
	}
	.o-serch{
		width: 100%;
		margin-top: 0.2rem;
	}
	.o-serch .serch-wrapper{
		width: 100%;
		height: 0.8rem;
	}

	

</style>
