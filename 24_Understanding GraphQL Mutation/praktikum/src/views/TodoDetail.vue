<template>
  <v-container>
    <v-card-title>List Anggota</v-card-title>
    <ApolloMutation
      :mutation="require('../gql/AddTodo.gql')"
      :variables="{ nama }"
      :update="updateCache"
    >
      <template v-slot="{ mutate, loading, error }">
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  outlined
                  dense
                  v-model="nama"
                  placeholder="Masukkan Nama"
                ></v-text-field>
                <v-btn
                  :disabled="loading"
                  depressed
                  text color ="primary"
                  @click="mutate()"
                  >Submit</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-form>

        <p v-if="error">An error occurred: {{ error }}</p>
      </template>
    </ApolloMutation>
    <br />
    <ApolloQuery :query="require('../gql/getAllTodo.gql')">
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <v-row>
            <v-simple-table fixed-header height="500px">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">ID</th>
                    <th class="text-left">Nama</th>
                    <th class="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="anggota in data.anggota" :key="anggota.id">
                    <td class="text-center">
                      <input v-if="editidx == anggota.id" v-model="anggota.id" />
                      <span v-else> {{ anggota.id }}</span>
                    </td>
                    <td>
                      <span  @click="() => redirect(task)">
                        {{ anggota.nama }}
                      </span>
                    </td>
                    <td class="text-center">
                      <v-btn
                        tile
                        color="success"
                        text
                        @click="EditTodo(anggota.id)"
                      >
                        {{editidx == anggota.id ? "Update" : "Edit"}}
                        
                      </v-btn>

                      <v-btn
                        tile
                        color="error"
                        text
                        @click="deleteTodo(anggota.id)"
                      >
                        Delete
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-row>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result</div>
      </template>
    </ApolloQuery>
  </v-container>
</template>

<script>
export default {
  name: "TodoPage",
  data() {
    return {
      nama: "",
      editidx: null,
    };
  },
  methods: {
    redirect(id) {
      this.$router.push(`/todo/${id}`);
    },
    onDone() {
      window.location.reload();
    },
    updateCache(store, { data: { insert_anggota } }) {
      const query = {
        query: require("../gql/getAllTodo.gql"),
      };
      // Read the query from cache
      const data = store.readQuery(query);
      // Mutate cache result
      data.anggota.push(insert_anggota);
      // Write back to the cache
      store.writeQuery({
        ...query,
        data,
      });
    },
    editTodo(cache, { data: { insert_anggota } }) {
      cache.modify({
        fields: {
          todo(existingTodo = []) {
            const newTodoRef = cache.writeFragment({
              data: insert_anggota,
              mutation: require("../gql/UpdateTodo.gql"),
            });
            return [newTodoRef, ...existingTodo];
          },
          
        },
      });
    },
    deleteTodo(id) {
      this.$apollo.mutate({
        // Query
        mutation: require("../gql/DeleteTodo.gql"),
        // Parameters
        variables: {
          id,
        },
        update: (store, { data: { delete_anggota_by_pk } }) => {
          // Read the data from our cache for this query.
          const query = {
            query: require("../gql/getAllTodo.gql"),
          };
          // Read the query from cache
          const data = store.readQuery(query);

          const index = data.anggota.findIndex(
            (anggota) => anggota.id === delete_anggota_by_pk.id
          );

          if (index !== -1) {
            // Mutate cache result
            data.anggota.splice(index, 1);
            // Write back to the cache
            store.writeQuery({
              ...query,
              data,
            });
          }
        },
      });
    },
  },
};
</script>

