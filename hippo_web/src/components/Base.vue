<template>
  <div class="base">
    <a-layout>
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo"
             style="color:#fff;font-size: 20px;text-align: center;background-color: #9b9b9b;height: 63px;line-height: 63px">
          Hippo
        </div>
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
          <template v-for="(menu_value,menu_index) in menu_list">
            <a-menu-item v-if="menu_value.children.length===0" :key="menu_value.id">
              <router-link :to="menu_value.menu_url">
                <a-icon type="pie-chart"/>
                <span>{{ menu_value.title }}</span>
              </router-link>
            </a-menu-item>

            <a-sub-menu :key="menu_value.id" v-else>
              <span slot="title"><a-icon type="mail"/><span>{{ menu_value.title }}</span></span>
              <a-menu-item :key="menu_child_value.id"
                           v-for="(menu_child_value,menu_child_index) in menu_value.children">
                <router-link :to="menu_child_value.menu_url">
                  {{ menu_child_value.title }}
                </router-link>
              </a-menu-item>

            </a-sub-menu>


          </template>
        </a-menu>

      </a-layout-sider>
      <a-layout>
        <a-layout-header style="padding: 0">
          <a-icon style="color: #d9d9d9"
                  class="trigger"
                  :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                  @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
  export default {
    name: "Base",
    data() {
      return {
        collapsed: false,
        menu_list: [
          {id: 1, icon: 'mail', title: '展示中心', tube: '', 'menu_url': '/hippo/showcenter/', children: []},
          {
            id: 2, icon: 'mail', title: '资产管理', 'menu_url': '/hippo/host/', children: []
          },
          {
            id: 3, icon: 'bold', title: '批量任务', tube: '', 'menu_url': '/hippo/workbench', children: [
              {id: 10, icon: 'mail', title: '执行任务', 'menu_url': '/hippo/host/'},
              {id: 11, icon: 'mail', title: '命令管理', 'menu_url': '/hippo/host/'},
            ]
          },
          {

            id: 4, icon: 'highlight', title: '代码发布', tube: '', 'menu_url': '/hippo/workbench', children: [
              {id: 12, title: '应用管理', 'menu_url': '/hippo/release'},
              {id: 13, title: '发布申请', 'menu_url': '/hippo/release'},
            ]
          },
          {id: 5, icon: 'mail', title: '定时计划', tube: '', 'menu_url': '/hippo/workbench', children: []},
          {
            id: 6, icon: 'mail', title: '配置管理', tube: '', 'menu_url': '/hippo/workbench', children: [
              {id: 14, title: '环境管理', 'menu_url': '/hippo/environment'},
              {id: 15, title: '服务配置', 'menu_url': '/hippo/workbench'},
              {id: 16, title: '应用配置', 'menu_url': '/hippo/workbench'},
            ]
          },
          {id: 7, icon: 'mail', title: '监控', tube: '', 'menu_url': '/hippo/workbench', children: []},
          {
            id: 8, icon: 'mail', title: '报警', tube: '', 'menu_url': '/hippo/workbench', children: [
              {id: 17, title: '报警历史', 'menu_url': '/hippo/workbench'},
              {id: 18, title: '报警联系人', 'menu_url': '/hippo/workbench'},
              {id: 19, title: '报警联系组', 'menu_url': '/hippo/workbench'},
            ]
          },
          {
            id: 9, icon: 'mail', title: '用户管理', tube: '', 'menu_url': '/hippo/workbench', children: [
              {id: 20, title: '账户管理', tube: '', 'menu_url': '/hippo/workbench'},
              {id: 21, title: '角色管理', tube: '', 'menu_url': '/hippo/workbench'},
              {id: 22, title: '系统设置', tube: '', 'menu_url': '/hippo/workbench'},
            ]
          },
        ],
      }
    },
    methods: {
      toggleCollapsed() {
        this.collapsed = !this.collapsed;
      },
    },
  }
</script>

<style scoped>

</style>
