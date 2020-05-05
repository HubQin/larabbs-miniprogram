import { request } from '@/utils/request'

export function login(data) {
  return request('weapp/authorizations', {method: 'post', data: data})
}

export function refresh(token) {
  return request('authorizations/current', {
    method: 'put',
    header: {
      'Authorization': 'Bearer ' + token
    }
  })
}
