<template>
    <div id="siteClose" class="nest">
        <div class="title-alt">
            <h6>
                <span class="fontawesome-truck"></span>&nbsp;{{modeltitle}}</h6>
            <div class="titleClose">
            </div>
            <div class="titleToggle">
                <a class="nav-toggle-alt">
                    <span class="entypo-up-open"></span>
                </a>
            </div>
        </div>
        <div id="site" class="body-nest">
            <div class="table-responsive clearfix">
               <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props: ['modeltitle'],
}
</script>
<style>
    .nest {
        margin:  15px 15px 0
    }
    .nest .title-alt {
        margin-top: 15px
    }
</style>

