<template>
    <section class="new-comment">
        <div class="container">
            <h2 class="title">New Comment!</h2>
            <form @submit.prevent="onSubmit" class="new-comment__form">
                <label>Name:</label>
                <input v-model="comment.name" type="text">
                <label>Message:</label>
                <textarea v-model="comment.text"></textarea>
                <div class="controls">
                    <button class="btn btnPrimary">Submit!</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
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
            console.log(this.comment)
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