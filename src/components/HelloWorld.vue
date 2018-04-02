<template>
  <div class="hello">
    <!-- <div id="editor" type="text/plain" style="width:1024px;height:500px;"></div>  -->
    <!-- <button @click="submits">保存</button>  -->
    <!-- <button @click="xieru">写入</button>  -->
    <el-upload
      class="upload-demo"
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false"
      :show-file-list="true"
      :on-success="success">
      <el-button slot="trigger" size="small" type="primary" >选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>

  </div>
</template>

<script>
import '../../static/utf8-jsp/ueditor.config'
import '../../static/utf8-jsp/ueditor.all'
import '../../static/utf8-jsp/lang/zh-cn/zh-cn' 
export default {
  name: 'HelloWorld',
  data () {
    return {
      ue: '', 
      uedata: [], 
      xierudata: [] ,
      fileList: []
    }
  },
  mounted() { 
    this.ue = UE.getEditor('editor',{ 
        BaseUrl: '', 
       UEDITOR_HOME_URL: 'static/utf8-jsp/', 
        // toolbars:[] 
    }); 
}, 
  methods: { 
    submits(){ 
      this.uedata.push(UE.getEditor('editor').getContent()); 
      if(this.uedata.length>0){
        console.log(this.uedata[this.uedata.length-1])
      }
      // console.log(this.uedata.join("\n")); 
    }, 
    xieru(){ 
      UE.getEditor('editor').setContent('<h1 style="font-size: 32px; font-weight: bold; border-bottom: 2px solid rgb(204, 204, 204); padding: 0px 4px 0px 0px; text-align: center; margin: 0px 0px 20px;">111111<br/></h1>'); 
    } ,
    submitUpload() {
      console.log(this.fileList)
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
        
      },
      success(esponse, file, fileList){
        console.log(fileList)
      }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
