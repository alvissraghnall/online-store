<template>
  <svg width="360" height="230" viewBox="0 0 360 230" fill="none" xmlns="http://www.w3.org/2000/svg"
    class="absolute top-0 -right-[2px]">
    <mask id="mask0_1308_241" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="360" height="230">
      <rect width="360" height="230" rx="15.4011" fill="#16084C" />
    </mask>
    <g mask="url(#mask0_1308_241)">
      <g filter="url(#filter0_f_1308_241)">
        <path
          d="M451.518 -135.506C473.881 -89.3531 414.166 -13.4917 318.142 33.9349C222.118 81.3615 126.147 82.3939 103.784 36.2409C81.4215 -9.9122 141.136 -85.7735 237.16 -133.2C333.184 -180.627 429.156 -181.659 451.518 -135.506Z"
          :fill="colors[brand][0]" />
      </g>
      <g filter="url(#filter1_f_1308_241)">
        <path
          d="M399.134 -169.756C421.497 -123.603 361.783 -47.742 265.758 -0.315347C169.734 47.1113 73.7629 48.1437 51.4003 1.99062C29.0377 -44.1624 88.7521 -120.024 184.776 -167.45C280.8 -214.877 376.772 -215.909 399.134 -169.756Z"
          :fill="colors[brand][1]" />
      </g>
    </g>
    <defs>
      <filter id="filter0_f_1308_241" x="43.2627" y="-225.286" width="468.777" height="351.306"
        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="27.9144" result="effect1_foregroundBlur_1308_241" />
      </filter>
      <filter id="filter1_f_1308_241" x="-9.12112" y="-259.536" width="468.777" height="351.306"
        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="27.9144" result="effect1_foregroundBlur_1308_241" />
      </filter>
    </defs>
  </svg>
</template>

<script setup lang="ts">
import { colors, brand } from '@util/card-brands';
</script>
