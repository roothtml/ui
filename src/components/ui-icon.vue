<template>   
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#ui-${icon}`"></use>
        </svg> 
</template> 
<script>
    /*
    
    **/
export default { 
  props:['icon'],
}
</script> 
<style scoped lang="less">  
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em; 
       fill: currentColor;
       overflow: hidden;
    } 
</style>
