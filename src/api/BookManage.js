import request from '../utils/request.js'


export function GetBooks() {

    return request.get('/Book')
}

export function UpdateBooks(data) {

    return request.post('/Book/update',data)
}

export function addBook(data) {

    return request.post('/Book/add',data)
}

export function deleteBook(data) {

    return request.post('/Book/delete',data)
}