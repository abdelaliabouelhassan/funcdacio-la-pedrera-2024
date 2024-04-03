<template>
  <section>
    <div class="pt-20 pb-40">
      <h2 class="text-Brown text-5xl font-super-grotesk-ot text-center">
        Vocacions i talent
      </h2>
    </div>
    <div class="space-y-52 relative">
      <div class="relative">
        <div ref="graph1"></div>
        <img
          class="z-10 hidden md:block opacity-70 absolute mix-blend-multiply top-28 left-[86%] xl:left-auto xl:right-0"
          src="/images/alimentacio/bg-vector-1.svg"
          alt=""
        />
      </div>
      <div class="relative">
        <div ref="graph2"></div>
        <img
          class="z-10 hidden md:block opacity-70 absolute mix-blend-multiply top-20 right-[84%] xl:right-auto xl:left-0"
          src="/images/alimentacio/bg-vector-2.svg"
          alt=""
        />
      </div>
      <div class="relative">
        <div ref="graph3"></div>
        <img
          class="z-10 hidden md:block mix-blend-multiply opacity-70 absolute top-10 left-[86%] xl:left-auto xl:right-0"
          src="/images/vocacio/bg-vector-1.svg"
          alt=""
        />
      </div>
      <div ref="graph4"></div>
      <div ref="graph5"></div>
      <div class="relative">
        <div ref="graph6"></div>
        <img
          class="z-10 hidden md:block mix-blend-multiply opacity-70 absolute top-10 right-[84%] xl:right-auto xl:left-0"
          src="/images/vocacio/bg-vector-2.svg"
          alt=""
        />
      </div>
      <div ref="graph7"></div>
      <div ref="graph8"></div>
      <div class="relative">
        <div ref="graph9"></div>
        <img
          class="z-10 hidden md:block opacity-70 absolute mix-blend-multiply top-28 left-[86%] xl:left-auto xl:right-0"
          src="/images/alimentacio/bg-vector-1.svg"
          alt=""
        />
      </div>
      <div class="relative">
        <div ref="graph10"></div>
        <img
          class="z-10 hidden md:block opacity-70 absolute mix-blend-multiply top-20 right-[84%] xl:right-auto xl:left-0"
          src="/images/alimentacio/bg-vector-2.svg"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import data1 from "../../../force-graph/data-1";
import data2 from "../../../force-graph/data-2";
import data3 from "../../../force-graph/data-3";
import data4 from "../../../force-graph/data-4";
import data5 from "../../../force-graph/data-5";
import data6 from "../../../force-graph/data-6";
import data7 from "../../../force-graph/data-7";
import data8 from "../../../force-graph/data-8";
import data9 from "../../../force-graph/data-9";
import data10 from "../../../force-graph/data-10";
import forceGraph from "../../../force-graph/force-graph";

const graph1 = ref(null);
const graph2 = ref(null);
const graph3 = ref(null);
const graph4 = ref(null);
const graph5 = ref(null);
const graph6 = ref(null);
const graph7 = ref(null);
const graph8 = ref(null);
const graph9 = ref(null);
const graph10 = ref(null);

onMounted(() => {
  forceGraph({
    el: graph1.value,
    data: data1,
  });

  forceGraph({
    el: graph2.value,
    data: data2,
  });

  forceGraph({
    el: graph3.value,
    data: data3,
  });

  forceGraph({
    el: graph4.value,
    data: data4,
  });

  forceGraph({
    el: graph5.value,
    data: data5,
  });

  forceGraph({
    el: graph6.value,
    data: data6,
  });

  forceGraph({
    el: graph7.value,
    data: data7,
  });

  forceGraph({
    el: graph8.value,
    data: data8,
  });

  forceGraph({
    el: graph9.value,
    data: data9,
  });

  forceGraph({
    el: graph10.value,
    data: data10,
  });
});
</script>
