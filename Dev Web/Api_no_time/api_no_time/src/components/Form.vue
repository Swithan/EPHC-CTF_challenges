<template>
    <div>
        <h1>Enter your PIN :</h1><br>
        <br>
        <div>PIN :</div>
        <input v-model="pin" placeholder="pin">
        <button id="button" v-on:click="testPin">send</button>
        <br>
        <br>
        <br>
        <div id="error">{{error}}</div>
        <br>
        <div>{{flag}}</div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Form",

        data(){
            return{
                pin : "",
                error : "",
                flag : "",
            }
        },

        methods: {
            testPin(){
                this.error = "";
                axios.post("http://localhost:3080/login", {
                    pin : this.pin
                })
                    .then(result =>{
                        this.error = result.data.message;
                        if(result.data.flag){
                            this.flag = result.data.flag;
                        }
                    })
                    .catch((error) => {
                        if( error.response ){
                            this.error = error.response.data.message;
                        }
                    })
            }
        }
    }
</script>

<style scoped>
    #error{
        color: red;
    }
</style>
