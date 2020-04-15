import Mock from 'mockjs'
import userAPI from './user'
// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
    timeout: '300-1000'
})

// 有关用户操作的接口
Mock.mock(/\/user\/login/, 'POST', userAPI.login)

