<template>
    <section class="contacts">
        <div class="container">
            <h2 class="title">Contact me!</h2>
            <form @submit.prevent="onSubmit" class="contacts__form">
                <!-- name -->
                <AppInput v-model="user.name">Name:</AppInput>
                <!-- email -->
                <AppInput v-model="user.email" type="email">Email:</AppInput>
                <!-- message -->
                <AppTextarea v-model="user.text">Message:</AppTextarea>
                <!-- buttons -->
                <div class="controls">
                    <AppButton class="btnWhite">Submit!</AppButton>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import AppButton from '@/components/UI/Controls/Button.vue'
import AppInput from '@/components/UI/Controls/Input.vue'
import AppTextarea from '@/components/UI/Controls/Textarea.vue'

export default {
    components: { 
        AppButton,
        AppInput,
        AppTextarea
    },
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