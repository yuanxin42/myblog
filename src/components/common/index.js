/*
 * @Author: your name
 * @Date: 2019-03-04 16:18:38
 * @LastEditTime: 2020-01-16 11:37:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /myblog/src/components/common/index.js
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
import scrollTop from './scrollTop/index'
import navmenu from './navMenu/index'
import subMenu from './navMenu/subMenu'
import codeCard from './codeCard/index'
import timeLine from './timeLine/index'
import timeLineTree from './timeLine/timelineTree'
import timeLineItem from './timeLine/timelineItem'

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
    Vue.component('sir-scrolltop', scrollTop)
    Vue.component('sir-navmenu', navmenu)
    Vue.component('sir-submenu', subMenu)
    Vue.component('sir-codecard', codeCard)
    Vue.component('sir-timeline', timeLine)
    Vue.component('sir-timelineTree', timeLineTree)
    Vue.component('sir-timelineItem', timeLineItem)
  }
}
