<template>
  <main class="landing relative-position column">
    <div class="landing__cover absolute q-pa-md">
      <img src="../../assets/realback.png" alt="logo" />
    </div>
    <header class="landing__header col-md-1 col-1 z-top row items-end">
      <div
        class="landing__header__wrapper q-pa-sm relative-position q-mt-lg q-ml-xl"
      >
        <p class="landing__header__brandName no-margin no-paddgin text-white">
          MyPeace
        </p>
      </div>
    </header>
    <section
      class="landing__content z-top col-md-10 col-12 q-pa-sm row items-center justify-around"
    >
      <aside class="landing__info column items-center">
        <div class="landing__info__textWrapper relative-position">
          <h3
            class="landing__info__title no-margin no-padding text-white text-weight-bolder"
          >
            Analiza,
            <br />
            exprésate,
            <br />
            siéntete mejor
          </h3>
          <figure class="absolute-right landing__imgWrapper --writer">
            <img
              class="landing__image"
              src="../../assets/writer.png"
              alt="depression"
            />
          </figure>
        </div>
        <figure class="landing__imgWrapper --depression">
          <img
            class="landing__image"
            src="../../assets/depress.png"
            alt="depression"
          />
        </figure>
      </aside>
      <div
        :class="{
          'landing__block full-width row  justify-center': $q.screen.lt.md,
        }"
      >
        <form-tabs />
      </div>
    </section>
    <footer class="landing__footer col-auto col-1 col-md-1 z-top row">
      <aside v-if="$q.screen.gt.sm" class="col-md-7 col-7"></aside>
      <aside
        :class="[
          'landing__footer__terms row text-white relative-position items-center justify-center',
          $q.screen.lt.md ? 'fit col-md-12 col-12' : 'col-md-5 col-5',
        ]"
      >
        <div class="landing__footer__term">
          <p class="no-margin no-padding">Terminos y condiciones</p>
        </div>
        <div class="landing__footer__term">
          <p class="landing__footer__term no-margin no-padding">
            Escritura expresiva
          </p>
        </div>
        <div class="landing__footer__term">
          <p class="landing__footer__term no-margin no-padding">
            MyPeace-2022 &copy;
          </p>
        </div>
      </aside>
    </footer>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormTabs from '@/components/organism/FormTabs';

export default defineComponent({
  name: 'Landing',
  components: { FormTabs },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
@import './landing.scss';
</style>
