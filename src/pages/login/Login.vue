<template>
  <div class="container">
    <div class="content">
      <div class="content-wrapper">
        <h2 class="slogan">
          {{ site_name }}
          <br>持续稳定的储存服务
        </h2>
        <div
          style="display: flex; justify-content: center; flex-direction: column; padding: 30px; background: rgb(255, 255, 255); border-radius: 6px;"
        >
          <h4
            style="margin: 0px 0px 20px; text-align: center; color: rgba(0,0,0,.65); letter-spacing: 12px;"
          >登录</h4>
          <Form
            ref="loginValidate"
            :model="loginValidate"
            :rules="ruleValidate"
            label-position="top"
            class="submit-form"
          >
            <Row type="flex" justify="start" style="max-width:280px;">
              <Col span="24">
                <Form-item label="账号：" prop="username">
                  <Input size="large" v-model="loginValidate.username" clearable 
                    @keyup.enter.native="handleSubmit"/>
                </Form-item>
              </Col>
              <Col span="24">
                <Form-item label="密码：" prop="password">
                  <Input type="password" size="large" v-model="loginValidate.password" clearable 
                    @keyup.enter.native="handleSubmit"/>
                </Form-item>
              </Col>
              <Col span="24" style="margin:-5px 0 15px">
                <div class="pro">
                  <div class="direct">
                    <Checkbox-group>
                      <Checkbox
                        label="15天自动登录"
                        true-value="1"
                        false-value="0"
                        v-model="loginValidate.remember"
                      ></Checkbox>
                    </Checkbox-group>
                  </div>
                </div>
              </Col>
              <Col span="24">
                <div class="sub text-center">
                  <Button
                    size="large"
                    shape="circle"
                    class="login-btn"
                    type="primary"
                    long
                    :loading="sending"
                    @click="handleSubmit"
                  >登&nbsp;&nbsp;录</Button>
                </div>
              </Col>
              <Col span="24" class="oauth" style="text-align: center;margin-top: 20px;">
                <div class="text">使用第三方登录</div>
                <a href="/Member/QQLogin">
                  <i class="iconfont qq">&#xe600;</i>
                </a>
                <a href="/">
                  <i class="iconfont wechat">&#xe619;</i>
                </a>
                <a href="/">
                  <i class="iconfont dingding">&#xe709;</i>
                </a>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.iconfont {
  font-family: "iconfont" !important;
  font-size: 32px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  color: #8b9196;
  padding: 0 10px;
}

.iconfont.qq:hover {
  color: #00a4ff;
}

.iconfont.wechat:hover {
  color: rgb(81, 195, 50);
}

.iconfont.dingding:hover {
  color: #3296fa;
}

.container {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: #f0f2f5;
  .content {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-size: cover;
    background-image: url(../../assets/images/cloud-login-bg.jpg);
    .content-wrapper {
      position: absolute;
      top: -100px;
      left: 0;
      right: 0;
      bottom: 0;
      max-width: 1080px;
      margin: 0 auto;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      .slogan {
        text-align: center;
        color: #fff !important;
        font-size: 36px;
        letter-spacing: 2px;
        line-height: 48px;
      }
      h4 {
        font-size: 28px;
        color: rgba(0, 0, 0, 0.65);
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      sending: false,
      site_name: process.env.VUE_APP_SITENAME,
      loginValidate: {
        username: "",
        password: "",
        remember: false
      },
      ruleValidate: {
        username: [
          {
            required: true,
            message: "请输入用户名"
          },
          {
            pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
            message: "请填写正确的用户名"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码"
          },
          {
            min: 4,
            max: 16,
            message: "请输入 6 - 16 位密码"
          }
        ]
      }
    };
  },
  created() {},
  methods: {
    handleSubmit() {
      this.$refs.loginValidate.validate(valid => {
        if (valid) {
          if(this.sending) {
            return false
          }
          this.sending = true;
          this.$ajax.post("/Member/Login",{
            userMail: this.loginValidate.username,
            userPass: this.loginValidate.password,
            captchaCode: '',
          }).then(
            function(ret) {
              this.sending = false;
              if(ret.code != 200) {
                this.$Message.error(ret.message);
              } else {
                this.$Message.success(ret.message);
                window.location.href = '/Home'
              }
            }.bind(this)
          );
        }
      });
    }
  }
};
</script>
