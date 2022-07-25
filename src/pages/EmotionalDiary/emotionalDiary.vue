<template>
  <section class="diary q-py-md">
    <header class="q-pa-md q-my-lg">
      <h6 class="no-margin text-primary text-weight-bolder">
        Diario emocional
      </h6>
    </header>
    <main class="diary__body full-width row items-center justify-center">
      <div
        class="diary__wrapper row bg-primary col-md-9 q-pa-md justify-around"
      >
        <aside
          :class="[
            'diary__form default-white column q-pa-md col-md-6 overflow-auto',
            {
              'order-last': $q.screen.lt.md,
            },
          ]"
        >
          <q-timeline>
            <q-timeline-entry color="blue-grey-9" icon="history_edu">
              <div class="q-mb-lg" style="min-height: 120px">
                <p class="dark-word text-sm">
                  Por favor, escribe sobre algún suceso de este día que te haya
                  afectado
                </p>
                <q-input
                  v-model="models.questionOne"
                  outlined
                  dense
                  autogrow
                  placeholder="El día de hoy..."
                />
              </div>
            </q-timeline-entry>
            <q-timeline-entry color="blue-grey-9" icon="history_edu">
              <div class="q-mb-lg" style="min-height: 120px">
                <p class="dark-word text-sm">
                  Ahora por favor, escribe sobrec cómo te sentiste ante ese
                  suceso
                </p>
                <q-input
                  v-model="models.questionTwo"
                  outlined
                  dense
                  autogrow
                  placeholder="Me sentí..."
                />
              </div>
            </q-timeline-entry>
            <q-timeline-entry icon="history_edu" color="blue-grey-9">
              <div class="q-mb-lg" style="min-height: 120px">
                <p class="dark-word text-sm">
                  Finalmente, si hay algo que quieras decirte a ti mismo,
                  escríbelo libremente. Puden ser palabras de ánimo, algún
                  cumplido, lo que gustes 😀
                </p>
                <q-input
                  v-model="models.questionThree"
                  outlined
                  dense
                  autogrow
                  placeholder="Yo..."
                />
              </div>
            </q-timeline-entry>

            <div class="full-width q-mt-lg q-px-md">
              <q-btn
                label="Guardar"
                no-caps
                icon="save"
                color="primary"
                class="full-width q-py-sm"
              />
            </div>
          </q-timeline>
        </aside>

        <aside
          :class="[
            'diary__date col-md-4 col-12  relative-position',
            { 'order-first': $q.screen.lt.md },
          ]"
        >
          <div class="diary__date__wrapper q-pa-md row justify-center">
            <h4 class="q-my-md text-white text-weight-bolder col-md-12 col-12">
              Hoy
            </h4>
            <div
              :class="[
                'col-md-9 col-9',
                $q.screen.lt.md ? 'q-mt-md' : 'q-mt-xl',
              ]"
            >
              <p class="text-white text-md text-center">
                {{ currentDate }}
              </p>
            </div>
          </div>
          <picture class="diary__date__figure absolute">
            <img alt="picture" src="../../assets/amico.png" />
          </picture>
        </aside>
      </div>
    </main>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import moment from 'moment';

export default defineComponent({
  name: 'EmotionalDiary',
  setup() {
    const models = reactive({
      questionOne: '',
      questionTwo: '',
      questionThree: '',
    });

    const currentDay = computed<string>(() => {
      const day = moment().locale('es').format('dddd');
      return day.charAt(0).toUpperCase() + day.slice(1);
    });

    const currentDate = computed<string>(() => {
      return `${currentDay.value} ${moment().locale('es').format('LL')}`;
    });

    return {
      models,
      currentDate,
    };
  },
});
</script>

<style scoped lang="scss">
@import './emotionalDiary.scss';
</style>
