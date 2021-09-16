<template>
    <newsPostForm @submit="onSubmit" />
</template>

<script>
import newsPostForm from '@/components/Admin/NewsPostForm.vue'

export default {
    components: {
        newsPostForm
    },
    layout: 'admin',
    methods: {
        onSubmit (post) {
            // console.log('Post added!')
            // console.log(post)
            this.$store.dispatch('addPost', post)
                .then(() => {
                    this.$router.push('/admin')
                })
        }
    }
}
</script>