export default function isAuthenticated(to, from, next) {
    if (!localStorage.getItem("access_token")) {
        return next({ name: "Login" })
    } else {
        (to.name == "Root") ? next({ name: "Home" }) : next()
    }
}