<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="moveOutDiv" @mouseenter="isShow = true">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="isShow">
            <div class="all-sort-list2" @click="toSearch">
              <div
                class="item"
                :class="{ item_to: currentIndex === index }"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                @mouseenter="moveInItem(index)"
              >
                <h3>
                  <a
                    href="javascript:;"
                    :data-category1Id="c1.categoryId"
                    :data-categoryName="c1.categoryName"
                    >{{ c1.categoryName }}</a
                  >
                  <!-- 使用编程式路由导航 -->
                  <!-- <a
                  href="javascript:;"
                  @click="
                    $router.push({
                      name: 'search',
                      query: {
                        category1Id: c1.categoryId,
                        categoryName: c1.categoryName,
                      },
                    })
                  "
                >
                  {{ c1.categoryName }}</a
                > -->
                  <!-- 利用声明式导航进行跳转 -->
                  <!-- <router-link
                  :to="{
                    name: 'search',
                    query: {
                      category1Id: c1.categoryId,
                      categoryName: c1.categoryName,
                    },
                  }"
                  >{{ c1.categoryName }}</router-link
                > -->
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl
                      class="fore"
                      v-for="(c2, index) in c1.categoryChild"
                      :key="c2.categoryId"
                    >
                      <dt>
                        <a
                          href="javascript:;"
                          :data-category2Id="c2.categoryId"
                          :data-categoryName="c2.categoryName"
                          >{{ c2.categoryName }}</a
                        >
                        <!-- <a
                        href="javascript:;"
                        @click="
                          $router.push({
                            name: 'search',
                            query: {
                              category2Id: c2.categoryId,
                              categoryName: c2.categoryName,
                            },
                          })
                        "
                      >
                        {{ c2.categoryName }}</a
                      > -->
                        <!-- <router-link
                        :to="{
                          name: 'search',
                          query: {
                            category2Id: c2.categoryId,
                            categoryName: c2.categoryName,
                          },
                        }"
                        >{{ c2.categoryName }}</router-link
                      > -->
                      </dt>
                      <dd>
                        <em
                          v-for="(c3, index) in c2.categoryChild"
                          :key="c3.categoryId"
                        >
                          <a
                            href="javascript:;"
                            :data-category3Id="c3.categoryId"
                            :data-categoryName="c3.categoryName"
                            >{{ c3.categoryName }}</a
                          >
                          <!-- <a
                          href="javascript:;"
                          @click="
                            $router.push({
                              name: 'search',
                              query: {
                                category3Id: c3.categoryId,
                                categoryName: c3.categoryName,
                              },
                            })
                          "
                        >
                          {{ c3.categoryName }}</a
                        > -->
                          <!-- <router-link
                          :to="{
                            name: 'search',
                            query: {
                              category3Id: c3.categoryId,
                              categoryName: c3.categoryName,
                            },
                          }"
                          >{{ c3.categoryName }}</router-link
                        > -->
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
export default {
  data() {
    return {
      currentIndex: -1,
      isShow: true,
    };
  },
  methods: {
    // moveInItem(index){
    //    this.currentIndex = index
    //   console.log(index)
    //  },
    //解决浏览器节流
    moveInItem: throttle(
      function(index) {
        this.currentIndex = index;
        // console.log(index);
      },
      20,
      { trailing: false } //这是一个配置对象，也就是在他的10s前触发一次
    ),
    toSearch(event) {//点击某个类别（无论几级）跳转到搜索页面：
      //点击事件
      //event是什么，就是浏览器调用函数传递过来的对象，代表你传递的是$event，只能在模板中出现
      let targetNode = event.target; //获取目标元素，也就是我们所点击的元素
      // console.log(targetNode);
      let data = targetNode.dataset; //获取当前目标元素上的data-属性，组成的对象
      console.log(data);

      //判断点击的是不是a标签，如果是a标签，那么data一定是有categoryname（注意这里是小写的，
      //因为这是我们data-组成的对象,他将我们的命名都变成了小写，）如果不是那就没有categoryname
      //如果是a标签，那么参数已经带过来了，就在我们的data中
      let { category1id, category2id, category3id, categoryname } = data; //这里进行解构赋值
      //接下来我们判断点击的是不是a标签
      if (categoryname) {
        let location = {
          name: "search",
        };
        let query = {
          categoryName: categoryname,
        };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        //接下来我们要找到所有的query参数，把所有的query参数放到location里面
        location.query = query;
        //最终把location构造好跳转
       if(this.$route.params){
          location.params = this.$route.params
        }

        //判断路由跳转；如果是home跳search页用push
        //如果是search跳search页用replace
        if (this.$route.path !=='/home') {
          this.$router.replace(location);
        } else {
           this.$router.push(location);
        }
       
      }
    },
    moveOutDiv() {
      this.currentIndex = -1;
      if (this.$route.path !== "/home") {
        //判断他是不是在search也
        this.isShow = false;
      }
    },
  },
  mounted() {
    

    if (this.$route.path !== "/home") {
      //判断他是不是在search也
      this.isShow = false;
    }
  },
  //从vuex当中把数据捞到vue里面
  computed: {
    //两种形式;数组写法的条件
    ...mapState({
      categoryList: (state) => state.home.categoryList, //这里面的的state是vuex提供的
    }),
  },
};
</script>

<style lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
       &.sort-enter{
        height: 0;
        opacity: 0;
      }
      &.sort-enter-to{
        height: 461px;
        opacity: 1;
      }
      &.sort-enter-active{
        transition: all .5s;
      }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 815px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_to {
            background-color: aqua;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
