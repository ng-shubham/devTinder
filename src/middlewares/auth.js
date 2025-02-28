const adminAuth = (req, res, next) => {
    console.log('/admin called');
    const token = "xyz"
    const isAdminAuthorized = token === "xyz"
    if (!isAdminAuthorized) {
        res.status(401).send("Unauthorized request")
    } else {
        next()
    }
}

const userAuth = (req, res, next) => {
    const token = "abc"
    const userAuthentication = token === "abc"
    console.log('/user called');
    if(!userAuthentication){
        res.status(401).send("Unauthorized User!!!")
    } else {
        next()
    }
}

module.exports = {
    adminAuth,
    userAuth
}