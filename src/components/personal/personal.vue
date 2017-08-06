<template>
	<div class="personal-wrapper" ref="personalWrapper">
		<div class="full">
			<div class="personal-content">
				<back :title="backTitle"></back>
				<ul class="personal-info">
					<li >
						<p>手机：</p><strong>{{phone}}</strong>
					</li>
					<li >
						<p>身份：</p><strong>{{id}}</strong>
					</li>
					<li >
						<p>姓名：</p><strong>{{name}}</strong>
					</li>
					<li >
						<p>性别：</p><strong>{{sex}}</strong>
					</li>
					<li >
						<p>生日：</p><strong>{{birthday}}</strong>
					</li>
					<li class="personal-email">
						<p>邮箱：</p><strong>{{email}}<i v-if="emailFlag"> (未验证)</i></strong>
					</li>
					<li >
						<p>地址：</p><strong>{{adds}}</strong>
					</li>
				</ul>
				<div class="onSetBtn" @click.stop="onSetBtn">编辑个人信息</div>
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
      backTitle: '个人信息',
      phone: '18611181358',
      id: '店员',
      name: '刘祥龙',
      sex: '男',
      birthday: '1989-06-04',
      email: '17912526@qq.com',
      adds: '北京市东城区夕照寺大街2号北京电信工程局10层产品中心',
      emailFlag: true
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.personalWrapper, {
        click: true
      })
    })
  },
  components: {
    back: back
  },
  methods: {
    onSetBtn: function () {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: '/editor'})
    }
  }
}
</script>

<style>
	.personal-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.personal-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 0.4rem;
		text-align: center;
		
	}
	.personal-info{
		width: 100%;
		margin-top: 0.2rem;
		background: #fff;
		border-radius: 0.04rem;
		border: 0.01rem solid #ccc;
		text-align: left;
		font-size: 0.28rem;
		white-space: normal;
	}
	.personal-info li{
		display: flex;
		flex-direction: row;
		padding: 0.2rem 0.4rem;
		border-bottom: 0.01rem solid #ccc;
		line-height: 1.4em;
	}
	.personal-info li:last-child{
		border-bottom: none;
	}
	.personal-info li strong{
		flex:1;
		margin-left: 0.2rem;
		color: #666;
	}
	.personal-email {
		background:url(./right-arrow.png)right 0.2rem center no-repeat / 0.15rem;
	}
	.personal-email i{
		font-size: 0.24rem;
		font-style: normal;
		color: #fd4d4d;
	}
	.onSetBtn{
		display: block;
	    height: 0.9rem;
	    width: 100%;
	    margin: 0.2rem auto 0.2rem;
	    border-radius: 0.04rem;
	    border: 0.01rem solid #e4cce8;
	    background: #cc3333;
	    color: #fff;
	    font-size: 0.28rem;
	    text-align: center;
	    line-height: 0.9rem;
	}

</style>
