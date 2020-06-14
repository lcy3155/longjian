import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
		num:1,
		personal:{//我的信息
            username:'13112341234',
            password:'qwer1234',
            role:'超级管理员',
            part:'采购经理',
            phone:'13112341234',
            Email:'13111111111',
            radio: '1',
            name:'张三',
            birthday:'',
            showCalendar: false,
            uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
            introduce:'采购业务管理者'
        },
        list:[//callCenter订单管理页信息
            {
                id:'1',
                name:'金华光正1',
                phone:'13112312311',
                contacts:'张先生1',
                place :'2019/1/1',
                Presentation :'2019/1/2',
                advance :'111',
                Order  :'11111',
                StatusL :'处理中',
                StatusLi :'2',
                salesman :'1110',
                entryTime :'2019/12/2',
                enclosureUrl:'',
                fileList:[
                    { url: 'https://img.yzcdn.cn/vant/leaf.jpg'}
                ],
                birthday:'2019/12/1',
                presentation:'2019/12/1',
                orderNo:'DD202006131900011111',
                introduce:'备注11111111111'
            },{
                id:'2',
                name:'金华光正2',
                phone:'13112312311',
                contacts:'王2',
                place :'2019/1/1',
                Presentation :'2019/1/2',
                advance :'222222',
                Order  :'11111',
                StatusL :'已完成',
                StatusLi :'1',
                salesman :'1110',
                entryTime :'2019/12/2',
                enclosureUrl:'',
                fileList:[
                    { url: 'https://img.yzcdn.cn/vant/leaf.jpg' }
                ],
                birthday:'2019/12/1',
                presentation:'2019/12/1',
                orderNo:'DD2020061319000222222',
                introduce:'备注aaaaaaaaaaaa '
            },{
                id:'3',
                name:'金华光正3',
                phone:'13112312311',
                contacts:'赵3',
                place :'2019/1/1',
                Presentation :'2019/1/2',
                advance :'33333333',
                Order  :'11111',
                StatusL :'转未处理',
                StatusLi :'3',
                salesman :'1110',
                entryTime :'2019/12/2',
                enclosureUrl:'',
                fileList:[
                    { url: 'https://img.yzcdn.cn/vant/leaf.jpg' }
                ],
                birthday:'2019/12/1',
                presentation:'2019/12/1',
                orderNo:'DD202006131900033333',
                introduce:'备注bbbbbbbbb'
            },
        ],
        data:[//客户列表
            {
                id:'1',
                name:'客户1',
                contact:'李总',
                phone:'13112312141',
                salesman:'管理员',
                orderNo:'DD20200613190004444444',
                checked:false,
            },
            {
                id:'2',
                name:'客户2',
                contact:'张总',
                phone:'13112312141',
                salesman:'超级管理员',
                orderNo:'DD20200613190005555555',
                checked:false,
            },
        ]
	},
	mutations:{
		intn(){
            ++state.num;
        }
	},
	actions:{
		getCity(context){
			
		},
		alipay(context){
			
		}
	}
});
 
export default store;