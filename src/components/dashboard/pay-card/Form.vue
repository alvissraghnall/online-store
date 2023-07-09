<script setup lang="ts">
  import { IMaskComponent } from 'vue-imask';
  import Loading from './Loading.vue';
  import { handleSubmit, ownerName, cardNumber, expiration, cvv, changeCCBrand, unavailableSubmitAction, isLoading } from '@util/card-brands';
  const expirationPattern = '/[01-12]\/[00-56]/';
</script>

<template>
  <form
	  class="flex-1 max-w-[500px] text-zinc-100 flex flex-col gap-5 lg:ml-2"
		@submit="handleSubmit"
	>
	  <label class="flex flex-col gap-2 px-5">
		  <p class="text-sm text-neutral-500">CARD NUMBER</p>

			<IMaskComponent
                class="bg-white text-zinc-800 w-full rounded ring-1 ring-blue-500 focus:ring-blue-100 px-3 py-2"
				v-model="cardNumber"
				placeholder="xxxx xxxx xxxx xxxx"
				:mask="'0000 0000 0000 0000'"
				@accept:unmasked="changeCCBrand"
                name="cardNumber"
			/>
		</label>

		<label class="flex flex-col gap-2 px-5">
		  <p class="text-sm text-neutral-500">OWNER NAME</p>

			<input
			  class="bg-white text-zinc-800 w-full border-0 rounded ring-1 ring-blue-500 focus:ring-blue-100 px-3 py-2 uppercase"
				v-model="ownerName"
				placeholder="Evan You"
			  name="ownerName"
			/>
		</label>

    <div class="w-full flex gap-5">
  		<label class="flex flex-col gap-2 px-5">
	  	  <p class="text-sm text-neutral-500">EXPIRATION</p>

		  	<IMaskComponent
				class="bg-white text-zinc-800 w-full rounded ring-1 ring-blue-500 focus:ring-blue-100 px-3 py-2"
				v-model="expiration"
				placeholder="20/77"
				:mask="'00{/}00'"
				name="expiration"
  			/>
  		</label>

  		<label class="flex flex-col gap-2 px-5">
  		  <p class="text-sm text-neutral-500">CVV</p>

  			<IMaskComponent
				class="bg-white text-zinc-800 w-full rounded ring-1 ring-blue-500 focus:ring-blue-100 px-3 py-2"
					v-model="cvv"
					placeholder="456"
					:mask="'000'"
	  			name="cvv"
			  />
  		</label>
		</div>

		<button
		  class="bg-blue-700 p-3 text-white rounded disabled:bg-blue-700/75 disabled:hover:cursor-not-allowed disabled:text-zinc-100 flex items-center justify-center mx-5"
			:disabled="unavailableSubmitAction"
		>
		  <Loading v-if="isLoading" />
		  <span
			  v-else
				class="font-semibold"
			>
			  REGISTER CARD
			</span>
		</button>
	</form>
</template>
