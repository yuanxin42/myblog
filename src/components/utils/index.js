/*
 * @Author: your name
 * @Date: 2019-03-04 16:18:38
 * @LastEditTime: 2020-01-16 11:37:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /myblog/src/components/utils/index.js
 */
import card from './card'
import container from './container/index'
import aside from './container/aside'
import footer from './container/footer'
import header from './container/header'
import main from './container/main'
import tabs from './tabs/index'
import tab from './tabs/tab'
import carousel from './carousel/index'
import carouselItem from './carousel/carouselItem'
import scrolltop from './scrolltop/index'
import navmenu from './navmenu/index'
import submenu from './navmenu/submenu'
import codecard from './codecard/index'
import timeline from './timeline/index'
import timelineTree from './timeline/timelineTree'
import timelineItem from './timeline/timelineItem'

export default {
  install: (Vue) => {
    Vue.component('sir-card', card)
    Vue.component('sir-container', container)
    Vue.component('sir-aside', aside)
    Vue.component('sir-footer', footer)
    Vue.component('sir-header', header)
    Vue.component('sir-main', main)
    Vue.component('sir-tabs', tabs)
    Vue.component('sir-tab', tab)
    Vue.component('sir-carousel', carousel)
    Vue.component('sir-carousel-item', carouselItem)
    Vue.component('sir-scrolltop', scrolltop)
    Vue.component('sir-navmenu', navmenu)
    Vue.component('sir-submenu', submenu)
    Vue.component('sir-codecard', codecard)
    Vue.component('sir-timeline', timeline)
    Vue.component('sir-timelineTree', timelineTree)
    Vue.component('sir-timelineItem', timelineItem)
  }
}
