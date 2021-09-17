<template>
    <section class="new-comment">
        <div class="container">
            <h2 class="title">New Comment!</h2>
            <form @submit.prevent="onSubmit" class="new-comment__form">
                <AppInput v-model="comment.name">Name:</AppInput>
                <AppTextarea v-model="comment.text">Message:</AppTextarea>
                <div class="controls">
                    <AppButton>Submit!</AppButton>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        postId: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            comment: {
                name: '',
                text: ''
            }
        }
    },
    methods: {
        onSubmit () {
            this.$store.dispatch('addComment', {
                postId: this.postId,
                publish: false,
                ...this.comment
            })
                .then(() => {
                    this.comment.name = ''
                    this.comment.text = ''
                })
                .catch(e => {console.log(e)})
        }
    }
}
</script>

<style lang="scss">
.new-comment {
    text-align: center;

    .new-comment__form {
        max-width: 600px;
        margin: 30px auto;
    }

    .controls {
        margin: 30px 0;
    }
}
</style>