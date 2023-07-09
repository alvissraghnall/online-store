
<template>
  <div class="relative flex-none border border-zinc-200 h-fit w-[90%] max-w-full flex flex-col justify-center gap-6 bg-card-glass p-5 rounded-xl text-white/75 overflow-hidden max-md:mx-auto">
		<Mask />
		<header class="z-20 flex items-center justify-between">
			<img :src="subtractSvg" alt="" class="" />

			<img
			  v-if="brand !== 'default'"
				:src="brandIcons[brand]"
				alt=""
			/>
		</header>

		<div class="z-20 flex flex-col gap-5">
		  <strong class="text-2xl">
			  {{cardNumber ? cardNumber : '----------------------------'}}
			</strong>

			<p class="text-sm leading-normal">
			  Onwer

				<strong class="text-lg block uppercase">
				  {{ownerName ? ownerName : '-------------------'}}
				</strong>
			</p>

			<div class="w-full flex items-center justify-between">
			  <p class="text-sm leading-normal">
				  Expiration

					<strong class="block ">
					  {{expiration ? expiration : '--/--'}}
					</strong>
				</p>

				<p class="text-sm leading-normal">
				  CVV

					<strong class="block">
					  {{cvv ? cvv : '------'}}
					</strong>
				</p>

				<img :src="chipSvg" alt="" class="rounded-md bg-neutral-500" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
  import Mask from './Mask.vue';
  import { ownerName, cardNumber, expiration, cvv, brandIcons, brand } from '@util/card-brands';
  import subtractSvg from '@/assets/subtract.svg';
  import chipSvg from '@/assets/chip.svg';
  
</script>