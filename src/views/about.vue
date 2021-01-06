 <template>
  <div class="about">
    789
     <!-- <Input v-model="value" placeholder="Enter something..." style="width: 300px" /> -->
  </div>
</template>
 
 <script>
import { reactive, onMounted } from "vue";
export default {
  props: {
    title: String,
  },

  setup() {
    const state = reactive({
      username: "",
      password: "",
      value:""
    });
    const login = () => {
      // login method
    };

    onMounted(() => {
      console.log("component mounted");
    });
    return {
      login,

      state,
    };
  },
};
</script>
 
 <style  lang='less' scoped>
</style>