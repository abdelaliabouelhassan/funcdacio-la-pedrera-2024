
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('collapsable', {
      mounted (el, binding) {
        const collapsable_content = el.querySelectorAll('.collapsable-content');
        const collapse_btn = el.querySelector('.collapse-btn');
        const collapse_btn_content = collapse_btn.querySelector('.collapse-btn-content');
        const chevron = collapse_btn.querySelector('.collapse-btn-chevron');
        const isOpen = el.getAttribute('data-open') !== null
        
        

        //initialze height at first so that the animations will be smooth on the first time
        el.classList.add('expanded')
        collapsable_content.forEach(content => {
          content.style.height='auto'
          content.style.height = 0;
        });
        el.classList.remove('expanded')
        
        if(isOpen)
        {
          setTimeout(() => {
            expand()
          }, 1000);
        }       

        function expand() {
          el.classList.toggle('expanded');
          collapsable_content.forEach(content => {
           
            if (el.classList.contains('expanded')) {
              content.style.height = content.scrollHeight + 'px';
              if(chevron){
                chevron.classList.add('-rotate-180')
              }
              if(collapse_btn_content){
                collapse_btn_content.textContent =  'Menys'       
              }
            } 
            else {
              content.style.height = 0 + 'px';
              if(chevron){
                chevron.classList.remove('-rotate-180')
              }
              if(collapse_btn_content){
                collapse_btn_content.textContent =  'Més'        
              }
            }
          });
        }
        collapse_btn.addEventListener('click', () => {
          expand();
        });

        window.addEventListener('resize', () => {
          if(!isOpen){
            el.classList.remove('expanded')
            collapsable_content.forEach(content => {
              content.style.height = 0;
              if(chevron){
                chevron.classList.remove('-rotate-180')
              }
              if(collapse_btn_content){
                collapse_btn_content.textContent =  'Més'        
              }
            });
          }
        });
      },
      
      getSSRProps (binding, vnode) {
        // you can provide SSR-specific props here
        return {}
      }
    })


})
