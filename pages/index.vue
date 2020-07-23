<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div
          class="column is-one-quarter"
          v-for="(latestNews, index) in news"
          :key="index">
          <a :href="latestNews.url" target="_blank">
            <div class="card">
              <div class="card-image">
                <figure class="image is-3by2">
                  <img :src="latestNews.image" :alt="latestNews.title">
                </figure>
              </div>
              <div class="card-content">
                <div class="content title is-6">{{ latestNews.title }}</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
export default {
  async asyncData ({ app }) {
    const { news } = await app.$axios.$get(
        `https://api.currentsapi.services/v1/latest-news?apiKey=${process.env.NEWS_API_KEY}`
    );
    return { news };
  },
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}

img {
  width: 100%;
}

.card {
  height: 100%;
}
</style>