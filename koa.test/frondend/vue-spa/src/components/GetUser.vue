<template lang="html">
    <div class="post" v-if="post">
        <h1 class="post__title">Login: {{ post[0].login }}</h1>
        <p class="post__body">Password: {{ post[0].password }}</p>
        <p class="post__id">ID: {{ post[0].id }}</p>
    </div>

</template>

<script>
    import axios from 'axios';
    export default {
        props: ['id'],
        data() {
            return {
                post: null,
                endpoint: 'http://localhost:3000/user/',
            }
        },
        methods: {
            getPost(id) {
                axios(this.endpoint + id)
                    .then(response => {
                        this.post = response.data
                    })
                    .catch( error => {
                        console.log('-----error-------');
                        console.log(error)
                    })
            }
        },

        created() {
            this.getPost(this.id);
        },
        watch: {
            '$route'() {
                this.getPost(this.id);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .post {
        position: relative;
        max-width: 500px;
        margin: 0 auto;
        padding: 50px 20px 70px;
        &__title {
            position: relative;
            text-transform: uppercase;
            z-index: 1;
        }
        &__body {
            position: relative;
            z-index: 1;
        }
        &__id {
            position: absolute;
            font-size: 130px;
            bottom: 160px;
            margin: 0;
            color: #eeeeee;
            right: 0;
            line-height: 1;
            font-weight: 900;
            z-index: 0;
        }
    }
</style>