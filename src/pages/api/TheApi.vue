<template>
  <div class="flex-wrapper">
    <h1 class="heading">Sending API requests</h1>
    <p class="app-description">
      You can send HTTP requests to api.numwords.us to receive response data in
      the <strong>JSON</strong> format
    </p>

    <p class="app-description">
      Send GET request to the URL:
      <strong
        >https://api.numwords.us/ <span style="color: blue">&lt;lang&gt;</span>/
        <span style="color: blue">&lt;number&gt;</span>
      </strong>
    </p>
    <div class="example">
      <h2 class="example-heading">Sample Request</h2>
      <p class="example-heading">Curl:</p>
      <p class="example-text request">
        <span>curl -X </span>&nbsp; 'GET' <span>\</span> <br />
        'https://api.numwords.us/api/en/2323' <span>\</span> <br />
        <span>-H &nbsp;</span> 'accept: application/json'
      </p>
      <p class="example-heading">Request URL:</p>
      <p class="example-text request">https://api.numwords.us/api/en/2323</p>

      <p class="example-heading">Response Body:</p>
      <p class="example-text">
        { "result": "two thousand, three hundred and twenty-three" }
      </p>
    </div>

    <div>
      <h3 class="table-description">List of Available Languages</h3>
      <div class="table-wraps">
        <table class="styled-table">
          <thead>
            <tr>
              <th>Abbr.</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="language in languages.slice(0, 18)" :key="language.lang">
              <td>{{ language.lang }}</td>
              <td>{{ language.lang_full }}</td>
            </tr>
          </tbody>
        </table>
        <table class="styled-table">
          <thead>
            <tr>
              <th>Abbr.</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="language in languages.slice(18, 35)"
              :key="language.lang"
            >
              <td>{{ language.lang }}</td>
              <td>{{ language.lang_full }}</td>
            </tr>
          </tbody>
        </table>
        <table class="styled-table">
          <thead>
            <tr>
              <th>Abbr.</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="language in languages.slice(35)" :key="language.lang">
              <td>{{ language.lang }}</td>
              <td>{{ language.lang_full }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import languages from "./langs.js";
console.log(languages.slice(0, 10));
</script>

<style scoped>
.flex-wrapper {
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
}

.heading {
  text-align: center;
}
.app-description {
  background-color: rgb(192, 255, 234);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  padding: 10px;
  line-height: 1.5;
  border-radius: 10px;
  margin-bottom: 0px;
}
.example {
  background-color: rgba(0, 0, 0, 0.884);
  margin: 10px;
  border-radius: 10px;
}
.example-heading {
  color: white;
  margin-left: 5px;
}

.example-text {
  color: yellowgreen;
  margin-left: 10px;
}
.request {
  color: rgb(74, 74, 245);
}
.request span {
  color: white;
}
.table-description {
  text-align: center;
  margin-bottom: 0px;
}
.table-wraps {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}
.styled-table {
  flex: 1;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.8em;
  font-family: sans-serif;
  min-width: 150px;
  max-width: 500px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
  background-color: #3075b2;
  color: #ffffff;
  text-align: left;
}
.styled-table th,
.styled-table td {
  padding: 9px 11px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #1765ae8b;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #cde3f2;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #3075b2;
}
</style>
