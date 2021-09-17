import Vue from 'vue'

// UI
import Message from '@/components/UI/Message.vue'
import Intro from '@/components/UI/Intro.vue'
import PostList from '@/components/Blog/PostList.vue'

// Controls
import AppButton from '@/components/UI/Controls/Button.vue'
import AppInput from '@/components/UI/Controls/Input.vue'
import AppTextarea from '@/components/UI/Controls/Textarea.vue'

// UI
Vue.component('Message', Message)
Vue.component('Intro', Intro)
Vue.component('PostList', PostList)

// Controls
Vue.component('AppButton', AppButton)
Vue.component('AppInput', AppInput)
Vue.component('AppTextarea', AppTextarea)