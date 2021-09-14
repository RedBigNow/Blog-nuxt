<template>
    <newsPostForm
        :postEdit="post"
        @submit="onSubmit" />
</template>

<script>
import newsPostForm from '@/components/Admin/NewsPostForm.vue'

export default {
    layout: 'admin',
    components: {
        newsPostForm
    },
    data () {
        return {
            post: {
                id: 1,
                title: '1 post',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg'
            },
            comments: [
                { name: 'Alex', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
                { name: 'Jhon', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
            ]
        }
    },
    methods: {
        onSubmit (post) {
            console.log('Post editing!')
            console.log(post)
        }
    }
}
</script>