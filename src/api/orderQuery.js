import request from '../utils/request.js'

export function orderQuery(data) {

    return request.post('/OrderQuery/query', data)
}
