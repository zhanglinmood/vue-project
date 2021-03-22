// 所有的接口请求函数
import Ajax from './ajax'
import mockAjax from '@/api/mockAjax'




// 请求参数：params  query  body
// axios的函数写法
// axios({

// })

// axios的对象写法
// axios.get()

export const reqCategoryList = () => {
    return Ajax({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}


export const reqBannerList = () => {
    return mockAjax({
        url:'banner',
        method:"get"
    })
}


export const reqFloorList = () => {
    return mockAjax({
      url:'/floor',
      method:'get'
    })
  }

  
reqCategoryList()
