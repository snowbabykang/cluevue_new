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
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox">记住用户名</label>
                                    <router-link class="forgotLnk pull-right" :to="{ path: 'findpassword' }">忘记密码？</router-link>
                            </div>
                            <!-- <button class="btn btn btn-primary pull-right" type="submit">
                                登 录
                            </button> -->
                        </form>
</template>
<script>
export default {
  name: "login",
  data() {
    return {};
  }
};
</script>

