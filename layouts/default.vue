<script setup lang="ts">
import { useAsyncData } from '#app'
import { queryContent } from '#imports'

const { data: meta } = await useAsyncData('meta', () => queryContent('meta').findOne())
</script>

<template>
	<div class="font-poppins">
		<div class="sticky top-0 z-10 font-cubano">
			<div class="nav-glass" />
			<div class="nav-border relative m-auto flex w-full max-w-7xl flex-col">
				<div class="navbar h-12">
					<div class="navbar-start">
						<div class="dropdown">
							<label tabindex="0" class="btn-ghost btn rounded lg:hidden">
								<Icon size="26" name="heroicons:bars-3-bottom-left" />
							</label>
							<ul
								tabindex="0"
								class="dropdown-content menu menu-compact mt-3 w-52 rounded-md bg-base-100 p-2 shadow-md"
							>
								<li v-for="{ name, to, icon } in meta.menu_items" :key="to">
									<NuxtLink :to="to" class="!rounded">
										<Icon size="16" :name="icon" />
										{{ name }}
									</NuxtLink>
								</li>
							</ul>
						</div>

						<div class="m-4 flex h-24 border-2 border-gray-300 p-3 lg:m-4 lg:p-4" />

						<div class="hidden sm:flex">
							<TheOverflowLogo :urls="meta.logos" />
						</div>

						<NuxtLink to="/" class="btn-ghost btn rounded text-xl font-medium normal-case">
							{{ meta.title }}
						</NuxtLink>
					</div>

					<div class="navbar-center hidden lg:flex">
						<ul class="menu menu-horizontal m-0 p-0">
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

						<NuxtLink :to="meta.join_url" class="btn-ghost btn rounded ">
							<Icon size="16" name="heroicons:user-plus-solid" class="mr-2" />
							Join Us!
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>

		<div class="m-auto max-w-7xl">
			<slot />
		</div>
	</div>
</template>

<style scoped>
	.nav-glass::before, .nav-glass::after {
		@apply content-default absolute top-[-1px] inset-x-0 -bottom-1/2;
	}
	.nav-glass::before {
		@apply backdrop-blur-glass;
		mask-image: linear-gradient(to bottom,black 48px,transparent)
	}

	.nav-border::after {
		@apply content-default inset-x-0 bottom-0 h-px bg-[#00000015] dark:bg-[#ffffff15] w-full;
	}
</style>
