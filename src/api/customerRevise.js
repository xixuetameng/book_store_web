import request from '../utils/request.js'

export function updateCustomer(data) {

    return request.post('/CustomerRevise/revise', data)
}
