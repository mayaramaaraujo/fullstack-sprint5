const ServiceUtils = {
    handleResponse(req) {
        return req.then(resp => {
            if (resp.ok) {
                // console.log(resp.json())
                return resp.json();
            } else {
                throw new Error(resp.json());
            }
        })
    }
}

export default ServiceUtils;