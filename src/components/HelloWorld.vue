<template>
  <div class="hello"> 
      <ui-button>初始化 </ui-button> 
     <ui-button icon='thumbs-up'>点赞</ui-button>  
     <ui-button    >设置 <ui-icon icon='loading'></ui-icon> </ui-button>   
     <ui-button  icon='loading'  :loading="true">设置  </ui-button>   
     <ui-button-group>
      <ui-button icon="left">上一页</ui-button>
      <!-- <ui-button>默认按钮</ui-button>
      <ui-button>默认按钮</ui-button>
      <ui-button>默认按钮</ui-button>     -->
      <ui-button >下一页<ui-icon icon="right"></ui-icon></ui-button>  
     </ui-button-group>
     <div>
        <ui-button>默认按钮</ui-button>
        <ui-button type="primary">主要按钮</ui-button>  
        <ui-button type="success">成功按钮</ui-button>
        <ui-button type="info">信息按钮</ui-button>
        <ui-button type="warning">警告按钮</ui-button>
        <ui-button type="danger">危险按钮</ui-button> 
     </div> 
     <ui-Input></ui-Input>
  </div> 
</template>

<script> 
export default {
  name: 'HelloWorld',
  data () {
    return { 
    }
  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped   ></style>
