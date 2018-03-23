<template>
  <form role="form" class="clearfix">
                            <div class="form-group">
                                <!--a href="#" class="pull-right label-forgot">Forgot email?</a-->
                                <label for="inputUsernameEmail">用户名</label>
                                <input type="text" id="inputUsernameEmail" class="form-control">
                            </div>
                            <div class="form-group">
                                <!--a href="#" class="pull-right label-forgot">Forgot password?</a-->
                                <label for="inputPassword">密码</label>
                                <input type="password" id="inputPassword" class="form-control">
                            </div>
                             <div class="form-group">
                                <!--a href="#" class="pull-right label-forgot">Forgot password?</a-->
                                <label for="inputPassword">再次输入密码</label>
                                <input type="password" id="inputPassword" class="form-control">
                            </div>
                            
                            <!-- <button class="btn btn btn-primary pull-right" type="submit">
                                登 录
                            </button> -->
                        </form>
</template>
<script>
export default {
  name: "register",
  data() {
    return {};
  }
};
</script>

