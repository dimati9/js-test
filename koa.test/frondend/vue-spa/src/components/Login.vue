<template>
    <div id="reg">
        <div v-if="log">
            <h2 class="reg">Успешная авторизация</h2>
        </div>
        <div v-if="errorLogin">
            <h2 class="error">Пользователь с данным логином не найден. </h2>
        </div>
        <div v-if="errorPassword">
            <h2 class="error">Неверный пароль</h2>
        </div>
        <div>
            <h2>Авторизация</h2>
            <input class="form-control login"  placeholder="Логин" v-model="login">
            <input class="form-control password"  placeholder="Пароль" v-model="password">
            <!-- по нажатию кнопки данные уходят на проверку -->
            <v-btn color="green" block v-on:click="checkForm"> Авторизоваться</v-btn>
        </div>
        <div>
            <!-- ошибки вылетают и радуют глаз -->
            <div v-if="!go">
                <b>Пожалуйста исправьте указанные ошибки:</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                errors: [],
                password: '',
                login: '',
                go: true,
                log: false,
                errorLogin: false,
                errorPassword: false,
                postBody: {   // позже они преобразуются в json
                    login : this.login,
                    password : this.password,
                },
            }
        },

        // Pushes posts to the server when called.
        methods: {

            checkForm: function (e) {
                this.log = false;
                this.errorPassword = false;
                this.errorLogin = false;
                let log = document.querySelector('.login').value;
                let pass = document.querySelector('.password').value



                this.errors = [];

                if (log == undefined || log == "") {
                    this.errors.push('Не указан логин.');
                    console.log(log)
                    this.go = false
                } else if (log.length <= 3 || log.length >= 12) {
                    this.errors.push('Логин должен содержать не менее 4 символов и не более 12.');
                    this.go = false
                } else {
                    this.go = true;
                }
                if (pass == undefined || pass == "") {
                    this.errors.push('Не указан пароль.');
                    console.log(pass)
                    this.go = false
                } else if (pass.length <= 5 || pass.length >= 12) {
                    this.errors.push('Пароль должен содержать не менее 6 символов и не более 12.');
                    this.go = false
                } else {
                    this.go = true;
                }
                if (this.go) {
                    this.postBody.login = log;
                    this.postBody.password = pass;
                    this.postPost();
                }
                e.preventDefault();
            },
            clear: function () {
                document.querySelector('.login').value = '';
                document.querySelector('.password').value = '';

            },
            postPost : function () {
                const str = this.postBody;
                axios.post('http://localhost:3000/login',str)
                    .then((response) => {
                        console.log(response);
                        if (response.data.ok == 1) {
                            this.log = true;
                            this.errorLogin = false;
                            this.clear();
                        } else {
                            if (response.data.error == 'password') {
                                this.errorPassword = true;
                            } else {
                                this.errorLogin = true;
                            }

                        }

                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style lang="scss">

    .reg {
        color: green;
    }
    .error {
        color: red;
    }
</style>

