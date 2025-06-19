<script setup>
import { api_getUserListForPage } from '@/api/api_user';
import { userTableColumns } from '@/columns/columns_userTable';
import jzCard from '@/components/jz-card/index.vue'
import { Message } from '@arco-design/web-vue';
import { onMounted, ref } from 'vue';

// 表头配置项
const columns = userTableColumns()
// 分页配置项
const pagination = ref({
    current: 1,
    defaultCurrent: 1,
    pageSize: 10,
    defaultPageSize: 10,
    total: 10,
    showTotal: true,
    showPageSize: true,
    pageSizeOptions: [5,10, 20, 50, 100],
});

// 表格数据
const data = ref([])

// 分页变化事件

const getUserList = async (current, pageSize) => {
    let result = []
    await api_getUserListForPage(
        current,
        pageSize
    ).then(res => {
        res.list.forEach((item, index) => {
            result.push({
                index: index,
                username: item.username,
                nickname: item.nickname,
                image_url: item.image_url,
                status: item.status,
            })
        });
        pagination.value.total = res.total;
        data.value = result;
    }).catch(err => {
        Message.error(err || '获取用户列表失败');
    });
}
// 
const handlePageChange = async (current) => {
    pagination.value.current = current;
    getUserList(current, pagination.value.pageSize);
}

const handlePageSizeChange = async (pageSize) => {
    pagination.value.pageSize = pageSize;
    getUserList(pagination.value.current, pageSize);
}


onMounted(() => {
    getUserList(1, 10);
});


</script>
<template>
    <jzCard>
        <a-table 
            :columns="columns"
            :pagination="pagination"
            :data="data"
            page-position="bl"
            @page-change="handlePageChange"
            @page-size-change="handlePageSizeChange"
        >
        <template #columns>
            <a-table-column title="头像">
                <template #cell="{ record }">
                    <img :src="record.image_url" style="width: 40px; height: 40px; border-radius: 50%;" />
                </template>
            </a-table-column>
        </template>
        </a-table>
    </jzCard>
</template>
<style scoped lang='scss'>
</style>