<template>
    <el-container>
        <el-header>
            山芽后台管理界面
        </el-header>
        <el-container >
            <el-aside width="200px">
                <el-menu mode="vertical" default-active="$route.path" router>
                    <el-submenu v-for="(item, index) in menu.items"
                        :index="index + 1"
                        :key=index>
                        <template slot:title>{{item.title}}</template>
                        <el-menu-item v-for="(subItem, subIndex) in item.items"
                            :index="subItem.path"
                            :subIndex = "subIndex + 1"
                            :key = subIndex>
                            <!-- :key="'menu-item-${index}-${subIndex}'"> -->
                            {{subItem.title}}
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
                
            </el-aside>
            <el-container>
                <el-main height="">
                    <router-view>
                        
                    </router-view>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
    
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Main extends Vue{
    menu = {
        items:[
            {
                title: '内容管理',
                items:[
                    {title: '视频管理', path: '/video/list' },
                    {title: '分p管理', path:'/video/list'},
                ]
            },
            {
                title: '运营管理',
                items:[
                    {title: '首页', path: '/users/list' },
                    {title: '用户管理', path:'/users/list'},
                ]
            }
        ]
    }
}
</script>

<style lang="scss" scoped>

</style>