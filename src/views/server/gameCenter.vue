<template>
	<div class="gameWap">
		<van-nav-bar title="数据操作" fixed  left-arrow @click-left="onClickLeft"  @click-right="onClickRight" style="background-color:rgba(250, 250, 250, 1);">
			<template #right>
				<van-icon name="home-o" size="25" />
			</template>
		</van-nav-bar>
        <div class="gameCan">
            <h5>订单审核：状态</h5>
            <van-field name="radio">
                <template #input>
                    <van-radio-group v-model="radio" direction="horizontal">
                    <van-radio name="1">已完成</van-radio>
                    <van-radio name="2">处理中</van-radio>
                    <van-radio name="3">转未处理</van-radio>
                    </van-radio-group>
                </template>
            </van-field>
            <van-field
                v-model="message"
                rows="2"
                autosize
                label="备注"
                type="textarea"
                maxlength="50"
                placeholder="请输入备注"
                show-word-limit
                />

             <div class="callsebtn">
				<van-button color="#49B377" @click="path_search">保存</van-button>
				<van-button color="#505050" @click="path_cancel">取消</van-button>
			</div>
        </div>
	</div>
</template>

<script>
import { Toast } from 'vant';
	export default {
		name: 'callCenter',
		components: {Toast},
		data() {
			return {
                radio: '1',
                message:'',
                listID:''
			}
        },
		mounted(){
            this.listID = this.$route.query.id ; 
            this.radio =  this.$store.state.list[this.listID].StatusLi ;
            this.message =  this.$store.state.list[this.listID].introduce ;
           
		},
        methods:{
            onClickLeft() {
				this.$router.go(-1);
			},
			onClickRight() {
				this.$router.push({path:'/index'})
            },
            path_search(){
                let radiopa = this.radio;
                let radioText = '';
                if(radiopa == '1'){
                    radioText = '已完成';
                }else  if(radiopa == '2'){
                    radioText = '处理中';
                }else  if(radiopa == '3'){
                    radioText = '转未处理';
                }
                console.log(this.$route.query.id)
                this.$store.state.list[this.listID].StatusL = radioText;
                this.$store.state.list[this.listID].StatusLi = this.radio;
				Toast.success('保存成功');
                this.$router.go(-1);
            },
            path_cancel(){
                this.$router.go(-1);
            }
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
