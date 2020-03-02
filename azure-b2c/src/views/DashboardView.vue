<template>
  <v-card class="ma-5" color="rgba(255,255,255,.1)">
    <v-card-title>Dashboad</v-card-title>
    <v-card-text>
      <div class="display-1 primary--text">{{introText}}</div>
      <div>{{testText}}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "DashboardView",
  components: {},
  data: () => ({
    introText: "山椒魚は悲しんだ。",
    testText:
      "彼は彼の棲家（すみか）である岩屋の外に出てみようとしたのであるが、頭が出口につかえて外に出ることはできなかったのである。今はもはや、彼にとっては永遠の棲家である岩屋は、出入り口のところがそんなに狭かった。そして、ほの暗かった。強いて出て行こうとこころみると、彼の頭は出入り口を塞（ふさ）ぐコロップの栓となるにすぎなくて、それはまる二年の間に彼の体が発育した証拠にこそなったが、彼を狼狽（ろうばい）させ且つ悲しませるには十分であったのだ。「なんたる失策であることか！」　彼は岩屋のなかを許されるかぎり広く泳ぎまわってみようとした。人々は思いぞ屈せし場合、部屋のなかをしばしばこんな具合に歩きまわるものである。"
  })
};
</script>

<style scoped>
</style>
