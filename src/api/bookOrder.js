import request from '../utils/request.js'

export function bookOrder(data) {

    return request.post('/Order/order', data)
}
