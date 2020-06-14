<template>
	<div>
		<div id="wrap" style="z-index: 1000000;position: fixed ! important;right: 0px;top: 10px;">
			<div id="google_translate_element"></div>
		</div>
		<div class="page index">
            <div class="bank_name1"  >
                <div class="weui-cells weui-cells_form bank_namefix" >
                    <div class="weui-cells__title fs28 color_3 fw_b bank_namefix_tit">水晶分类：</div>
                    <div class="weui-cell weui-cell_access"  @click="choseBank">
                        <div class="weui-cell__bd">
                            <input class="weui-input fs28 fw_b bank_name" v-model="bankName"  type="text" readonly="readonly" id="bank_name"  />
                        </div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>
            </div>
			<div class="page-bd">
                
				<!-- 页面内容 --> 
				<div class="piglist">
					<div class="box getGoodsPriceWap" v-for="(item,index) in list" :key="index">
						<div class="pigimg">
							<img :src="item.images" alt="" />
							<span class="fs34 fw_b">{{item.goodsName}}</span>
						</div>
						<div class="info fs22">
							<div class="getGoodsPrice">水晶价格：<span class="zzf-color1" style="color:red;font-size: 0.2rem;">{{item.getGoodsPrice}}</span></div>
							<div>金币价值：<span class="zzf-color1">{{item.hookPrice}}</span></div>
							<div>挂卖时间：<span class="zzf-color1">{{item.hookTime}}</span></div>
						</div>
						<div class="button fs28 fw_b btdqg" @click="click_purchase(item)">购买</div>
					</div>
				</div>
                <!-- 提示卖出 -->
                <div v-show="publicmsk" class="publicmsk"></div>
                <div v-show="publicmsk" class="publicText">
                    <h5>系统提示</h5>
                    <p>您确定要购买{{goodsNamel}}嘛？</p>
                    <div class="publicTextbtn">
                        <div class="publicbtnitem" @click="public_No">取消</div>
                        <div class="publicbtnitem" @click="public_Yes">确定</div>
                    </div>
                </div>
			</div>
			<footers cur="4"></footers>
		</div>
	</div>
</template>
<script>
	import footers from '../components/footer'
	export default {
		name: 'market',
		components: {
			footers
		},
		data() {
			return {
                list: [],
                publicmsk:false,
                goodsNamel:'',
                goodsId:'',
                bankName:'全部',
                bankValue:'',
			}
		},
		mounted() {
			let self = this;
            self.dataList();
		},
		methods: {
            dataList(){
                let self = this;
                let params = {
					goodsType:self.bankValue
				}
                self.$axios.get('/rush/hook/goods', {
					params: params
				}).then((res) => {
					if (res.data.code == 200) {
                        self.list = [];
                        res.data.data.filter(function (item,index) {
                              item.hookTime = item.hookTime.slice(0,10);
                              self.list.push(item);
                        });
					}else{
                       self.$weui.topTips(res.data.msg,1000)
                    }
				}).catch((error) => {
                    self.$weui.topTips(error,1000)
                })
            },
            //下拉
            choseBank(){
                const self= this
                self.$weui.picker(
                    [{
                        label: '全部',
                              value: '',
                        },{
                        label: '红玛瑙',
                              value: 3,
                        },
                        {
                        label: '烟水晶',
                              value: 4,
                        },
                        {
                        label: '金发晶',
                              value: 5,
                        },
                        {
                        label: '蓝虎晶',
                              value: 6,
                        },
                        {
                        label: '黑曜晶',
                              value: 7,
                        },
                        {
                        label: '粉水晶',
                              value: 8,
                        },
                        {
                        label: '紫水晶',
                              value: 9,
                        },
                        {
                        label: '绿幽灵',
                              value: 10,
                        },
                        {
                        label: '龙晶',
                              value: 13,
                        },
                        {
                        label: '钛晶球',
                              value: 14,
                        },
                        {
                        label: '凤玉晶',
                              value: 16,
                        },
                        {
                        label: '碧玺',
                              value: 17,
                    }],
                     {
                     className: 'custom-classname',
                     container: 'body',
                        defaultValue:[0],
                     onConfirm: function (result) {
                        self.bankName = result[0].label,
                        self.bankValue = result[0].value
                     }
                 });
            },
			click_purchase(item){
                let self = this;
                self.goodsNamel = item.goodsName; 
                self.goodsId = item.id; 
                self.publicmsk = true;
            },
            public_Yes(){
                let self = this;
                let params = {
					userGoodsId:self.goodsId
				}
                self.$axios.get('/rush/goods/transaction', {
					params: params
				}).then((res) => {
                    self.$weui.topTips(res.data.msg,1000)
					if (res.data.code == 200) {
                        self.dataList();
                        self.publicmsk = false;
					}
				}).catch((error) => {
                    self.$weui.topTips(error,1000)
                })
            },
            public_No(){
                this.publicmsk = false;
            },

        },
        watch: {
          'bankValue': function(newVal){
              this.dataList()
          },
        },
		
	}
</script>
<style scoped="scoped">
	.index .page-bd .piglist .box{
        height: 3.45rem;
    }
	.page{
		background:aliceblue;
		}
  .index .page-bd .piglist .box{
	  background-size:cover;
	  border-radius:0.10rem;
	}
	.index .page-bd .piglist .box .info div span.zzf-color1{
		color:#000;
	}
	.index .page-bd .piglist .box .info{
		color:#000; 
	}
    .bank_namefix {
        display: flex;
        align-content:center;
        justify-content:flex-start;
        margin-top: 0;
    }
    .bank_namefix .bank_namefix_tit{
         color: #000;
         margin-top: 20px;
    }
    .btdqg{
		margin-right: 0.1rem;
		background: linear-gradient(to bottom, #ffea7e 0%,#ffc448 50%,#ffb744 100%);
        border-radius: 0.15rem !important;
	}
    .getGoodsPriceWap{
        position: relative;
    }
    .getGoodsPrice{
        position: absolute;
        top: 0.8rem;
        color:red;
        font-size: 0.2rem;
        font-weight: bold;
    }
</style>
  <style>
 .weui-picker__item{
   padding: 0!important;
   height: 34px!important;
   line-height: 34px!important;
 }
</style>
