<template>
    <div class="container-main">
        <img class="icon-avatar" src="@/assets/avatar-trung.png">
        <div>
            <nav>Trung Nguyen</nav>
        <ul>
            <li>@trung2503</li>
            <li>User ID: 13262948</li>
            <img 
            style="width: 20px; height: 20px;" 
            src="@/assets/Save_Icon_SvG_O3mv3w.png">
            <li> Member since April 2, 2023 </li>
        </ul>
        </div>
    </div>
    <nav style="font-size: 20px; display: flex; justify-content: center; margin-top: 10px;">
    VIEW
    <img style="width:30px; height:30px; margin: 0 5px" src="@/assets/eye-outline.png" alt="">
    </nav>
    <ul>
        <li class="navbar">
            <a href="/MainPage">main page</a>
        </li>
        <li class="navbar">
            <a href="/solution">solution</a>
        </li>
        <li class="navbar">
            <a href="/system">system</a>
        </li>
        <li class="navbar">
            <a href="/resources">resources</a>
        </li>
        <li class="navbar">
            <a href="/about">about us</a>
        </li>
    </ul>
    <div class="background"></div>
</template>

<script>
export default {
components : {
}
}
</script>

<style scoped>
.container-main {
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #f5f4f8;
    padding: 0 30px;
}
.icon-avatar {
    border-radius: 50%;
    width: 180px;
    height: 180px;
}
.navbar {
    width: 100px;
    display: flex;
    justify-content: center;
    margin-top: 15px;
    border-radius: 4px;
    box-shadow: 2px 2px 1px 1px#bfbec0;
}
.navbar:hover {
    background-color: #b0f1f1;
    cursor: pointer;
    transition: all .4s;
}
ul {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
nav {
    font-size: 35px;
    font-weight: 700;
}
li {
    margin: 0 15px 0 0;
    font-weight: 500;
}
.nav-info {
    display: flex;
    justify-content: center;
}
.background {
    width: 100%;
    height: 500px;
    background-image: url("@/assets/background-user.png");
    background-size: cover;
}
</style>