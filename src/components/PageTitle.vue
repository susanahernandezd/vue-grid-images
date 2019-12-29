<template>
  <b-row>
    <b-col>
      <h1 class="page-title"><slot name="title"></slot></h1>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'PageTitle'
}
</script>
