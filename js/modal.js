// 获取模态框元素
varmodal = document.getElementById('modal')

// 获取关闭按钮元素
var closeBtn = document.getElementsByClassName('close')[0]

// 当用户点击关闭按钮时，隐藏模态框
closeBtn.onclick = function () {
  closeModal()
}

// 打开模态框函数
function openModal() {
  // 添加淡入动画类
  modal.getElementsByClassName('modal-content')[0].classList.add('fade-in')
  // 显示模态框
  modal.style.display = 'block'

  // setTimeout(closeModal(), 1500)
}

// 关闭模态框函数
function closeModal() {
  // 添加淡出动画类
  modal.getElementsByClassName('modal-content')[0].classList.add('fade-out')
  // 移除震动动画类
  modal.getElementsByClassName('modal-content')[0].classList.remove('shake')
  // 延迟0.5秒后隐藏模态框
  setTimeout(function () {
    modal.style.display = 'none'
    // 移除淡入/淡出动画类
    modal.getElementsByClassName('modal-content')[0].classList.remove('fade-in')
    modal.getElementsByClassName('modal-content')[0].classList.remove('fade-out')
  }, 500) // 延迟0.5秒触发淡出动画
}
