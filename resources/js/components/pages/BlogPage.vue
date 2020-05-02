<template>
  <div>
    <top-banner :page="'Blog page'" :background="'banner3'"></top-banner>


    <div class="heading">
        <h1>Our Blog Post</h1>
    </div>
    <div class="blog">
      <div class="container">
        <div class="row">
          <div class="col-md-4" style="margin-top: 20px !important;">
            <div class="items ui raised segment">
              <div class="img">
                <img src="/images/slider/big_img1.jpg" width="100%" alt />
              </div>

              <div class="details">
                <button>Categry</button>
                <h4>
                  <strong>This is the title</strong>
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, minima?</p>
                <span>23 of Aug</span>
                <span class="shared">
                  <i class="icon share square outline"></i> 9
                </span>
              </div>
            </div>
          </div>



           <div class="col-md-4" style="margin-top: 20px !important;">
            <div class="items ui raised segment">
              <div class="img">
                <img src="/images/slider/big_img2.jpg" width="100%" alt />
              </div>

              <div class="details">
                <button>Categry</button>
                <h4>
                  <strong>This is the title</strong>
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, minima?</p>
                <span>23 of Aug</span>
                <span class="shared">
                  <i class="icon share square outline"></i> 9
                </span>
              </div>
            </div>
          </div>


           <div class="col-md-4" style="margin-top: 20px !important;">
            <div class="items ui raised segment">
              <div class="img">
                <img src="/images/slider/big_img3.jpg" width="100%" alt />
              </div>

              <div class="details">
                <button>Categry</button>
                <h4>
                  <strong>This is the title</strong>
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, minima?</p>
                <span>23 of Aug</span>
                <span class="shared">
                  <i class="icon share square outline"></i> 9
                </span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>
<script>
import TopBanner from "../partials/TopBanner";

export default {
  components: {
    TopBanner
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  computed: {}
};
</script>


<style lang="scss">
.blog {
  & .items {
    background: #fff;
    

    & img {
      height: 200px;
    }
    & .details {
      background: white;
      border-radius: 3px;
      position: relative;
      transform: translateY(-30px);
      margin: auto;
      padding: 5px;
      text-align: center;
      width: 90%;
      box-shadow: 1px -11px 10px #333;

      & button {
        border: none;
        padding: 8px 25px;
        background: rgba(86, 79, 204, 0.9);
        transform: translate(-45px, -24px);
        position: absolute;
        color: white;
        font-weight: 600;
      }

      & p {
        line-height: 23px;
        letter-spacing: 0px;
        color: #777;
        font-size: 15px;
      }

      & span {
        font-size: 12px;
        color: #999;
      }

      & span.shared{
          color:#555;
          font-weight: bold;
          padding-left: 3px;
          font-size: 14px;
      }
    }
  }
}
</style>