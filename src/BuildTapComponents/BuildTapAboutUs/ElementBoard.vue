<template>
  <div class="element-board">
    <div class="icon">
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_5167_1706)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54Z" fill="#F2F5F7"/>
        <rect x="14" y="16" width="27" height="22.3714" rx="4" fill="#F2F5F7"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.4118 16H15.5882C14.7111 16 14 16.7154 14 17.598V36.7735C14 37.656 14.7111 38.3714 15.5882 38.3714H39.4118C40.2889 38.3714 41 37.656 41 36.7735V17.598C41 16.7154 40.2889 16 39.4118 16ZM15.5882 36.7735V17.598H39.4118V36.7735H15.5882Z" fill="#C2D1D9"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3672 22.5916C18.3672 24.2464 19.7005 25.5878 21.3451 25.5878C22.9898 25.5878 24.3231 24.2464 24.3231 22.5916C24.3231 20.9369 22.9898 19.5955 21.3451 19.5955C19.7005 19.5955 18.3672 20.9369 18.3672 22.5916ZM22.7348 22.5916C22.7348 23.3638 22.1126 23.9898 21.3451 23.9898C20.5776 23.9898 19.9554 23.3638 19.9554 22.5916C19.9554 21.8194 20.5776 21.1934 21.3451 21.1934C22.1126 21.1934 22.7348 21.8194 22.7348 22.5916Z" fill="#C2D1D9"/>
        <path d="M19.7204 34.9439C19.4089 35.2546 18.9061 35.2524 18.5974 34.939C18.2886 34.6256 18.2908 34.1198 18.6022 33.8091L25.1336 27.2943L28.8148 30.5159C29.1457 30.8055 29.1807 31.3101 28.8928 31.6431C28.605 31.976 28.1034 32.0112 27.7725 31.7216L25.2042 29.474L19.7204 34.9439Z" fill="#C2D1D9"/>
        <path d="M25.6789 34.9415C25.3688 35.2535 24.866 35.2536 24.5559 34.9415C24.2457 34.6295 24.2457 34.1237 24.5558 33.8116L35.0075 23.295L40.7293 28.3463C41.059 28.6374 41.0918 29.1422 40.8025 29.4739C40.5133 29.8056 40.0115 29.8385 39.6818 29.5475L35.0784 25.4836L25.6789 34.9415Z" fill="#C2D1D9"/>
        </g>
        <defs>
        <clipPath id="clip0_5167_1706">
        <rect width="54" height="54" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    </div>
    <div class="info">
        <h1>{{number}}</h1>
        <p>{{lineText}}</p>
    </div>
  </div>
</template>

<script>
export default {
props: ['number','lineText']
}
</script>

<style scoped>
.element-board {
display: flex;
}
h1 {
font-weight: 500;
font-size: 50px;
line-height: 55px;
color: #FFFFFF;
}
p {
font-weight: 400;
font-size: 14px;
color: #FFFFFF;
}
.info {
  margin: 0 10px;
}
</style>