<template>
    <section class="posts__wrapper">
        <div class="container">
            <div class="post-list">
                <postPreview 
                    v-for="post in posts" :key="post.id"
                    :admin="admin"
                    :post="post"
                />
            </div>
        </div>
    </section>
</template>

<script>
import postPreview from '@/components/Blog/PostPreview.vue'

export default {
    components: { postPreview },
    props: {
        posts: {
            type: Array,
            required: true
        },
        admin: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
.post-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
}
</style>