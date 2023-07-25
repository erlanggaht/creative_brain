
export default function mouse_move_bg() {
    let btn = document.querySelector<any>('.mouse-cursor-gradient-tracking');
    btn.addEventListener('mousemove', (e :any)=> {
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      btn.style.setProperty('--x', x + 'px');
      btn.style.setProperty('--y', y + 'px');
    });
}
