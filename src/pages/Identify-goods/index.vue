<template>
 <div class="Identify-goods">
		<div class="header-warp">
			<header class="header">
				<div class="iconfont icon-shouye"  @click="$router.push('/home')">
				</div>
				<div class="login" >
					<div :class="{setHeight:headerStyle}"	@click="headerStyle = true">
						<router-link to="/shopping/discover">	发现	</router-link>
					</div>
					<div :class="{setHeight:!headerStyle }" @click="headerStyle = false">
						<router-link  to="/shopping/select"> 甄选家</router-link>
					</div>
				</div>
				<div>
				<span class="iconfont icon-sousuo" @click="$router.push('/search')" >
				</span>
				<span class="iconfont icon-gouwuche" @click="$router.push('/shopping')" >
				</span>    
				</div>
			</header>
		</div>
		<div class="goods-warp">
		
			<router-view />

		</div>
 </div>
</template>

<script type="text/ecmascript-6">
// import {listPullLoading} from 'list-pull-loading'
// import "list-pull-loading/dist/list-pull-loading.css"

 export default {
 	name: 'Goods',
	data() {
		return {
			headerStyle:true
		}
	},

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.Identify-goods
	height 100%
	overflow hidden
	.header-warp
		width 100%
		background-color #ffffff
		.header
			padding 16px 30px
			box-sizing border-box
			font-size 40px
			display flex
			justify-content space-between
			align-items center
			.login
				line-height 93px
				box-sizing border-box
				border-radius 8px
				display flex
				justify-content center
				align-items center
				font-family: PingFangSC-Light,helvetica,'Heiti SC'
				text-align center
				height 93px
			.iconfont 
				font-size 50px
			.setHeight
				font-size 65px
				font-weight bold
				margin 0 20px				
				>*	
					color #B4282D
	.goods-warp
		margin-top 4px
		height 1123px
		background-color #f4f4f4

		

</style>
