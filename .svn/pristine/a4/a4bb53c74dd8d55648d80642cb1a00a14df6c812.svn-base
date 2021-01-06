<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

      <div class="col-sm-12">
            <!-- 작성영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered totla-info" summary="가맹점 등록">
                        <colgroup>
                            <col width="10%">
                            <col width="40%">
                            <col width="10%">
                            <col width="40%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><span class="text-primary">가맹점명</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <input type="text" class="form-control" v-model="shopInfo.fuName">
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">가맹점 그룹</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="shopInfo.fgCode">
                                                <option>그룹선택</option>
                                                <option>청담어학원</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row"><span class="text-primary">사업자번호</span></th>
                                <td>
                                    <div class="row">

                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" v-model="shopInfo.fuoFiiceNumber">
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">법인번호</span></th>
                                <td>
                                    <div class="row">

                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" v-model="shopInfo.fuCorporationNum">
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row"><span class="text-primary">전화 번호</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="telNum[0]">
                                                <option>02</option>
                                                <option>031</option>
                                                <option>032</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" placeholder="" v-model="telNum[1]">
                                        </div>
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" placeholder="" v-model="telNum[2]">
                                        </div>
                                    </div>

                                </td>
                                <th><span class="text-primary">팩스</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="faxNum[0]">
                                                <option>02</option>
                                                <option>031</option>
                                                <option>032</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" placeholder="" v-model="faxNum[1]">
                                        </div>
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" placeholder="" v-model="faxNum[2]">
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row"><span class="text-primary">대표자명</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" v-model="shopInfo.fuCeoName">
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">지역</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="shopInfo.fuArea">
                                                <option>선택</option>
                                                <option value="서울">서울</option>
                                                <option>경기</option>
                                            </select>
                                        </div>

                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row"><span class="text-primary">주소</span></th>
                                <td colspan="3">
                                    <div class="row">
                                        <div class="col col-sm-2">
                                            <span type="text" class="form-control">{{ postCodeInfo.zonecode }}</span>
                                        </div>
                                        <div class="col col-sm-2">
                                            <button class="btn btn-sm btn-secondary input-btn-util" @click="searchPostCode">주소검색</button>
                                        </div>
                                    </div>
                                    <div class="row  d-flex justify-content-start margin-top-5">
                                        <div class="col col-sm-4">
                                            <span type="text" class="form-control" >{{ postCodeInfo.address}}</span>
                                        </div>
                                        <div class="col col-sm-5">
                                            <input type="text" class="form-control" placeholder="상세주소" required>
                                        </div>
                                    </div>
                                </td>

                            </tr>

                            <tr>
                                <th scope="row"><span class="text-primary">외부연결1</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" v-model="shopInfo.fuOutCode">
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">외부연결2</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" v-model="shopInfo.fuOutCode2">
                                        </div>

                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row"><span class="text-primary">사용여부</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-12 d-flex align-items-center">
                                            <div class="styled-radio">
                                                <input type="radio" name="radio" id="radShop-1" value="1" v-model="shopInfo.fuvValid">
                                                <label for="radShop-1" >사용</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="radio" id="radShop-2" value="0" v-model="shopInfo.fuvValid">
                                                <label for="radShop-2">미사용</label>
                                            </div>
                                        </div>
                                    </div>

                                </td>
                                <th><span class="text-primary">메모</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-12">
                                            <input type="text" class="form-control" v-model="shopInfo.fuMemo">
                                        </div>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div class="widget-footer">
                    <div class="row col">
                        <div class="col-sm-6">
                            <button type="button" class="btn btn-outline-primary" @click="$router.push({name:'baseShopList'})">목록</button>
                        </div>
                        <div class="col-sm-6 d-flex justify-content-end">
                            <button type="button" class="btn btn-primary" @click="saveBtn">저장</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 입력폼 끝-->

        </div>
    </div>
    <searchPostPopup title="주소검색" @close="closeModal" v-if="modal" @get-post-info="getPostInfo"></searchPostPopup>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import pageHeader from '@/mixin/pageHeader'
import searchPostPopup from '@/components/popup/DaumPostPopup'

const shopStore = 'shopStore'
export default {
  name: 'baseShopInput',
  mixins: [
    pageHeader({title: '가맹점등록/수정', groupName: '기초관리'})
  ],
  components: {
    searchPostPopup
  },
  data: function () {
    return {
      modal: false,
      postCodeInfo: {},
      shopInfo: {},
      telNum: [],
      faxNum: []
    }
  },
  created () {
    if (this.$route.params.fuCode !== undefined) {
      let param = { pfuCode: this.$route.params.fuCode, pfuType: this.$route.params.fuType }
      this.actionFindShopList(param)
        .then(res => {
          this.shopInfo = res[0]
          console.log(this.shopInfo.fuArea)
          this.telNum = this.shopInfo.fuTel.split('-')
          this.faxNum = this.shopInfo.fuFax.split('-')
          this.shopInfo.fuArea = this.shopInfo.fuArea.trim()
        })
    }
  },
  computed: {
    ...mapGetters(shopStore, [
      'getShopInfo'
    ])
  },
  methods: {
    searchPostCode () {
      this.modal = true
    },
    closeModal () {
      this.modal = false
    },
    getPostInfo (data) {
      this.postCodeInfo.zonecode = data.zonecode
      this.postCodeInfo.address = data.address
    },
    saveBtn () {
      console.log(this.shopInfo)
      let param = {
        franchiseeRct: {
          rctCode: this.shopInfo.fuCode,
          groupName: this.shopInfo.fgCode,
          rctName: this.shopInfo.fuName,
          rctLink1: this.shopInfo.fuOutCode,
          rctLink2: this.shopInfo.fuOutCode2
        },
        franchiseeMpBranch: {
          rctCode: this.shopInfo.fuCode,
          registrationNo: this.shopInfo.fuoFiiceNumber,
          ownerName: this.shopInfo.fuCeoName,
          phone: this.telNum[0] + this.telNum[1] + this.telNum[2],
          faxNo: this.faxNum[0] + this.faxNum[1] + this.faxNum[2],
          address1: this.shopInfo.fuAddres,
          address2: this.shopInfo.fuAddres2,
          isvalid: this.shopInfo.fuvValid
        }
      }
      this.actionUpdateShop(param)
    },
    ...mapActions(shopStore, [
      'actionFindShopList',
      'actionUpdateShop'
    ])
  }
}
</script>

<style>

</style>
