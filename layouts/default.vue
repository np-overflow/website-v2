<script setup lang="ts">
import { useAsyncData } from '#app'
import { queryContent } from '#imports'

const { data: meta } = await useAsyncData('meta', () => queryContent('/meta').findOne())
</script>

<template>
	<div class="font-poppins">
		<div class="sticky top-0 z-10 font-cubano h-12">
			<div class="nav-glass" />
			<div class="navbar relative m-auto max-w-7xl shadow-glass">
				<div class="navbar-start">
					<div class="dropdown">
						<label tabindex="0" class="btn btn-ghost rounded lg:hidden">
							<Icon size="26" name="heroicons:bars-3-bottom-left" />
						</label>
						<ul
							tabindex="0"
							class="menu menu-compact bg-base-100 dropdown-content mt-3 p-2 shadow-md rounded-md w-52"
						>
							<li v-for="{ name, to, icon } in meta.menu_items" :key="to">
								<NuxtLink :to="to" class="!rounded">
									<Icon size="16" :name="icon" />
									{{ name }}
								</NuxtLink>
							</li>
						</ul>
					</div>

					<TheOverflowLogo :urls="meta.logos" />

					<NuxtLink to="/" class="btn btn-ghost rounded normal-case text-xl invisible sm:visible font-medium">
						{{ meta.title }}
					</NuxtLink>
				</div>

				<div class="navbar-center hidden lg:flex">
					<ul class="menu menu-horizontal p-0">
						<li v-for="{ name, to, icon } in meta.menu_items" :key="to">
							<NuxtLink :to="to" class="!rounded">
								<Icon size="16" :name="icon" />
								{{ name }}
							</NuxtLink>
						</li>
					</ul>
				</div>

				<div class="navbar-end">
					<TheThemeToggle />

					<NuxtLink :to="meta.join_url" class="btn btn-ghost rounded">
						<Icon size="16" name="heroicons:user-plus-solid" class="mr-2" />
						Join Us!
					</NuxtLink>
				</div>
			</div>
		</div>

		<div class="max-w-7xl m-auto">
			<slot />
		</div>
	</div>
</template>

<style scoped>
	.nav-glass::before, .nav-glass::after {
		@apply content-default absolute -top-0.25 inset-x-0 -bottom-1/2;
	}
	.nav-glass::before {
		@apply backdrop-blur-glass;
		mask-image: linear-gradient(to bottom,black 48px,transparent)
	}
</style>
