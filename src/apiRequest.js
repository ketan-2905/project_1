const apiRequest = async (url ='' , obj = null , errmsg = null) =>{

    try{
        const response = await fetch(url , obj)
        if(!response.ok) throw Error("something went wrong reload the page")
    } catch (err) {
        errmsg = err.message
    } finally{
        return errmsg
    }
}

export default apiRequest