<template>
    <PostList :posts="posts"/>
</template>

<script>
export default {
    layout: 'admin',
    data () {
        return {
            posts: [
                {
                    id: 1,
                    title: '1 post',
                    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg'
                },
                {
                    id: 2,
                    title: '2 post',
                    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    img: 'https://iheartdogs.com/wp-content/uploads/2017/09/Brite-Bite-0021-2.jpg'
                },
                {
                    id: 3,
                    title: '3 post',
                    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    img: 'https://cdn21.img.ria.ru/images/07e4/09/0e/1577216689_0:557:2048:1709_1920x0_80_0_0_a6a6f571d809e8cac67e8de9b36d1e9d.jpg'
                }
            ]
        }
    }
}
</script>
