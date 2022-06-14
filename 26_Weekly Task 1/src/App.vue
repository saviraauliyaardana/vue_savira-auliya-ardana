<template>
  <div id="app">
    <div >
        <!-- <b-card no-body> -->
          <b-tabs card
              active-nav-item-class="font-weight-bold text-uppercase text-warning"
              active-tab-class="font-weight-bold text-dark"
            >
            <b-tab title="Home" active>
              <home/>
            </b-tab>
            <b-tab title="Section 2">
              <section2/>
            </b-tab>
            <b-tab title="Section 3">
              <section3/>
            </b-tab>
            <b-tab title="Section 4">
              <section4/>
            </b-tab>
            <b-tab title="Section 5">
             <section5/>
            </b-tab>
            <b-tab title="Section 6">
              <section6/>
            </b-tab>
            <b-tab title="Section 7">
              <section7/>
            </b-tab>
            <b-tab title="Section 8">
              <section8/>
            </b-tab>
            <b-tab title="Section 9">
              <section9/>
            </b-tab>
            <b-tab title="Section 10">
              <section10/>
            </b-tab>
          </b-tabs>
        <!-- </b-card> -->
    </div>
  </div>
</template>

<script>
import home from '@/components/homeComponent.vue'
import section2 from '@/components/section2.vue'
import section3 from '@/components/section3.vue'
import section4 from '@/components/section4.vue'
import section5 from '@/components/section5.vue'
import section6 from '@/components/section6.vue'
import section7 from '@/components/section7.vue'
import section8 from '@/components/section8.vue'
import section9 from '@/components/section9.vue'
import section10 from '@/components/section10.vue'

 export default {
   components :{
    home,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
    section9,
    section10
    
   },
   data:() => ({

   }),
 }
</script>

<style>
.card-header{
  background-color: #212529;
}
</style>

