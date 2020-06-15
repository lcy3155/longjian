<template>
	<div class="gameWap">
		<van-nav-bar title="产品修改" fixed  left-arrow @click-left="onClickLeft"  @click-right="onClickRight" style="background-color:rgba(250, 250, 250, 1);">
			<template #right>
				<van-icon name="home-o" size="25" />
			</template>
		</van-nav-bar>
        <div class="gameCan">
            <van-form class="setF">
				<van-field v-model="personal.name" label="产品名称"  colon  border  required label-align="right"/>
				<van-field v-model="personal.salesPrice" label="销售单价"  colon  border  required label-align="right"/>
				<van-field v-model="personal.goods" label="数量"  colon  border  required label-align="right"/>
				<van-field v-model="personal.discountPrice" label="折扣"  colon  border  required label-align="right"/>
				<van-field v-model="personal.salesman" label="商品总金额"  colon  border  required label-align="right"/>
				<van-field v-model="personal.role" label="业务员"  colon  border  required label-align="right"/>
				<van-field v-model="personal.newT" label="录入时间"  colon  border  required label-align="right"/>
                
				<van-field colon  border clearable label-align="right" name="calendar" :value="personal.newT" label="录入时间" placeholder="点击选择日期" @click="showCalendar = true"/>
				<van-calendar :min-date="minDate" :max-date="maxDate" v-model="showCalendar" @confirm="onConfirm" />
				
				<van-field v-model="personal.introduce" rows="2" autosize label="详情备注" type="textarea" colon border label-align="right" maxlength="50" placeholder="请输入详情备注" show-word-limit />
				
			</van-form>

             <div class="callsebtn">
				<van-button color="#49B377" @click="path_search">保存</van-button>
				<van-button color="#505050" @click="path_cancel">取消</van-button>
			</div>
        </div>
	</div>
</template>

<script>
	export default {
		name: 'playCenter',
		components: {},
		data() {
			return {
                 personal:{
					
				} ,
				minDate: new Date(1950, 0, 1),
				maxDate: new Date(2021, 0, 31),
				showCalendar: false,
				listID:''
			}
        },
		mounted(){
			this.listID = this.$route.query.id ; 
			this.personal = this.$store.state.productData[this.listID];//本地用vuex保存临时信息
		},
        methods:{
            onClickLeft() {
				this.$router.go(-1);
			},
			onClickRight() {
				this.$router.push({path:'/index'})
            },
            path_search(){
                this.$router.go(-1);
            },
            path_cancel(){
                this.$router.go(-1);
			},
			onConfirm(date) {
				console.log(date)
				this.personal.birthday = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
				this.showCalendar = false;
			},
        }
        
	}
</script>
<style scoped>
.gameWap{
    padding-top: 45px;
}
.gameCan{
   border-top: 10px solid #eee;
}
.gameCan h5{
    height: 45px;
    line-height: 45px;
    border-bottom: 1px dotted #ddd;
    padding-left: 10px;
    font-size: 14px;
    color: #555;
    font-weight: bold;
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
