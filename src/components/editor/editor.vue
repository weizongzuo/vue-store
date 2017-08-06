<template>
	<div class="editor-wrapper" ref="editorWrapper">
		<div class="full">
			<div class="editor-content">
				<back :title="backTitle"></back>
				<ul class="editor-info">
					<li>
						<label>手机：</label>
						<input type="text" :placeholder="phone"></input>
					</li>
					<li>
						<label>身份：</label>
						<input type="text" :placeholder="id"></input>
					</li>
					<li>
						<label>姓名：</label>
						<input type="text" :placeholder="name"></input>
					</li>
					<li>
						<label>性别：</label>
						<input type="text" :placeholder="sex"></input>
					</li>
					<li>
						<label>生日：</label>
						<input type="text" :placeholder="birthday"></input>
					</li>
					<li>
						<label>邮箱：</label>
						<input type="text" :placeholder="email"></input>
					</li>
					<li>
					<label>地址：</label>
					<textarea :placeholder="adds"></textarea>
					</li>
				</ul>
				<div class="addToBtn" @click.stop="onKeep">保存</div>
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
      backTitle: '编辑个人信息',
      phone: '18611181358',
      id: '店员',
      name: '刘祥龙',
      sex: '男',
      birthday: '1989-06-04',
      email: '17912526@qq.com',
      adds: '北京市东城区夕照寺大街2号北京电信工程局10层产品中心'
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.editorWrapper, {
        click: true
      })
    })
  },
  components: {
    back: back
  },
  methods: {
    onKeep: function () {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: '/personal'})
    }
  }
}
</script>

<style>
	.editor-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.editor-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 0.4rem;
		text-align: center;
		
	}
	.editor-info {
		width: 100%;
		margin-top: 0.2rem;
		box-sizing: border-box;
		padding: 0.2rem 0.2rem 0 0.2rem;
		border-radius: 0.04rem;
		border:0.01rem solid #ccc;
		background: #fff;
	}
	.editor-info li{
		display: flex;
		flex-direction: column;
		text-align: left;
		margin-bottom: 0.2rem;
	}
	.editor-info li label {
		font-size: 0.28rem;
	}
	.editor-info li input{
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
	.editor-info li textarea{
		display: block;
	    height: 1.5rem;
	    width: 100%;
	    box-sizing: border-box;
	    border-radius: 0.04rem;
	    border: 0.01rem solid #ccc;
	    padding: 0.1rem 0.1rem;
	    margin-top: 0.15rem;
		font-size: 0.28rem;
	    outline: none;
	    resize: none;
	}
</style>
