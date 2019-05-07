<template>
    <div id="app">
        <header>
            <h1>Vue + koa test project</h1>
        </header>
        <main>

          <div class="navigation">
              <v-btn
                      v-for="link in links"
                      active-class="is-active"
                      color="green"
                      :to="{ name: link.name}">
                  {{link.name}}
              </v-btn>
          </div>
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
                links: [
                    {name: 'Index', url: 'Index'},
                    {name: 'Users', url: 'Users'},
                    {name: 'Reg', url: 'Reg'},
                    {name: 'Login', url: 'Login'}],
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

<style lang="scss">
    body {
        margin: 0;
        padding: 0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    header {
        position: fixed;
        top: 0;
        width: 100%;
        min-height: 90px;
        border-bottom: 1px solid #42b983;
        text-align: center;
        background: #ffffff;
    }
    main {


        max-width: 1200px;
        margin-top: 90px;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
    }
    aside {
        flex: 1 0 30%;
        height: 100%;
        overflow-y: auto;
        width: 30%;
        padding: 50px 30px;
        box-sizing: border-box;
        border-right: 1px solid #42b983;
    }
    .content {
        width: 600px;
        margin: 0 auto;
        display: block;
        margin-top: 100px;
    }
    ul {
        list-style-type: circle;

        li {
            margin: 10px;
            display: block;
            font-size: 18px;
        }
        a {
            color: cornflowerblue;
            text-decoration: underline;
        }
        a:hover {
            text-decoration: none;
        }
    }
</style>