<template>
    <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div class="flex flex-col">
                        <span class="countdown font-mono text-5xl">
                            <span>{{ days.toString().length > 1 ? days : days.toString().padStart(2, "0") }}</span>
                        </span>
                        days
                    </div> 
                    <span class="text-5xl pt-1">:</span>
                    <div class="flex flex-col">
                        <span class="countdown font-mono text-5xl">
                            <span>{{ hours.toString().length > 1 ? hours : hours.toString().padStart(2, "0") }}</span>
                        </span>
                        hours
                    </div> 
                    <span class="text-5xl pt-1">:</span>
                    <div class="flex flex-col">
                        <span class="countdown font-mono text-5xl">
                            <span>{{ minutes.toString().length > 1 ? minutes : minutes.toString().padStart(2, "0") }}</span>
                        </span>
                        min
                    </div> 
                    <span class="text-5xl pt-1">:</span>
                    <div class="flex flex-col">
                        <span class="countdown font-mono text-5xl">
                            <span>{{ seconds.toString().length > 1 ? seconds : seconds.toString().padStart(2, "0") }}</span>
                        </span>
                        sec
                    </div>
                </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";

let days = ref<number>(0), hours = ref<number>(0), minutes = ref<number>(0), seconds = ref<number>(0), interval: number;
const props = defineProps<{
    countDownDate: {
        year: number;
        month: number;
        day: number;
    }
}>();
// const setCountdownVars = ({
//     d, h, m, s
// }: {[x: string]: number}) => {
//     days = d; hours = h;
//     minutes = m; seconds = s;
// }
const { year, month, day } = props.countDownDate;

const countDown = () => {
    const destDate = new Date(year, month, day, 1).getTime();    
    let ays: number, ours: number, inutes: number, econds: number;

    let interval = setInterval(() => {
        const now = Date.now();
        const difference = destDate - now;

        state.days = Math.floor(difference / (1000 * 60 * 60 * 24));
        state.hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        state.minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
        state.seconds = Math.floor(difference % (1000 * 60) / (1000));

        // setCountdownVars({
        //     ays, ours, inutes, econds
        // });

        if (difference < 0) clearInterval(interval);
        
    });

};

const state = reactive({
    days,
    hours,
    minutes,
    seconds
});



onMounted(() => {
    countDown();
    console.log(days, hours, minutes);
})
</script>