// 把登录信息存储到本地存储（读和删除）

export const setToken = (val:string) => {
    window.localStorage.setItem('token', val)
}
  
export const getToken = () => {
  return  window.localStorage.getItem('token')
}

export const removeToken = () => {
  window.localStorage.removeItem('token')
}