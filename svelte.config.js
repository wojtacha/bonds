import preprocess from "svelte-preprocess";

export default  {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};


// import sveltePreprocess from 'svelte-preprocess'

// export default {
//   // Consult https://github.com/sveltejs/svelte-preprocess
//   // for more information about preprocessors
//   preprocess: sveltePreprocess()
// }