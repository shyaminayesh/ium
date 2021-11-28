export default {
    namespaced: true,

    state: {},

    actions: {

        login: (_, payload) => {
            return new Promise((resolve, reject) => {

                let formData = new FormData
                formData.append("username", payload.username)
                formData.append("password", payload.password)
                formData.append("scope", "scope1")
                formData.append("grant_type", "password")
                formData.append("client_id", "622cc49f-6067-415e-82cd-04b1b76f6377")

                fetch("https://omniscapp.slt.lk/mobitelint/slt/sltvasoauth/oauth2/token", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams(Object.fromEntries(formData)),
                }).then(Response => { return ( Response.status == 200 ) ? Response.json() : reject(false) }).then(Response => {

                    localStorage.setItem("access_token", Response.access_token)
                    localStorage.setItem("refresh_token", Response.refresh_token)
                    localStorage.setItem("subscriberid", Response.metadata)
                    localStorage.setItem("consented_on", Response.consented_on)
                    localStorage.setItem("expires_in", Response.expires_in)
                    localStorage.setItem("refresh_token_expires_in", Response.refresh_token_expires_in)

                    resolve(true)

                }).catch(() => reject(false))

            })
        }

    }
}