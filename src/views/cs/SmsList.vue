<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

        <div class="col-sm-12">

            <!-- 검색영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered" summary="SMS 전송 결과">
                        <colgroup>
                            <col width="10%">
                            <col width="40%">
                            <col width="10%">
                            <col width="40%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><span class="text-primary">문자구분</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <select class="form-control">
                                                                <option>전체</option>
                                                                <option>SMS</option>
                                                                <option>LMS</option>
                                                            </select>
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">전송구분</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <select class="form-control">
                                                                <option>전체</option>
                                                                <option>일반</option>
                                                                <option>주문</option>
                                                            </select>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">고객검색</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control">
                                                                <option>주문번호</option>
                                                                <option>학생ID</option>
                                                                <option>휴대폰번호</option>
                                                            </select>
                                        </div>
                                        <div class="col col-sm-6">
                                            <input type="text" class="form-control" placeholder="검색어 입력">
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">내용</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" placeholder="검색어 입력">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">전송일자</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <DateSelect @state-start-date="startDate" @state-end-date="endDate" :defStartDate="pfromDate" :defEndDate="ptoDate"></DateSelect>
                                        </div>
                                    </div>
                                </td>
                                <th>전송결과</th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-12 d-flex align-items-center">
                                            <div class="styled-radio">
                                                <input type="radio" name="radQa" id="radQa-1">
                                                <label for="radQa-1">전체</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="radQa" id="radQa-2">
                                                <label for="radQa-2">성공</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="radQa" id="radQa-3">
                                                <label for="radQa-3">실패</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="text-center">
                        <button class="btn btn-primary">검색</button>
                    </div>

                </div>
            </div>
            <!-- 검색영역 끝-->

            <!-- 리스트영역 시작 -->
            <div class="widget has-shadow">
                <div class="widget-header bordered">
                    <div class="row">
                        <div class="col-sm-6 d-flex align-items-center justify-content-md-start justify-content-center">
                            <select class="form-control col-sm-2">
                                                <option>표시갯수</option>
                                                <option>10개</option>
                                                <option>20개</option>
                                                <option>30개</option>
                                            </select>
                            <label class="col-sm-4">조회건수 : 20개</label>
                        </div>
                        <div class="col-sm-6 d-flex justify-content-end">
                            <button class="btn btn-outline-primary">SMS재전송</button>
                        </div>
                    </div>
                </div>
                <div class="widget-body">
                    <table id="cs-sms-table" class="table table-bordered" summary="SMS전송결과 리스트">
                        <colgroup>
                            <col width="5%">
                            <col width="7%">
                            <col width="7%">
                            <col width="7%">
                            <col width="10%">
                            <col width="10%">
                            <col width="7%">
                            <col width="10%">
                            <col width=*>
                            <col width="7%">
                            <col width="7%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">
                                    <div class="styled-checkbox margin-bottom-5">
                                        <input type="checkbox" name="checkbox" id="check-1">
                                        <label for="check-1"></label>
                                    </div>
                                </th>
                                <th scope="col">NO</th>
                                <th scope="col">문자구분</th>
                                <th scope="col">전송구분</th>
                                <th scope="col">주문번호</th>
                                <th scope="col">학생ID</th>
                                <th scope="col">주문상태</th>
                                <th scope="col">수신번호</th>
                                <th scope="col">전송일시</th>
                                <th scope="col">전송결과</th>
                                <th scope="col">재전송</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="styled-checkbox margin-bottom-5">
                                        <input type="checkbox" name="checkbox" id="check-1">
                                        <label for="check-1"></label>
                                    </div>
                                </td>
                                <td>123456</td>
                                <td>SMS</td>
                                <td>일반</td>
                                <td>12345788</td>
                                <td>sthdkfjdkkim</td>
                                <td>주문완료</td>
                                <td>010-****-1234</td>
                                <td>2020-12-12 오후 3:22:11</td>
                                <td>성공</td>
                                <td><button class="btn btn-sm btn-primary">재전송</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="styled-checkbox margin-bottom-5">
                                        <input type="checkbox" name="checkbox" id="check-1">
                                        <label for="check-1"></label>
                                    </div>
                                </td>
                                <td>123456</td>
                                <td>SMS</td>
                                <td>일반</td>
                                <td>12345788</td>
                                <td>sthdkfjdkkim</td>
                                <td class="text-danger">환불완료</td>
                                <td>010-****-1234</td>
                                <td>2020-12-12 오후 3:22:11</td>
                                <td class="text-danger">실패</td>
                                <td><button class="btn btn-sm btn-primary">재전송</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="styled-checkbox margin-bottom-5">
                                        <input type="checkbox" name="checkbox" id="check-1">
                                        <label for="check-1"></label>
                                    </div>
                                </td>
                                <td>123456</td>
                                <td>SMS</td>
                                <td>일반</td>
                                <td>12345788</td>
                                <td>sthdkfjdkkim</td>
                                <td class="text-info">반품접수</td>
                                <td>010-****-1234</td>
                                <td>2020-12-12 오후 3:22:11</td>
                                <td class="text-danger">실패</td>
                                <td><button class="btn btn-sm btn-primary">재전송</button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <!-- 리스트영역 끝 -->
        </div>
    </div>
  </div>
</template>

<script>
import pageHeader from '@/mixin/pageHeader'
import dateSelect from '@/mixin/dateSelect'

export default {
  mixins: [
    pageHeader({title: 'SMS 전송결과', groupName: '상담관리'}),
    dateSelect
  ]
}
</script>

<style>

</style>
