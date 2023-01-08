<script setup lang="ts">
import { ref } from 'vue';
import useFile from 'src/modules/shared/composables/useFile';
import useNotify from 'src/modules/shared/composables/useNotify';
import { api } from 'src/boot/axios';

const { file, uploadFile } = useFile();
const { errorNotify } = useNotify();
const supplier = ref('');
const budgetDate = ref('');
const step = ref(1);

const onSubmit = () => {};
</script>

<template>
  <q-page padding>
    <span class="text-h6">Cargar Cotizaciones</span>

    <q-separator spaced />

    <div class="row justify-center q-mt-md">
      <div class="col-12 my-card">
        <q-stepper v-model="step" ref="stepper" color="primary" animated>
          <q-step
            :name="1"
            title="Llenar datos"
            icon="settings"
            :done="step > 1"
          >
            <div class="row q-col-gutter-md">
              <div class="col-12">
                <q-input
                  v-model="supplier"
                  outlined
                  type="text"
                  label="Proveedor"
                />
              </div>

              <div class="col-12">
                <q-input
                  v-model="budgetDate"
                  outlined
                  label="Fecha de cotización"
                />
              </div>

              <div class="col-12">
                <q-file
                  outlined
                  counter
                  clearable
                  max-files="1"
                  v-model="file"
                  label="Arrastre su archivo excel hasta aqui o haga click para seleccionarlo"
                  @rejected="errorNotify('File type not supported')"
                  accept=".xlsx"
                >
                  <template v-slot:prepend>
                    <q-icon name="description" />
                  </template>
                </q-file>
              </div>
            </div>
          </q-step>

          <q-step
            :name="2"
            title="Verificar resultados"
            icon="create_new_folder"
            :done="step > 2"
          >
            An ad group contains one or more ads which target a shared set of
            keywords.
          </q-step>

          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn
                v-if="step > 1"
                flat
                color="primary"
                @click="step = 1"
                label="Atras"
                class="q-mr-sm"
              />

              <q-btn
                @click="step = 2"
                color="primary"
                :label="step === 2 ? 'Finalizar' : 'Continuar'"
              />
            </q-stepper-navigation>
          </template>
        </q-stepper>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.my-card {
  max-width: 600px;
}
</style>
