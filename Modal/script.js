'use strict';

// 先选出所有需要的节点，并存储在变量中
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // return 的类似数组

console.log(btnsOpenModal);

const openModal = () => {
  // modal.classList.remove('hidden', 'ddd');   // 删除多个类
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (const btnOpenModal of btnsOpenModal)
  btnOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// keyboard event -> 在全局添加监听器
// keydown, keyup, keypress

document.addEventListener('keydown', e => {
  console.log(e, e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
