<template>
	<div class="gameWap">
		<van-nav-bar title="新增订单产品" fixed  left-arrow @click-left="onClickLeft"  @click-right="onClickRight" style="background-color:rgba(250, 250, 250, 1);">
			<template #right>
				<van-icon name="home-o" size="25" />
			</template>
		</van-nav-bar>
        <div class="gameCan">
            <van-form class="setF">
				<van-field v-model="personal.name" label="产品名称" @focus="click_focus"  colon  border readonly required label-align="right" placeholder="请点击选择弹框里的产品" />
				<van-field v-model="personal.Specifications" label="规格" disabled colon  border readonly required label-align="right" placeholder="选择产品自动填写"/>
				<van-field v-model="personal.modela" label="型号" disabled colon  border readonly required  label-align="right" placeholder="选择产品自动填写"/>
				<van-field v-model="personal.InventoryAlarm" label="库存告警值" required colon  border clearable label-align="right" placeholder="请输入数量"/>
				<van-field v-model="personal.goods" label="商品数量" required colon  border clearable label-align="right" placeholder="请输入数量"/>
				<van-field v-model="personal.costPrice" label="成本单价（元）" required colon  border clearable label-align="right" placeholder="请输入价格"/>
				<van-field v-model="personal.salesPrice" label="销售单价（元）" required colon  border clearable label-align="right" placeholder="请输入价格"/>
				<van-field v-model="personal.numberL" label="数量" required colon  border clearable label-align="right" placeholder="请输入数量"/>
				<van-field v-model="personal.discountPrice" label="折扣（元）" required colon  border clearable label-align="right" placeholder="请输入折扣价格"/>
				<van-field v-model="personal.totalPrice" label="商品总金额（元）" required colon  border clearable label-align="right" placeholder="请输入总"/>
				
			
				<van-field v-model="personal.introduce" rows="2" autosize label="详情备注" type="textarea" colon border label-align="right" maxlength="50" placeholder="请输入详情备注" show-word-limit />
				
			</van-form>

             <div class="callsebtn">
				<van-button color="#49B377" @click="path_search">保存</van-button>
				<van-button color="#505050" @click="path_cancel">取消</van-button>
			</div>
            <!-- 选择产品弹框 -->
			<van-popup v-model="show" closeable position="bottom" :style="{ height: '90%' }" >
			   <div class="findtipWap"><div class="Findtip">点击选择对应的产品</div></div>
				<div class="customerList">
                    <table border="1" cellpadding="0" cellspacing="0" align="center" class="Informationbox">
                        <thead>
                            <tr>
                                <th width="50" >单选</th>
                                <th>大类</th>
                                <th>小类</th>
                                <th>产品名称</th>
                                <th>规格</th>
                                <th>型号</th>
                                <th>商品库存</th>
                                <th>成本单价</th>
                                <th>单价</th>
                                <th>商品备注</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in data" :key="index" @click="click_path(item.id,index)">
                                <td>
                                    <div class="checkbox checkbox-primary">
                                        <input id="item.id" type="checkbox" v-model="item.checked" >
                                    </div>
                                </td>
                                <td>{{item.General}}</td>
                                <td>{{item.Subclass}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.Specifications}}</td>
                                <td>{{item.modela}}</td>
                                <td>{{item.goods}}</td>
                                <td>{{item.costPrice}}</td>
                                <td>{{item.salesPrice}}</td>
                                <td>{{item.introduce}}</td>
                            </tr>
                        </tbody>
                    </table>
				</div>
				<!-- 分页 -->
			<van-pagination
				v-model="currentPage"
				:total-items="125"
				:show-page-size="3"
				force-ellipses
				@change="vanaPagination"
			/>
			</van-popup>
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
					name:'',
					Specifications:'',
					modela:'',
					InventoryAlarm:"",
					goods:"",
					costPrice:"",
					salesPrice:"",
					numberL:"",
					discountPrice:"",
					totalPrice:"",
					introduce:''
				} ,
				minDate: new Date(1950, 0, 1),
				maxDate: new Date(2021, 0, 31),
				show:false,
				data:[
					{
						id:'1',
						General :'大类名称1',
						Subclass:'小类名称1',
						name:'名称1',
						Specifications:'规格1',
						modela:'型号1',
						InventoryAlarm:'100',
						goods:"100",
						costPrice:"12",
						salesPrice:"20",
						numberL:"99",
						discountPrice:'99',
						introduce:'备注信息1',
					    totalPrice:"99999999",
						checked:false,
					},
					{
						id:'2',
						General :'大类名称2',
						Subclass:'小类名称2',
						name:'名称2',
						Specifications:'规格2',
						modela:'型号2',
						InventoryAlarm:'1002',
						goods:"1002",
						costPrice:"122",
						salesPrice:"202",
						numberL:"992",
						discountPrice:'992',
						introduce:'备注信息2',
					    totalPrice:"99999999",
						checked:false,
					}
				],
				currentPage:1,//当前页
			}
        },
		mounted(){
			
		},
        methods:{
            onClickLeft() {
				this.$router.go(-1);
			},
			onClickRight() {
				this.$router.push({path:'/index'})
            },
            path_search(){
				console.log(this.personal)
				this.$store.state.list.push(this.personal)
                this.$router.go(-1);
            },
            path_cancel(){
                this.$router.go(-1);
			},
			click_focus(){
				
				this.show = true;
			},
			click_path(id,index){
				let datalist = this.data
				 for(let i = 0;i<datalist.length;i++){
					datalist[i].checked = false ;
				}
				this.data[index].checked = true;
				this.personal = datalist[index];
				this.show = false;
				console.log('选择的时',id,index)
			},
			vanaPagination(res){
				console.log('分页',res)
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
   margin-bottom: 100px;
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
.findtipWap{
	padding: 30px 0 10px;
}
.Findtip {
    margin: 0 auto;
    width: 220px;
    border: 1px dashed #ccc;
    line-height: 25px;
    text-align: center;
    font-size: 14px;
    color: red;
    font-weight: bold;
}
.customerList{
	width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    word-break: break-all;
	padding: 0 10px;
}

.Informationbox {
    width: 700px;
    border: 1px solid #ddd;
    border-collapse: collapse;
    table-layout: fixed;
    word-break: break-all;
}
td{
	text-align: center;
}
.van-pagination{
	width: 100%;
	position: fixed;
	bottom: 20px;
	left: 50%;
	transform:translateX(-50%);
	background: #eee;
}
</style>
