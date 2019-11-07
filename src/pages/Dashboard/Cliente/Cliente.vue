<template>
  <q-page class="container">
      <div class="row justify-start">
        <template>
          <div class="q-pa-sm">
            <q-btn push color="primary" label="Nova Venda" @click="icon = true" />
              <q-dialog v-model="icon">
                <q-card>
                  <q-card-section class="row items-center">
                    <div class="text-h6">Nova Venda</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                  </q-card-section>
                  <q-card-section>
                    <template>
                      <div>
                        <div class="q-gutter-md row items-start">
                          <q-select
                            filled
                            v-model="model"
                            use-input
                            hide-selected
                            fill-input
                            input-debounce="0"
                            :options="options"
                            @filter="filterFn"
                            hint="Basic autocomplete"
                            style="width: 250px; padding-bottom: 32px"
                          >
                            <template v-slot:no-option>
                              <q-item>
                                <q-item-section class="text-grey">
                                  No results
                                </q-item-section>
                              </q-item>
                            </template>
                          </q-select>

                          <q-input type="text" hint='CPF' filled>
                          </q-input>

                          <q-input v-model="email" filled type="email" hint="Email" />

                          <q-input v-model="search" filled type="search" hint="Search">
                            <template v-slot:append>
                              <q-icon name="search" />
                            </template>
                          </q-input>

                          <q-input v-model="tel" filled type="tel" hint="Telephone number" />

                          <q-input v-model="url" filled type="url" hint="URL" />

                          <q-input filled v-model="date" >
                            <template v-slot:append>
                              <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                  <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" mask="DD-MM-YYYY"  />
                                </q-popup-proxy>
                              </q-icon>
                            </template>
                          </q-input>
                        </div>
                      </div>
                    </template>
                  </q-card-section>
                  <q-card-section>
                    <q-btn color="primary" label="Salvar" v-close-popup/>
                  </q-card-section>
                </q-card>
              </q-dialog>
          </div>
        </template>
      </div>
      <div class="row justify-start">
         <template>
            <div class="q-pa-sm">
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
                    <q-tr :props="props" class="cursor-pointer" @click.native='PassageDetails'>
                      <q-td key="name" :props="props">
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
                  <template v-slot:item="props">
                    <div
                      class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
                      :style="props.selected ? 'transform: scale(0.95);' : ''"
                    >
                      <q-card>
                        <q-list dense>
                          <q-item v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name"  @click.native='PassageDetails'>
                            <q-item-section>
                              <q-item-label>{{ col.label }}</q-item-label>
                            </q-item-section>
                            <q-item-section side>
                              <q-item-label caption>{{ col.value }}</q-item-label>
                            </q-item-section>
                          </q-item>
                        </q-list>
                      </q-card>
                    </div>
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
const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]
export default {
  data () {
    return {
      selected: [],
      model: null,
      options: stringOptions,
      password: '',
      isPwd: true,
      email: '',
      search: '',
      tel: '',
      url: '',
      time: '',
      date: '',
      // asd
      icon: false,
      // asd
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
    PassageDetails: function (evt, row) {
      this.$router.push('Venda/Details')
    },
    filterFn (val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        this.options = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    }
  }
}
</script>
