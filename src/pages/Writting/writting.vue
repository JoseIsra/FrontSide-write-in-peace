<template>
  <div class="writting">
    <section-title class="q-my-md q-ml-md">
      <template #title>
        <h5 class="no-margin brand text-weight-bold">
          <q-icon name="edit_note" />
          Crea un escrito anónimo
        </h5>
      </template>
      <template #hint>
        <p class="no-margin text-xs">
          Escribe sobre lo que gustes.No te contengas,
          <br />
          es un lugar seguro para ti 😊
        </p>
      </template>
    </section-title>
    <main class="writting__wrapper q-px-md column">
      <section class="row items-center justify-between">
        <q-input
          v-model="title"
          placeholder="Título nuevo aquí... 🧐"
          class="text-lg col-md-6 col-6"
          clearable
        />
        <q-btn label="Guardar" color="primary" @click="showModal = true" />
      </section>
      <section :class="['row items-center', { 'no-wrap': $q.screen.gt.xs }]">
        <div
          class="q-py-xs q-px-sm rounded-borders bg-light-blue-1 col-md-2 col-2 q-my-md"
          style="width: fit-content"
        >
          <label class="text-light-blue-8 text-weight-bold">
            Tópicos
            <span style="font-size: 11px"> ({{ topicsStatus }}) </span>
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
          <q-form autocomplete="off" class="row no-wrap" @submit="addTopic">
            <q-input
              v-model="topicModel"
              name="topicModel"
              ref="topicInput"
              autofocus
              placeholder="Nuevo tópico"
              dense
              @keydown.space="addTopic"
            />
            <div>
              <q-btn
                icon="add"
                round
                flat
                type="submit"
                dense
                color="primary"
              />
            </div>
          </q-form>
        </div>
      </section>
      <section class="writting__editorContainer">
        <editor
          v-model="writtingModel"
          api-key="751x0bdwwfwutahlap5uql2wzxh6zcfirqsk279fpw1sl4zi"
          :init="config"
          class="writting__editor"
          placeholder="Tu escrito inicia aquí..."
        />
      </section>
    </main>
    <q-dialog v-model="showModal">
      <confirmation-modal @save-publish="saveAndPublish" />
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import Editor from '@tinymce/tinymce-vue';
import { config } from '@/config/tinyConfig';
import { errorNotification } from '@/utils/notification';
import { v4 as uuidv4 } from 'uuid';
import { Topic } from '@/utils/types';
import SectionTitle from 'shared/SectionTitle';
import { useQuasar, QSpinnerGears } from 'quasar';
import ConfirmationModal from 'shared/ConfirmationModal';
import { writtingService } from '@/api/writtingApi';
import { useUser } from '@/composables/user';
import moment from 'moment';
import { WRITTING_TYPE } from '@/utils/constants';

const regexInputWithContent = /^\s*$/;

export default defineComponent({
  name: 'Writting',
  components: { Editor, SectionTitle, ConfirmationModal },
  setup() {
    const writtingModel = ref('');
    const topicModel = ref('');
    const topics = ref<Topic[]>([]);
    const topicInput = ref({} as HTMLElement);
    const title = ref<string>('');
    const $q = useQuasar();
    const showModal = ref(false);
    const { user } = useUser();

    const addTopic = () => {
      if (regexInputWithContent.exec(topicModel.value)) {
        errorNotification('Un tópico no puede estar vacío');
        return;
      }
      if (!(topics.value.length < 3))
        return errorNotification('Puedes agregar 3 tópicos como máximo');
      const newTopic = {
        id: uuidv4(),
        name: topicModel.value,
        active: true,
      };
      topics.value.push(newTopic);
      topicModel.value = '';
      topicInput.value.focus();
    };

    const removeTopic = (id: string) => {
      const topicIndex = topics.value.findIndex((t) => t.id == id);
      topics.value.splice(topicIndex, 1);
    };

    onMounted(() => {
      const dialog = $q.dialog({
        title: 'Cargando editor',
        progress: {
          spinner: QSpinnerGears,
          color: 'blue-6',
        },
        persistent: true, // we want the user to not be able to close it
        ok: false, // we want the user to not be able to close it
      });
      setTimeout(() => {
        dialog.hide();
      }, 1250);
    });

    const topicsStatus = computed(() => {
      return `${topics.value.length} / 3`;
    });

    const saveAndPublish = async (published: boolean) => {
      const options = {
        published,
        topics: topics.value,
      };
      const input = {
        content: writtingModel.value,
        user_id: user.id,
        date: moment().format('YYY-MM-DD HH:mm a'),
        title: title.value,
        type: WRITTING_TYPE.WRITTING,
        options: JSON.stringify(options),
      };
      const res = await writtingService.savePersonalWritting(input);
      showModal.value = false;
      console.log('response of writting', res);
    };

    return {
      writtingModel,
      config,
      topicModel,
      addTopic,
      topics,
      removeTopic,
      topicInput,
      title,
      topicsStatus,
      showModal,
      saveAndPublish,
    };
  },
});
</script>

<style scoped lang="scss">
@import './writting.scss';
</style>
