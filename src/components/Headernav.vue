<template>
    <div class="headerNav">
        <header class="header">
          <div class="navbar-fixed-container">
          	<div class="navbar navbar-inverse navbar-fixed-top affix-top" data-spy="affix" data-offset-top="1">
          	    <nav role="navigation">
          	        <div class="container">
          	            <div class="nav navbar-header">
          	                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" aria-label="Expand and Collapse Menu">
          	                        <span class="icon-bar"></span>
          	                        <span class="icon-bar"></span>
          	                        <span class="icon-bar"></span>
          	                    </button>
          	                <a class="navbar-brand" href="/">logo</a>
          	            </div>
          	            <div class="navbar-collapse collapse">
          	                <ul class="nav navbar-nav navbar-left">
          	                    <li id="addClass"><router-link :to="'/index/invite'">招标信息</router-link></li>
          	                    <li><router-link :to="'/index/msgsource'">信源管理</router-link></li>
          	                    <li><router-link :to="'/index/usercontrol'">用户管理</router-link></li>
          	                </ul>
          	
          	                <ul class="nav navbar-nav navbar-right">
          	                    <li>
          	                        <a href="/Search" title="Search" class="btn search-btn" id="nav-search">
          						        <span>管理员</span>
          	                        </a>
          	                    </li>
          	                </ul>
          	            </div>
          	        </div>
          	    </nav>
          	</div>
          </div>
        </header>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
	  $('.navbar-left').on('click', 'li', function() {
		 $(this).attr('id','addClass').siblings().attr('id','');
		 if($('.navbar-collapse').is('.in')){
			 $('.navbar-collapse').removeClass('in')
		 }
		//$('.navbar-collapse').attr('class','in')
	  })
  }
};
</script>
<style lang="less" scoped>
.headerNav {
  width: 100%;
  margin: 0 auto;
}
.header {
  width: 100%;
  margin: 0 auto;
  height: 52px;
  background: rgba(51, 51, 51, 1);
}
.navbar-right {
  float: left;
}
#addClass{
	a{
		color:#fff;
		font-weight: 500;
	}
}

@media only screen and (max-width: 700px) {
  
}
@media screen and (min-width: 1200px) {
  //大于等于
  .container{
	padding:0;
  }
}
</style>


