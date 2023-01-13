<script setup lang="ts">
import {UiTable} from '@/data/BasicComponents';
</script>

<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Ui Table
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold">Table</h2>
              <p class="text-muted">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website & dashboard in No-time.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Ui Table
        ----------------------------------------------- -->
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <v-card class="card-shadow">
              <v-card-text>
                <v-table>
                  <thead>
                    <tr>
                      <th class="text-left text-muted">Name</th>
                      <th class="text-left text-muted">Calories</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in UiTable" :key="item.name">
                      <td>{{ item.name }}</td>
                      <td>{{ item.calories }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
