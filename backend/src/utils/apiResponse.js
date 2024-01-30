class apiResponse {
    constructor(statusCode,data,message = "success") {
        this.data = data
        this.message = message
        this.success = statusCode < 400
        this.statusCode = statusCode
    }
}

export {apiResponse}