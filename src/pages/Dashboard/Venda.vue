<template>
  <q-page class="container">
      <div class="row justify-start">
        <template>
          <div class="q-pa-md">
            <q-btn push color="primary" label="Nova Venda" @click="icon = true" />
              <q-dialog v-model="icon">
                <q-card>
                  <q-card-section class="row items-center">
                    <div class="text-h6">Close icon</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                  </q-card-section>
                  <q-card-section>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
                  </q-card-section>
                </q-card>
              </q-dialog>
          </div>
        </template>
      </div>
      <div class="row justify-start">
         <template>
            <div class="q-pa-md">
                <q-table
                :grid="$q.screen.xs"
                title="Vendas"
                :data="data"
                :columns="columns"
                row-key="name"
                :filter="filter"
                >
                <template v-slot:top-right>
                    <q-input borderless dense debounce="300" v-model="filter" placeholder="Pesquisar">
                    <template v-slot:append>
                        <q-icon name="search" />
                    </template>
                    </q-input>
                </template>
                <template v-slot:body="props" >
                  <q-tr :props="props" class="cursor-pointer" @click.native="PassageDetails">
                    <q-td key="name">
                      {{ props.row.name }}
                    </q-td>
                    <q-td key="calories" >
                      {{ props.row.calories }}
                    </q-td>
                    <q-td key="fat">
                      {{ props.row.fat }}
                    </q-td>
                    <q-td key="carbs" >
                      {{ props.row.carbs }}
                    </q-td>
                    <q-td key="embarque">
                      {{ props.row.embarque }}
                    </q-td>
                  </q-tr>
                </template>
                </q-table>
            </div>
        </template>
      </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  data () {
    return {
      icon: false,
      filter: '',
      columns: [
        {
          name: 'name',
          label: 'Cliente',
          align: 'left',
          field: 'name',
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Localizador', field: 'calories', sortable: true },
        { name: 'fat', label: 'Origem', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Destino', field: 'carbs' },
        { name: 'embarque', label: 'Embarque', field: 'embarque' }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          embarque: 123
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          embarque: 123
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          embarque: 123
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          embarque: 123
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          embarque: 123
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          embarque: 123
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          embarque: 123
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          embarque: 123
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          embarque: 123
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          embarque: 123
        }
      ]
    }
  },
  methods: {
    PassageDetails: function () {
      alert('a')
    }
  }
}
</script>
