<template>
  <div class="writting">
    <!-- titulo -->

    <main class="writting__wrapper q-pa-sm column q-gutter-y-md">
      <section class="">
        <q-input placeholder="Título nuevo aquí... 😀" />
      </section>
      <section
        :class="['q-pa-xs row items-center', { 'no-wrap': $q.screen.gt.xs }]"
      >
        <div
          class="q-py-xs q-px-sm rounded-borders bg-light-blue-1"
          style="width: fit-content"
        >
          <label class="text-light-blue-8 text-weight-bold">
            Tópicos
            <q-icon name="help" size="18px" class="md">
              <q-tooltip class="text-xs">
                Puedes usar la barra espaciadora o la tecla Enter para agregar
                tu nuevo tópico
              </q-tooltip>
            </q-icon>
          </label>
        </div>
        <div
          :class="[
            'row items-center col-md-10 col-10 q-ml-xs',
            { 'no-wrap': $q.screen.gt.xs },
          ]"
        >
          <div class="row">
            <q-chip
              v-for="topic in topics"
              :key="topic.id"
              v-model="topic.active"
              :label="topic.name"
              removable
              color="primary"
              :ripple="false"
              outline
              square
              @remove="removeTopic(topic.id)"
            />
          </div>
          <q-form @submit.prevent="addTopic">
            <q-input
              v-model="topicModel"
              autofocus
              placeholder="Nuevo tópico"
              dense
              @keydown.space="addTopic"
            />
            <div>
              <button type="submit">go</button>
            </div>
          </q-form>
        </div>
      </section>
      <section class="writting__editorContainer row q-mx-auto">
        <editor
          v-model="writtingModel"
          api-key="751x0bdwwfwutahlap5uql2wzxh6zcfirqsk279fpw1sl4zi"
          :init="config"
          class="writting__editor"
          placeholder="Tu escrito inicia aquí..."
        />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Editor from '@tinymce/tinymce-vue';
import { config } from '@/config/tinyConfig';
import { errorNotification } from '@/utils/notification';
import { v4 as uuidv4 } from 'uuid';
import { Topic } from '@/utils/types';

const regexInputWithContent = /^\s*$/;

export default defineComponent({
  name: 'Writting',
  components: { Editor },
  setup() {
    const writtingModel = ref('');
    const titleModel = ref('');
    const topicModel = ref('');
    const topics = ref<Topic[]>([]);

    const addTopic = () => {
      if (regexInputWithContent.exec(topicModel.value)) {
        errorNotification('Un tópico no puede estar vacío');
        return;
      }
      const newTopic = {
        id: uuidv4(),
        name: topicModel.value,
        active: true,
      };
      topics.value.push(newTopic);
      topicModel.value = '';
    };

    const removeTopic = (id: string) => {
      const topicIndex = topics.value.findIndex((t) => t.id == id);
      topics.value.splice(topicIndex, 1);
    };

    return {
      writtingModel,
      config,
      titleModel,
      topicModel,
      addTopic,
      topics,
      removeTopic,
    };
  },
});
</script>

<style scoped lang="scss">
@import './writting.scss';
</style>
