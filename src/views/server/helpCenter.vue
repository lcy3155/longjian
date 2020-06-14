<template>
	<div class="helpCenterWap">
		<van-nav-bar title="数据操作" fixed  left-arrow @click-left="onClickLeft"  @click-right="onClickRight" style="background-color:rgba(250, 250, 250, 1);">
			<template #right>
				<van-icon name="home-o" size="25" />
			</template>
		</van-nav-bar>
		<div class="1">
			<van-uploader v-model="fileList" multiple />
		</div>

		<div class="callsebtn">
			<van-button color="#49B377" @click="path_search">新增</van-button>
			<van-button color="#505050" @click="path_cancel">取消</van-button>
		</div>
	</div> 
</template>

<script>
	export default {
		name: 'helpCenter',
		components: {},
		data() {
			return {
				 fileList: [
					// { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
					// // Uploader 根据文件后缀来判断是否为图片文件
					// // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
					// { url: 'https://cloud-image', isImage: true },
				],
				listID:'',
			}
		},
		mounted(){
            this.listID = this.$route.query.id ; 
            this.fileList =  this.$store.state.list[this.listID].fileList ;
           
		},
        methods:{
            onClickLeft() {
				this.$router.go(-1);
			},
			onClickRight() {
				this.$router.push({path:'/index'})
            },
            path_search(){
				// console.log(this.fileList)
				this.$store.state.list[this.listID].fileList = this.fileList;
                this.$router.go(-1);
            },
            path_cancel(){
                this.$router.go(-1);
            }
        }
	}
</script>
<style scoped>
	.helpCenterWap{
		padding-top: 70px;
	}
	.callsebtn{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content:space-around;
		padding: 10px;
	}
	.callsebtn button{
		width: 35%;
	}
</style>
