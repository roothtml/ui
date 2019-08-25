<template> 
    <input type="text" :disabled="disabled" :class="{'is-disabled':disabled}" class="ui-input " />
</template>
<script>
/**
* ui-header
* @module components/input
* @desc 输入框
* @param {Boolean} [disabled=false] - 禁止编辑 
*
* @example
* <ui-input   icon="thumbs-up" type="primary">按钮</ui-input>
*/
    export default {
        name: 'ui-input',
        props: {
            disabled: {
                type: Boolean,
                default: false,
            }
        },
    }
</script>
<style scoped lang="less">
    .ui-input {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        width: 100%;
        cursor: pointer;
    }

    .is-disabled {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor: not-allowed;
    }
</style>