<template>
	<div class="presentInfo-wrapper" >
		<ul class="present-info-containe" v-show="containerIndex === 0">
			<li  >
				<img src="./present-img.png" >
			</li>
			
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
    }
  }
}
</script>

<style>
	.presentInfo-wrapper{
		box-sizing: border-box;

		background: #fff;
		padding:0.1rem;
		border:0.01rem solid #ccc;
		border-top: none;
		
	}
	.present-info-containe{
		width: 100%;
		height: 100%;
	}
	.present-info-containe li{
		display: flex;
		
		justify-content: center;
		
	}
	.present-info-containe li img{
		width: 100%;
		height: 7.8rem;
	}

</style>
