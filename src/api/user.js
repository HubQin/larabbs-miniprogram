import { request, authRequest } from '@/utils/request'

export function getCurrentUser(data) {
  return authRequest('user')
}

export function logout(token) {
  return request('authorizations/current', {
    method: 'delete',
    header: {
      'Authorization': 'Bearer ' + token
    }
  })
}
