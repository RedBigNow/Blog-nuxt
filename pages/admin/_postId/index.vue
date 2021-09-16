<template>
    <newsPostForm
        :postEdit="post"
        @submit="onSubmit" />
</template>

<script>
import axios from 'axios'
import newsPostForm from '@/components/Admin/NewsPostForm.vue'

export default {
    layout: 'admin',
    components: {
        newsPostForm
    },
    asyncData (context) {
        return axios.get(`https://blog-nuxt-5b600-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`)
            .then(res => {
                return {
                    post: {...res.data, id: context.params.postId}
                }
            })
            .catch(e => context.error(e))
    },
    methods: {
        onSubmit (post) {
            console.log('Post editing!')
            this.$store.dispatch('editPost', post)
                .then(()=>{
                    this.$router.push('/admin')
                })
        }
    }
}
</script>