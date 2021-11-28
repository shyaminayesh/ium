<template>
    <div class="container-fluid d-flex align-items-center vh-100">
        <div class="col-3 mx-auto bg-white shadow">
            <div class="card">

                <div class="card-header bg-white">
                    <h3>Login</h3>
                    <p>Enter your username and password to login</p>
                </div>

                <div class="card-body">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <b-form-input v-model="field.username" type="text" class="form-control input-lg" :state="validation" placeholder="943322XXXXX"></b-form-input>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <b-form-input v-model="field.password" type="text" class="form-control input-lg" :state="validation" placeholder="Password"></b-form-input>
                    </div>
                </div>

                <div class="card-footer">
                    <button v-on:click="this.login" class="btn btn-primary w-100 mt-3">Login</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",

    data: () => ({
        field: {
            username: "",
            password: ""
        },
        validation: null
    }),

    methods: {

        login() {

            this.validation = null

            /**
             * Dispatch request to the origin API and act according
             * to the response.
             */
            this.$store.dispatch("user/login", {
                username: this.field.username,
                password: this.field.password
            }).then(Response => {
                if ( Response == true ) { this.$router.push("/home") } else { this.validation = false }
            }).catch(() => this.validation = false )

        }

    }

}
</script>

<style lang="scss" scoped>
.container-fluid {
    background-color: #f2f6ff;
}
</style>