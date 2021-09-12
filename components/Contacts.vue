<template>
    <section class="contacts">
        <div class="container">
            <h2 class="title">Contact me!</h2>
            <form @submit.prevent="onSubmit" class="contacts__form">
                <label>Name:</label>
                <input v-model="user.name" type="text">
                <label>Email:</label>
                <input v-model="user.email" type="text">
                <label>Message:</label>
                <textarea v-model="user.text"></textarea>
                <div class="controls">
                    <button class="btn btnWhite">Submit!</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            user: {
                name: '',
                email: '',
                text: ''
            }
        }
    },
    methods: {
        onSubmit () {
            console.log(this.user)
        }
    }
}
</script>

<style lang="scss">
.contacts {
    text-align: center;
    background-color: #4b40e3;
    color: #fff;

    h2.title {
        color: #fff;
    }

    .contacts__form {
        max-width: 600px;
        margin: 30px auto;
    }

    .controls {
        margin: 30px 0;
    }
}
</style>