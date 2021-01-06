<template>
   <div class="container-fluid no-padding h-100">
        <div class="row flex-row h-100 bg-white">
            <div class="col-xl-8 col-lg-6 col-md-5 no-padding">
                <div class="learn21-bg background-01">
                    <div class="learn21-overlay overlay-01"></div>
                    <div class="authentication-col-content mx-auto">
                        <h1 class="gradient-text-01">
                            Welcome To Learn21
                        </h1>
                        <span class="description">
                            Learn21 관리자입니다. <br>
                            발급받은 ID, PW를 입력하고 로그인 하세요!
                        </span>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-lg-6 col-md-7 my-auto no-padding">
                <!-- Begin Form -->
                <div class="authentication-form mx-auto">
                    <div class="logo-centered">
                        <!-- <img src="@/img/logo.png" alt="logo"> -->
                    </div>
                    <h3>ADMIN LOGIN</h3>
                    <form>
                        <div class="group material-input">
                            <input type="text" v-model="loginId" required>
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>ID</label>
                        </div>
                        <div class="group material-input">
                            <input type="password" v-model="password" required>
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>PW</label>
                        </div>
                    </form>

                    <div class="sign-btn text-center">
                        <button href="" class="btn btn-lg btn-gradient-01" @click="signIn">로그인</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { sigin } from '@/api'
export default {
  data: function () {
    return {
      loginId: '',
      password: ''
    }
  },
  methods: {
    signIn () {
      let param = {}
      param.loginId = this.loginId
      param.password = this.password
      sigin(param)
        .then(res => {
          console.log('logibn', res)
        })
    }
  }

}
</script>

<style>

</style>
