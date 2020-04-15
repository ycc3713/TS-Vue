import Mock from 'mockjs'

export default {
    login: (config: any): object => {
        let data = config.body
        let userList: object = {}
        if (data.username === 'admin') {
            userList = {
                username: '管理员',
                token: 'admin'
            }
        } else {
            userList = {
                username: '用户',
                token: 'user'
            }
        }
        return {
            code: 200,
            data: { userList: userList }
        }
    }
}