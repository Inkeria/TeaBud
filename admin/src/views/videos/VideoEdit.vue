<template>
    <div>
        <h3> {{isNew ? '创建' : '编辑'}}视频 </h3>
        
        
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
export default class VideoEdit extends Vue{
    @Prop(String) id!:string
    data = {

    }
    fields = {
        _id: {label: "ID"},
        name: {label: "视频名称"},
        cover: {label: "视频封面"},

    }
    get isNew(){
        return !this.id
    }
    async fetch(){
        const res = await this.$http.get('videos')
        this.data = res.data
    }
    created(){
        // this.fetch()
    }
} 

</script>

<style scoped>

</style>