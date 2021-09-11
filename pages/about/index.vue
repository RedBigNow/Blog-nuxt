<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section class="about">
            <div class="container">
                <h1 class="title">About my blog:</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                <intro title="Lorem ipsum dolor sit amet"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                <img src="@/assets/img/about.jpg" alt="">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </div>
        </section>
    </div>
</template>

<script>
import intro from '@/components/UI/Intro.vue'
export default {
    components: { intro }
}
</script>

<style lang="scss">
.about {
    text-align: center;

    p {
        margin-bottom: 10px;
    }
}
</style>