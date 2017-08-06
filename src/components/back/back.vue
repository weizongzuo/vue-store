<template>
	<div class="present-content" >
		<div class="back-btn">
			<div class="left-arrow" @click.stop="onBack"></div>
			<strong>{{title}}</strong>
		</div>	
	</div>
</template>

<script>

export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onBack: function () {
      if (!event._constructed) {
        return
      }
      this.$router.go(-1)
    }
  }
}
</script>

<style>

	.back-btn{
		width: 100%;
		height: 0.8rem;
		display: flex;
		flex-direction: row;
		background: #eee;
		border:0.01rem solid #ccc;
		border-bottom: 0.05rem solid #ccc; 
	}
	.left-arrow{
		width: 0.8rem;
		height: 0.8rem;
		border-right: 0.01rem solid #ccc;
		position: relative;
	}
	.left-arrow:before{
		content: '';
		position: absolute;
		left:40%;
		top: 50%;
		width: 0;
		height: 0;
		border: 0.12rem solid transparent;
		border-right-color: #333;
		transform: translate(-50% , -50%);
		
	}
	.back-btn strong{
		display: block;
		flex: 1;
		height: 0.8rem;
		font-size: 0.28rem;
		color: #333;
		line-height: 0.8rem;
		text-align: left;
		padding-left: 0.1rem;
	}
	.present-content{
		width: 100%;
	}
</style>
