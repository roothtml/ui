<template>   
   <div class="ui-button-group">
        <slot></slot> 
   </div>
</template> 
<script>
export default {  
    //节点验证 必须是 button
}
</script> 
<style scoped lang="less">  
 .ui-button-group{
     display: inline-flex;  
      vertical-align: middle;
    .ui-button{ 
         border-radius: 0;
         margin-left:-1px;
        &:first-child{
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px; 
        }
        &:last-child{
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px; 
        }
        &:hover{
            position: relative;
            z-index: 1;
        }
    }
 }
</style>
