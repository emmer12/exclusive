<template>
    <div >
          <div class="pofollio">
            <h1 class="heading">Portfollio</h1>

            <div style="width:100%;overflow-x:auto">
              <div class="ui menu">
              <div class="item">
                <div class="ui button" @click="filter('all','all')">All</div>
              </div>
              <div class="item">
                <div class="ui button" @click="filter('filterByText','Wedding')" >Wedding</div>
              </div>
              <div class="item"  @click="filter('filterByText','Graduation')">
                <div class="ui button">Graduation</div>
              </div>
              <div class="item"  @click="filter('filterByText','Musical')">
                <div class="ui button">musical</div>
              </div>
              <div class="item"  @click="filter('filterByText','Video')">
                <div class="ui button">Videos</div>
              </div>
              
               </div>
            </div>
          </div>


            <div class="gri">
                <isotope ref='cpt' :options='option' :list="urls"  class="isDefault grid" @filter="filterOption=arguments[0]" :item-selector="'element-item'" id="root_isotope">
                    <div  v-for="element in urls" :key="element.id" class="grid-items" style="padding:10px;box-shadow: 2px 3px 4px #ccc;margin: 5px;">
                        <img v-if="element.category!='Video'" v-lazy="element.img" alt="" width="300px" height="240px">
                        <video v-if="element.category=='Video'" :src="element.img" width="300px" height="240px" controls></video>
                    </div>
                </isotope>
           </div>                                             

       </div>
    </div>
</template>


<script>
import isotope from 'vueisotope';
import layout from 'isotope-layout';

var count=0;
export default {
  components:{
    isotope
        },
        data() {
          var his=this;
            return {
             filterText:"",
             filterOption:'all',
             layouts:[
               'masonry',
               'fitRows',
               'cellsByRow',
               'vertical',
               'mansoryHorizontal',
               'packery',
               'fitColumn',
               'cellsByColumn',
               'horiz',
             ],
             urls:[
                {
                  id:1,
                  img:'/images/works/w1.jpg',
                  category:"Wedding"
                },
                 {
                  id:2,
                  img:'/images/works/w2.jpg',
                  category:"Wedding"
                },
                 {
                  id:3,
                  img:'/images/works/w3.jpg',
                  category:"Wedding"
                 },
                 {
                   id:5,
                  img:'/images/works/w5.jpg',
                  category:"Graduation"
                },
                 {
                   id:6,
                  img:'/images/works/w6.jpg',
                  category:"Graduation"
                },
                 {
                  id:4,
                  img:'/images/works/w4.jpg',
                  category:"Wedding"
                },
                 {
                   id:7,
                  img:'/images/works/w7.jpg',
                  category:"Graduation"
                },
                 {
                   id:8,
                  img:'/images/works/w8.jpg',
                  category:"Musical"
                },
                 {
                  id:9,
                  img:'/images/works/w9.jpg',
                  category:"Musical"
                },
                 {
                  id:10,
                  img:'/videos/demo1.mp4',
                  category:"Video"
                },
                                                                                                                                                                                                                                                                                                                                                              
             ],                                                                 
              option: {
                getFilterData: {
                    'all':function(){
                      return true;
                    },
                    filterByText: function(itemElem) {
                    if(itemElem=="all") {return false}
                    return itemElem.category.toLowerCase().includes(his.filterText.toLowerCase());
                    
                    },  
                  itemSelector: '.grid-item',
                },
           }
         }
        },
        methods: { 
          filter:function(key,value){
            this.filterText=value;
            console.log(key);
            
            this.$refs.cpt.filter(key)
             }
        },
        mounted() {
          var his=this;
          
        },
}
</script>

<style lang="scss" scoped>
 .pofollio{
   width:100%;
    & .grid{
        display:grid;
        grid-template-columns: repeat(6,2fr);
        grid-auto-rows: 200px;
        grid-gap: 5px;
        grid-auto-flow: dense;

        & .element-item{
             box-shadow: 2px 3px 4px #ddd; 
             padding:3px;
             position: relative;
         }
    }
}

.isoDefault{
  position:relative;
  min-height: 210px;
}
</style>