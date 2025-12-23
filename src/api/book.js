import request from '../utils/request.js'

export function getBookList() {

    return request.get('/book')
}
