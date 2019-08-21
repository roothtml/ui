<template>  
      <button class="ui-button" :class="type"> 
          <ui-icon :class="{'loading':loading }"   v-if="icon" :icon="icon"></ui-icon>
          <slot></slot>  
      </button>  
  </template> 
  <script>
  export default {
    name: 'ui-button',
    props:{
       icon:{
         type:String,
       },
       loading:{
          type:Boolean,
          default:false, 
       },
       type:{
          type:String,
          
       }
    },
  }
  </script> 
  <style scoped lang="less"> 
  @keyframes spign{
     0%{transform:rotate(0deg)};
     100%{transform:rotate(360deg)}
  }
    .ui-button{
      display: inline-block; 
      line-height: 1; 
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      color: #606266; 
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0; 
      font-weight: 500; 
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
      &:hover{
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
      }
      .loading{
         animation: spign 2s infinite linear;
      }
      &.primary{
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        &:hover{
          background: #66b1ff;
          border-color: #66b1ff; 
        }
      }
      &.success{
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
        &:hover{
          background:#85ce61;
          border-color: #85ce61; 
        }
      }
      &.info{
        color: #fff;
        background-color: #909399;
        border-color: #909399;
        &:hover{
          background:#A6A9AD;
          border-color: #A6A9AD; 
        }
      }
      &.warning{
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
        &:hover{
          background:#EBB563;
          border-color: #EBB563; 
        }
      }
      &.danger{
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
        &:hover{
          background:#F78989;
          border-color: #F78989; 
        }
      }
    }
  </style>
  