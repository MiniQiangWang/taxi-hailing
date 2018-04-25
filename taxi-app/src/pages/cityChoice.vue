<template>
  <div class="bank">
      <div class="div_hearder">
			<input type="text" placeholder="请输入城市名" />
			<span class="span_cancel">取消</span>
		</div>
		<div class="bgbody bg_section">
			<div class="div_dangqian">
				<div class="chengshi">
					<span>当前城市：</span>
			        <span class="des_address">深圳市</span>
				</div>
				<div class="main_head_hack">A</div>
				<div class="div_city">
					<ul>
						<li>鞍山市</li>
						<li>安庆市</li>
						<li>安阳市</li>
						<li>阿拉善盟</li>
					</ul>
				</div>
				<div class="main_head_hack">B</div>
				<div class="div_city">
					<ul>
						<li>北京1</li>
						<li>北京2</li>
						<li>北京3</li>
						<li>北京4</li>
					</ul>
				</div>
				<div class="city_list">
					<ul class="letter_list">
                        <li class="item">A</li>
                        <li class="item">B</li>
                        <li class="item">C</li>
                        <li class="item">D</li>
                    </ul>
				</div>
		   </div>
		</div>		
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.bank{
	position: fixed;
    width:100%;
    height: 100%;
}
    /*要去的地方-选择城市*/
.div_hearder{
	width: 100%;
	min-height: 3.75rem;
	line-height: 3.75rem;
	border-bottom: 1px solid #F4F4F5;
	box-shadow: 0px 1px 5px 3px #ececec;
	overflow: hidden;
}
.div_hearder input {
	padding-left: 1.7rem;
}
.span_cancel{
	width: 4rem;
	height: 3.75rem;
	line-height: 3.75rem;
	text-align: center;
	float: right;
	color: #999;
}

.bg_section{
	position: relative;
	top: 0;
	height: 100%;
}
.div_dangqian{
	  position: relative;
    width: 90%;
    top: 20px;
    margin: 0 auto;
    background: #fff;
    border-radius: 5px;
    color: #555;
    overflow: hidden;
    box-shadow: 1px 1px 5px 5px #f1f1f1;
}
.bgbody{
	background-color: #f7f7f7;
}
.div_dangqian .chengshi{
	  position: relative;
    height: 2rem;
    line-height: 2rem;
    margin: 0 auto;
    padding: 10px;
    background: #fff;
    color: #555;
    overflow: hidden;
}
.main_head_hack{
	width: 100%;
	line-height: 3rem;
		height: 3rem;
	overflow: hidden;
	background: #F4F4F5;
	padding-left: 10px;
}
.div_city{
	
}
.div_city ul li{
	padding: 10px;
	height: 3rem;
	line-height: 3rem;
	border-bottom: 1px solid #F7F7F7;
}
.city_list{
	position: fixed;
    top: 20%;
    right: 3rem;
}
</style>


