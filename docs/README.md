

# 说明
## 安装

### 安装依赖
```
npm install
```

### 运行
```
npm run dev
```

### 编译生成
```
npm run build
```

## 工程说明


### 添加导航页

在src/router/index.js中添加路由，例如

```
{
    path: 'whwtest',
    component: () => import('@/views/system/whwtest/index.vue'),
    name: 'whwtest',
    meta: { 
        isMenu:true,
    },
},
```
import()内为vue程序代码实际路径

在src/http/User.js中按照json的数组对象的方式添加导航页配置,name需与router的name对应，其他参数为配置信息

```
      {
        title: "whwtest",
        iconName: "svg:laptop-check.svg",
        childs: [
          {
            name: "whwtest",
            title: "回放",
            isCache: true,
            content: "",
            iconName: "svg:laptop-check.svg",
            showTagIcon: true,
          },
          {
            path: `/main/iframe/vue?src=${encodeURIComponent(
              "https://asdqvqw.github.io/whwtest.github.io/"
            )}`,
            title: "说明(内嵌)",
            content: "",
            iconName: "img:vue.svg",
            showTagIcon: true,
            isCache: true,
          },
        ],
      },
```

并根据一级二级三级等目录添加childs字段分级

### 页面跳转

使用router配置路由

```
{
    path: 'whwtest/components/bbb_Aqw',
    component: () => import('@/views/system/whwtest/components/bbb_Aqw.vue'),
    name: 'bbb_Aqw',
    meta: { 
        isMenu:true,
    },
},
```

在自己实现功能的vue程序中添加router跳转

```
<router-link 
    to="/main/whwtest/components/bbb_Aqw">
    示例
</router-link>
```

可以在逻辑中通过按钮等实现页面跳转