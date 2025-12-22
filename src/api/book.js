import request from './request'

export function getBookList() {

    return request.get('/book')
}
