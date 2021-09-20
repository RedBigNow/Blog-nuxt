<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section class="about">
            <div class="container">
                <h1 class="title">О блоге:</h1>
                <p>Современный блог на nuxt.js + vue.js с рендерингом и админкой, полным SEO и небольшой CRM системой внутри, которая будет показывать все комментарии с возможностью сменять статус "опубликован/не опубликован", а также удалять "спам"</p>
                <Intro title="Современный блог на Vue.js + Nuxt.js!"/>
                <ul class="func-list">
                    <li>SSR для приложений;</li>
                    <li>Полная SEO оптимизация;</li>
                    <li>Авторизация и Регистрация пользователей;</li>
                    <li>Защита админ панели;</li>
                    <li>Работа с token`ами - JWT;</li>
                    <li>Локальное хранилише;</li>
                    <li>Хранение сессий;</li>
                    <li>Markdown разметка;</li>
                </ul>
                <!-- <img src="@/assets/img/about.jpg" alt="">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p> -->
            </div>
        </section>
    </div>
</template>

<script>
export default {
    head () {
        let title = 'About my SSR blog!',
            descr = 'About my SSR blog! With Nuxt.js!',
            type = 'site'
        return {
            title: title,
            meta: [
                { hid: 'og:title', name: 'og:title', content: title },
                { hid: 'description', name: 'description', content: descr },
                { hid: 'og:description', name: 'og:description', content: descr },
                { hid: 'og:type', name: 'og:type', content: type }
            ]
        }
    },
}
</script>

<style lang="scss">
.about {
    text-align: center;

    p {
        margin-bottom: 10px;
    }
}

ul.func-list {
    margin-bottom: 30px;

    li {
        margin-bottom: 20px;
    }
}
</style>