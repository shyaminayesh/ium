export default {
    namespaced: true,

    state: {
        package: {
            name: null,
            limit: null,
            unit: null
        }
    },

    actions: {

        initialize: ({ commit }) => {
            return new Promise((resolve, reject) => {

                fetch("https://omniscapp.slt.lk/mobitelint/slt/sltvasservices/dashboard/summary", {
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("access_token"),
                        "subscriberid": localStorage.getItem("subscriberid"),
                        "x-ibm-client-id": "622cc49f-6067-415e-82cd-04b1b76f6377"
                    }
                }).then(Response => Response.json()).then(Response => {
                    commit("set_package", Response)
                    resolve(true)
                }).catch(() => reject(false))

            })
        }

    },

    mutations: {

        set_package: (state, data) => {
            state.package.name = data.my_package_info.package_name
            state.package.limit = data.my_package_summary.limit
            state.package.unit = data.my_package_summary.volume_unit
        }

    }

}