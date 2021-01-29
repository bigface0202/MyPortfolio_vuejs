<template>
  <div>
    <h2>Publications</h2>
    <section>
      <publication-filter @change-filter="setFilters"></publication-filter>
    </section>
    <ul>
      <base-card v-if="activeFilters.paper">
        <h2>Journal Paper</h2>
        <publication-item
          v-for="pub in paper"
          :key="pub.id"
          :id="pub.id"
          :title="pub.title"
          :authors="pub.authors"
          :publisher="pub.publisher"
          :year="pub.year"
          :firstAuthor="pub.firstAuthor"
          :doi="pub.doi"
        ></publication-item>
      </base-card>
      <base-card v-if="activeFilters.conf_i">
        <h2>International Conference</h2>
        <publication-item
          v-for="pub in internationalConf"
          :key="pub.id"
          :id="pub.id"
          :title="pub.title"
          :authors="pub.authors"
          :publisher="pub.publisher"
          :year="pub.year"
          :firstAuthor="pub.firstAuthor"
          :doi="pub.doi"
        ></publication-item>
      </base-card>
      <base-card v-if="activeFilters.conf_j">
        <h2>Domestic Conference</h2>
        <publication-item
          v-for="pub in domesticConf"
          :key="pub.id"
          :id="pub.id"
          :title="pub.title"
          :authors="pub.authors"
          :publisher="pub.publisher"
          :year="pub.year"
          :firstAuthor="pub.firstAuthor"
          :doi="pub.doi"
        ></publication-item>
      </base-card>
    </ul>
  </div>
</template>

<script>
import PublicationItem from "@/components/publications/PublicationItem.vue";
import PublicationFilter from "@/components/publications/PublicationsFilter.vue";
import BaseCard from '@/components/ui/BaseCard.vue';

export default {
  components: {
    PublicationItem,
    PublicationFilter,
    BaseCard,
  },
  data() {
    return {
      activeFilters: {
        paper: true,
        conf_i: true,
        conf_j: true,
      },
    };
  },
  computed: {
    paper() {
      const pubs = this.$store.getters["pubs/publications"];
      return pubs.filter((pub) => {
        if (this.activeFilters.paper && pub.type.includes("paper")) {
          return true;
        }
        return false;
      });
    },
    internationalConf() {
      const pubs = this.$store.getters["pubs/publications"];
      return pubs.filter((pub) => {
        if (this.activeFilters.conf_i && pub.type.includes("conf_i")) {
          return true;
        }
        return false;
      });
    },
    domesticConf() {
      const pubs = this.$store.getters["pubs/publications"];
      return pubs.filter((pub) => {
        if (this.activeFilters.conf_j && pub.type.includes("conf_j")) {
          return true;
        }
        return false;
      });
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>