<template>
  <h1>{{ msg }}</h1>
  <h3>{{ count }}</h3>
  <ul>
    <li>{{ response?.current_user_url }}</li>
    <li>{{ response?.current_user_authorizations_html_url }}</li>
    <li>{{ response?.authorizations_url }}</li>
    <li>{{ response?.code_search_url }}</li>
    <li>{{ response?.commit_search_url }}</li>
    <li>{{ response?.emails_url }}</li>
    <li>{{ response?.emojis_url }}</li>
    <li>{{ response?.following_url }}</li>
  </ul>
  <button @click="count++">add</button>
  <div>
    <div>总共{{ data.lists.length }}项，已完成{{ finishlist.length }}项</div>
    <h3>未完成</h3>
    <ul>
      <template v-for="(item,index) in  data.lists" :key="item.name">
        <li v-if="!item.chebox">
          <div>
            <label>{{ item.name }}</label>
            <input type="checkbox" v-model="item.chebox" />
          </div>
          <div @click="delectList(index)">x</div>
        </li>
      </template>
    </ul>
    <h3>完成</h3>
    <ul>
      <template v-for="(item) in  finishlist" :key="item.name">
        <li>
          <div>
            <label>{{ item.name }}</label><input :disabled="item.chebox" type="checkbox" v-model="item.chebox" />
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts" >
import { ref, computed, reactive } from 'vue'
import usePro from "../models";
import { useStore } from '../store'
defineProps({
  msg: String,
})
const { response } = await usePro();
const count = ref(0)
const { state, getters, commit, dispatch } = useStore()
const loading = computed(() => state.user.loading)
const getterName = computed(() => getters['user/isLogin'])
console.log(loading.value)
console.log(getterName.value)
const finishlist = computed(() => data.lists.filter(item => item.chebox));
const data = reactive({
  lists: [
    { name: 1, chebox: false, edit: false },
    { name: 2, chebox: false, edit: false },
    { name: 3, chebox: false, edit: false },
    { name: 4, chebox: false, edit: false },
    { name: 5, chebox: false, edit: false },
  ]
})

const delectList = (index: number) => {
  dispatch(`user/GET_DATA`, false)
  data.lists.splice(index, 1)
}
</script>

<style scoped >
ul {
  list-style: none;
}
li {
  padding: 10px;
  border: 1px solid #304455;
  border-bottom: 0;
  display: flex;
  justify-content: space-between;
}
li:last-child {
  border-bottom: 1px solid #304455;
}
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>