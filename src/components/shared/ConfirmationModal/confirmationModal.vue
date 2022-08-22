<template>
  <q-card class="confirmation q-pa-sm relative-position">
    <q-card-section class="row flex-center">
      <div class="confirmation__pictureWrapper">
        <img src="@/assets/publishpost.svg" alt="img" />
      </div>
    </q-card-section>
    <q-card-section>
      <h5 class="no-margin text-xl text-weight-bolder text-grey-9 text-center">
        Estás a punto de guardar tu escrito
      </h5>
      <div class="row items-center q-gutter-x-sm justify-center q-my-sm">
        <p class="no-margin text-sm text-grey-9">¿Quisieras publicarlo?</p>
        <q-icon name="help" size="17px" class="cursor-pointer" color="grey-9">
          <q-tooltip
            anchor="center end"
            self="center left"
            transition-show="scale"
            transition-hide="scale"
            style="width: 320px"
            class="bg-primary"
          >
            <span class="text-xs text-weight-bolder">
              Tu escrito podrá verse desde el baúl de escritos y es anónimo 🤫
            </span>
          </q-tooltip>
        </q-icon>
      </div>
    </q-card-section>
    <q-card-actions class="column items-center q-gutter-y-md">
      <q-btn
        label="Sí, adelante"
        color="primary"
        class="text-weight-bolder full-width"
        style="border-radius: 8px"
        @click="$emit('save-publish', true)"
      />
      <q-btn
        label="No, solo guardar"
        color="primary"
        outline
        class="text-weight-bolder full-width"
        style="border-radius: 8px"
        @click="$emit('save-publish', false)"
      />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ConfirmationModal',
  emits: ['save-publish'],
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import './confirmationModal.scss';
</style>
