<template>
    <span class="en">Made by</span>
    <a href="https://www.jiuxiaoqi.top/" target="_blank">
        <div class="author">
            <img src="~/assets/img/avatar.webp" alt="Avatar">
            <span>玖小柒</span>
        </div>
    </a>
    <div class="separator"></div>
    <a href="https://github.com/zhujin917/disqualified" target="_blank">
        <span>开源地址</span>
    </a>
</template>

<style scoped>
a {
    text-decoration: none;

    &:hover {
        color: var(--theme-color) !important;
    }
}

span {
    font-size: 13px;

    &.en {
        font-size: 17px;
    }
}

.author {
    height: 32px;
    margin: calc((50px - 32px) / 2) 5px;
    display: inline-block;

    &>* {
        vertical-align: middle;
    }

    img {
        width: 32px;
        height: 32px;
        border-radius: 114514px;
        margin-right: 5px;
    }

    &:hover img {
        box-shadow: 0 5px 5px rgb(0 0 0 / .1);
    }

    span {
        font-size: 17px;
        font-weight: bolder;
    }
}

.separator {
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    height: 18px;
    background-color: #bbb;
    margin: 0 25px 0 20px;
}
</style>