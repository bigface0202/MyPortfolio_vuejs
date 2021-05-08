<template>
  <section class="publications">
    <v-container fluid>
      <ul>
        <v-row>
          <v-col md=6>
            <publication-filter @change-filter="setFilters"></publication-filter>
          </v-col>
        </v-row>
        <v-row>
          <v-col md=4>
            <v-card v-if="activeFilters.paper" flat>
              <v-card-title>Journal Paper</v-card-title>
              <v-card-text>
                <publication-item
                  v-for="pub in paper"
                  :key="pub.id"
                  :id="pub.id"
                  :title="pub.title"
                  :authors="pub.authors"
                  :publisher="pub.publisher"
                  :year="pub.year"
                  :firstAuthor="pub.firstAuthor"
                  :doi="pub.doi"></publication-item>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col md=4>
            <v-card v-if="activeFilters.conf_i" flat>
              <v-card-title>International Conference</v-card-title>
              <v-card-text>
                <publication-item
                  v-for="pub in internationalConf"
                  :key="pub.id"
                  :id="pub.id"
                  :title="pub.title"
                  :authors="pub.authors"
                  :publisher="pub.publisher"
                  :year="pub.year"
                  :firstAuthor="pub.firstAuthor"
                  :doi="pub.doi"></publication-item>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col md=4>
            <v-card v-if="activeFilters.conf_j" flat>
              <v-card-title>Domestic Conference</v-card-title>
              <v-card-text>
                <publication-item
                  v-for="pub in domesticConf"
                  :key="pub.id"
                  :id="pub.id"
                  :title="pub.title"
                  :authors="pub.authors"
                  :publisher="pub.publisher"
                  :year="pub.year"
                  :firstAuthor="pub.firstAuthor"
                  :doi="pub.doi"></publication-item>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </ul>
    </v-container>
  </section>
</template>

<script>
import PublicationItem from '@/components/publications/PublicationItem.vue'
import PublicationFilter from '@/components/publications/PublicationsFilter.vue'

export default {
  components: {
    PublicationItem,
    PublicationFilter
  },
  data () {
    return {
      activeFilters: {
        paper: true,
        conf_i: true,
        conf_j: true
      }
    }
  },
  computed: {
    paper () {
      const pubs = this.$store.getters['pubs/publications']
      return pubs.filter(pub => {
        if (this.activeFilters.paper && pub.type.includes('paper')) {
          return true
        }
        return false
      })
    },
    internationalConf () {
      const pubs = this.$store.getters['pubs/publications']
      return pubs.filter(pub => {
        if (this.activeFilters.conf_i && pub.type.includes('conf_i')) {
          return true
        }
        return false
      })
    },
    domesticConf () {
      const pubs = this.$store.getters['pubs/publications']
      return pubs.filter(pub => {
        if (this.activeFilters.conf_j && pub.type.includes('conf_j')) {
          return true
        }
        return false
      })
    }
  },
  methods: {
    setFilters (updatedFilters) {
      this.activeFilters = updatedFilters
    }
  }
}
</script>

<style scoped>
.publications__content {
  width: 100%;
}

ul {
  padding: 0;
  margin: 2rem auto;
  list-style: none;
}
</style>
