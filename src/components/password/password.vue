<template>
	<div class="password-wrapper" ref="passwordWrapper">
		<div class="full">
			<div class="password-content">
				<back :title="backTitle"></back>
				<div class="pas-change">
					<input type="text" placeholder="请输入原密码">
					<input type="text" placeholder="请输入新密码">
					<input type="text" placeholder="  请再次输入新密码">
					<div class="addToBtn" @click.stop="onChange">保存</div>
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
      backTitle: '密码修改'
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.passwordWrapper, {
        click: true
      })
    })
  },
  components: {
    back: back
  },
  methods: {
    onChange () {
      if (!event._constructed) {
        return
      }
      this.$router.push({path: '/more'})
    }
  }
}
</script>

<style>
	.password-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		overflow: hidden;
	}
	.password-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 0.4rem;
		text-align: center;
		
	}
	.pas-change{
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
	.pas-change input {
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
