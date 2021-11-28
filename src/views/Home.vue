<template>
	<div class="container-fluid">
		<div class="row flex-column">

			<div class="col-6 mx-auto text-center mt-4">
				<h3>{{ this.$store.state.home.package.name }}</h3>
				<h2>{{ this.$store.state.home.package.limit }}</h2>
				<h2>{{ this.$store.state.home.package.unit }}</h2>
			</div>
			<div class="col-6 mx-auto text-center mt-4">
				test
			</div>

		</div>
	</div>
</template>


<script>
export default {
	name: "Home",

	mounted() {
		this.$store.dispatch("home/initialize")
	}

}
</script>


<style lang="scss" scoped>
.container-fluid {
	height: 500px;
	color: #ffffff;
	background: linear-gradient(180deg, rgba(61,55,189,1) 0%, rgba(53,113,209,1) 100%);
}
</style>
