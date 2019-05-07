<template>
    <div id="app">

        <main>
            <ul>
                <li v-for="(post, i) in posts">
                    <a class="list" :href="'#/user/' + post.id"> {{post.login}}</a>
                </li>

            </ul>


            <div class="content">
                <router-view></router-view>
            </div>
        </main>
    </div>

</template>

<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                posts: [],
                endpoint: 'http://localhost:3000/users/',
            }
        },
        created() {
            this.getAllPosts();
        },
        methods: {
            getAllPosts() {
                axios.get(this.endpoint)
                    .then(response => {
                        this.posts = response.data;
                    })
                    .catch(error => {
                        console.log('-----error-------');
                        console.log(error);
                    })
            }
        }
    }
</script>

