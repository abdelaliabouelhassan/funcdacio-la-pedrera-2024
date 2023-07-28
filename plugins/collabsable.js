
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('collapsable', {
      mounted (el) {
        const collapsable_content = el.querySelectorAll('.collapsable-content');
        const collapse_btn = el.querySelector('.collapse-btn');
        const collapse_btn_content = collapse_btn.querySelector('.collapse-btn-content');
        const chevron = collapse_btn.querySelector('.collapse-btn-chevron');
        

        //initialze height at first so that the animations will be smooth on the first time
        el.classList.add('expanded')
        collapsable_content.forEach(content => {
          content.style.height = content.scrollHeight + 'px';
          content.style.height = 0;
        });
        el.classList.remove('expanded')
        
        
        collapse_btn.addEventListener('click', () => {
          el.classList.toggle('expanded');
          collapsable_content.forEach(content => {
            if (el.classList.contains('expanded')) {
              content.style.height = content.scrollHeight + 'px';
              chevron.classList.add('-rotate-180')
              collapse_btn_content.textContent =  'Menys'       
            } 
            else {
              content.style.height = 0;
              chevron.classList.remove('-rotate-180')
              collapse_btn_content.textContent =  'Més'        
            }
          });
        });

        window.addEventListener('resize', () => {
          el.classList.remove('expanded')
          collapsable_content.forEach(content => {
            content.style.height = 0;
            chevron.classList.remove('-rotate-180')
            collapse_btn_content.textContent =  'Més'        
          });
        });
      },
      getSSRProps (binding, vnode) {
        // you can provide SSR-specific props here
        return {}
      }
    })


})
