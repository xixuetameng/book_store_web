<script setup>
import { ref, onMounted } from 'vue'
import { GetBooks } from "../api/BookManage.js";
import { UpdateBooks } from "../api/BookManage.js";
import { addBook} from "../api/BookManage.js";
import { deleteBook } from "../api/BookManage.js";

// 用于存储表格数据
const tableData = ref([]);

// 用于存储单个新增书籍的数据
const newBook = ref({
  isbn: '',
  name: '',
  author: '',
  publisher: '',
  price: 0,
  keyWord: '',
  supplier: '',
  catalog: '',
  cover: '',
  inventory: 0
});

// 加载订单信息
const loadBooks = async () => {
  const res = await GetBooks();
  tableData.value = res.data.data ?? [];
};

// 提交保存数据
const saveBooks = async () => {
  try {
    // 在发送前，确保必填字段不为空
    const validData = tableData.value.map(row => ({
      ...row,
      catalog: row.catalog || '',  // 如果为空，默认填空字符串
      cover: row.cover || ''        // 如果为空，默认填空字符串
    }));

    const result = await UpdateBooks(validData);
    alert('保存成功');
  } catch (err) {
    console.error('保存失败', err);
    alert('保存失败');
  }
}

const addTheBook = async () => {
  try {
    // 确保表单数据不为空
    if (!newBook.value.isbn || !newBook.value.name || !newBook.value.catalog || !newBook.value.cover) {
      alert('请填写所有必填项！');
      return;
    }

    const result = await addBook(newBook.value);  // 假设 AddBook 是用于新增书籍的 API
    alert('书籍添加成功');
    // 清空表单数据
    newBook.value = {
      isbn: '',
      name: '',
      author: '',
      publisher: '',
      price: 0,
      keyWord: '',
      supplier: '',
      catalog: '',
      cover: '',
      inventory: 0
    };
  } catch (err) {
    console.error('添加失败', err);
    alert('添加失败');
  }
  await loadBooks();
};

const bookIdToDelete = ref(null);
const deleteTheBook = async () => {
  if (!bookIdToDelete.value) {
    alert('请输入书籍ID');
    return;
  }

  const payload = {
    bookId: bookIdToDelete.value,
  }

  try {
    const result = await deleteBook(payload);  // 假设 DeleteBook 是用于删除书籍的 API
      alert('书籍删除成功');
      bookIdToDelete.value = null;  // 清空输入框
  } catch (err) {
    console.error('删除失败', err);
    alert('删除失败');
  }
  await loadBooks();
}

onMounted(() => {
  loadBooks();
})

</script>

<template>

  <div>
    <el-table :data="tableData" border style="width: 100%">
      <!-- 订单号：只读 -->
      <el-table-column prop="bookId" label="书籍ID" width="100" />

      <!-- ISBN -->
      <el-table-column label="ISBN">
        <template #default="{ row }">
          <el-input v-model="row.isbn" />
        </template>
      </el-table-column>

      <!-- 书名 -->
      <el-table-column label="书名">
        <template #default="{ row }">
          <el-input v-model="row.name" />
        </template>
      </el-table-column>

      <!-- 作者 -->
      <el-table-column label="作者">
        <template #default="{ row }">
          <el-input v-model="row.author" />
        </template>
      </el-table-column>

      <!-- 出版社 -->
      <el-table-column label="出版社">
        <template #default="{ row }">
          <el-input v-model="row.publisher" />
        </template>
      </el-table-column>

      <!-- 价格 -->
      <el-table-column label="价格">
        <template #default="{ row }">
          <el-input v-model="row.price" />
        </template>
      </el-table-column>

      <!-- 关键词 -->
      <el-table-column label="关键词">
        <template #default="{ row }">
          <el-input v-model="row.keyWord" />
        </template>
      </el-table-column>

      <!-- 供应商 -->
      <el-table-column label="供应商">
        <template #default="{ row }">
          <el-input v-model="row.supplier" />
        </template>
      </el-table-column>

      <!-- 目录：必须填 -->
      <el-table-column label="目录">
        <template #default="{ row }">
          <el-input v-model="row.catalog" placeholder="请输入目录" />
        </template>
      </el-table-column>

      <!-- 封面：必须填 -->
      <el-table-column label="封面">
        <template #default="{ row }">
          <el-input v-model="row.cover" placeholder="请输入封面链接" />
        </template>
      </el-table-column>

      <!-- 库存 -->
      <el-table-column label="库存">
        <template #default="{ row }">
          <el-input v-model="row.inventory" />
        </template>
      </el-table-column>
    </el-table>

    <el-button type="primary" @click="saveBooks">保存修改</el-button>

    <el-table :data="[newBook]" border style="width: 100%">
      <el-table-column label="ISBN">
        <template #default="{ row }">
          <el-input v-model="row.isbn" placeholder="请输入ISBN" />
        </template>
      </el-table-column>

      <el-table-column label="书名">
        <template #default="{ row }">
          <el-input v-model="row.name" placeholder="请输入书名" />
        </template>
      </el-table-column>

      <el-table-column label="作者">
        <template #default="{ row }">
          <el-input v-model="row.author" placeholder="请输入作者" />
        </template>
      </el-table-column>

      <el-table-column label="出版社">
        <template #default="{ row }">
          <el-input v-model="row.publisher" placeholder="请输入出版社" />
        </template>
      </el-table-column>

      <el-table-column label="价格">
        <template #default="{ row }">
          <el-input v-model="row.price" placeholder="请输入价格" />
        </template>
      </el-table-column>

      <el-table-column label="关键词">
        <template #default="{ row }">
          <el-input v-model="row.keyWord" placeholder="请输入关键词" />
        </template>
      </el-table-column>

      <el-table-column label="供应商">
        <template #default="{ row }">
          <el-input v-model="row.supplier" placeholder="请输入供应商" />
        </template>
      </el-table-column>

      <el-table-column label="目录">
        <template #default="{ row }">
          <el-input v-model="row.catalog" placeholder="请输入目录" />
        </template>
      </el-table-column>

      <el-table-column label="封面">
        <template #default="{ row }">
          <el-input v-model="row.cover" placeholder="请输入封面链接" />
        </template>
      </el-table-column>

      <el-table-column label="库存">
        <template #default="{ row }">
          <el-input v-model="row.inventory" placeholder="请输入库存" />
        </template>
      </el-table-column>
    </el-table>

    <el-button type="primary" @click="addTheBook">添加书籍</el-button>

    <div style="margin-top: 20px;">
      <el-input v-model="bookIdToDelete" placeholder="请输入要删除的书籍ID" type="number" />
      <el-button type="danger" @click="deleteTheBook">确认删除</el-button>
    </div>

  </div>


</template>

<style scoped>

</style>