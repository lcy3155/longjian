<template>
	<div class="gameWap">
		<van-nav-bar title="修改订单管理" fixed  left-arrow @click-left="onClickLeft"  @click-right="onClickRight" style="background-color:rgba(250, 250, 250, 1);">
			<template #right>
				<van-icon name="home-o" size="25" />
			</template>
		</van-nav-bar>
        <div class="gameCan">
            <van-form class="setF">
				<van-field v-model="personal.name" label="客户名称" disabled colon  border readonly required label-align="right"/>
				<van-field v-model="personal.orderNo" label="订单编号" disabled colon  border readonly required label-align="right"/>
				<van-field v-model="personal.phone" label="联系人"  colon  border readonly required  label-align="right"/>
				<van-field v-model="personal.advance" label="预付款(元)" required colon  border clearable label-align="right" placeholder="请输入预付款(元)"/>
				<van-field colon  border clearable label-align="right" name="calendar" :value="personal.birthday" label="下单日期" placeholder="点击选择日期" @click="showCalendar = true"/>
				<van-calendar :min-date="minDate" :max-date="maxDate" v-model="showCalendar" @confirm="onConfirm" />
				<van-field colon  border clearable label-align="right" name="calendar" :value="personal.presentation" label="交单日期" placeholder="点击选择日期" @click="showCalendarL = true"/>
				<van-calendar :min-date="minDate" :max-date="maxDate" v-model="showCalendarL" @confirm="onConfirmL" />
				
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
					// name:'山西大红英 ( 编号 : 21 )',
					// phone:'13111111111',
					// advance:"100",
					// birthday:'2019/12/1',
					// presentation:'2019/12/1',
					// orderNo:'DD20200613190002840',
					// introduce:'1'
				} ,
				minDate: new Date(1950, 0, 1),
				maxDate: new Date(2021, 0, 31),
				showCalendar: false,
				showCalendarL:false,
				listID:''
			}
        },
		mounted(){
			this.listID = this.$route.query.id ; 
			this.personal = this.$store.state.list[this.listID];//本地用vuex保存临时信息
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
			onConfirmL(date) {
				console.log(date)
				this.personal.presentation = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
				this.showCalendarL = false;
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
