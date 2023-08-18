
export function beforeLoadingImage() {
    document.querySelectorAll('.lazy-loader').forEach((m)=>{
      m.classList.add('lazy_skelton')
    }) 
  }

export function afterLoadingImage() {
    document.querySelectorAll('.lazy-loader').forEach((m)=>{
      m.classList.remove('lazy_skelton')
    }) 
  }