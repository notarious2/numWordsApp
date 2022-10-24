export default [
  {
    skill: "Dynamic component rendering",
    description: `Each list item in this page is a separate component. I have used 
     v-for to render same component multiple times but with different parameters.`,
  },
  {
    skill: "Accessing method with $refs in multiple childs ",
    description: `To expand and collapse descriptions at once, I have used $refs to access a method
     in each loaded child component. It is implemented for a script setup of the Composition API.`,
  },
  {
    skill: "Composition API",
    description: `The app was initially built using Options API, but then switched to Composition API 
      with a <script setup>`,
  },
  {
    skill: "Input",
    description: `Input component uses v-for, @blur, ref. 
      Watch and regex were used to constantly add thousands place as a user types input.`,
  },
  {
    skill: "Output",
    description: `Output component uses class binding, event listeners, props and custom functions (triggered onUpdate) 
    to automatically resize output window based on resulting length of the text. Copy to clipboard 
    functionality was implemented using animations, class binding and plain JS functions.`,
  },
  {
    skill: "Vue router and transition",
    description:
      "Vue router was used for page navigation, active page indication and transition effects.",
  },
  {
    skill: "Font Awesome icons",
    description:
      "Fontawesome icons were used to build responsive social media contact buttons in the Contact Page ",
  },
];
