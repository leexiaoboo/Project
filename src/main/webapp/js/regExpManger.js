var regExpManger = {
	userNameReg:/^[a-zA-Z0-9_-]{4,12}$/, //用户名正则表达式
	regNum : /\d+/,     //验证码     长度等级
	regWord : /[a-zA-Z]+/, //验证码     长度等级     
	regOther : /[^\da-zA-Z]+/, //验证码     长度等级
	emailReg: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, //邮箱
	mobilReg: /^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$/,//手机号
	qqPattern: /^[1-9][0-9]{4,10}$/,//QQ
	idCard: /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/ //身份证号码
}