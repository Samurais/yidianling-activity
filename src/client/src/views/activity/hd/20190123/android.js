// 截流
function throttle (fn, delay = 100) {
  let wait = false

  return function () {
    if (!wait) {
      fn && fn.apply(this, arguments)
      wait = true

      setTimeout(() => {
        wait = false
      }, delay)
    }
  }
}

/**
 *
 * 滑动
 * @param {HTMLElement} node
 * @param {Object} {
 *   delay = 0, // move截流时间
 *   start, // 滑动开始
 *      参数: pageX, pageY
 *   move, // 滑动中，会不断地触发，可以通过截流来限制触发频率
 *      参数:
            time, // 总时间:ms
            disX, // 总路程:px
            disY,
            addX, // 路程增量:px
            addY,
            speedX: disX / time, // 平均速度:px/ms
            speedY: disY / time
 *   end, // 滑动结束，参数同move
 * }
 */
export default function (node, {
  delay = 0,
  start,
  move,
  end
}) {
  if (!node) return

  let sTouch, eTouch, sTime
  let touch, time, disX, disY, addX, addY

  node.addEventListener('touchstart', e => {
    e.preventDefault()

    sTime = e.timeStamp
    sTouch = eTouch = e.targetTouches[0]

    start && start({
      pageX: sTouch.pageX,
      pageY: sTouch.pageY
    })
  }, false)

  node.addEventListener('touchmove', throttle(e => {
    touch = e.targetTouches[0]
    time = e.timeStamp - sTime
    disX = touch.pageX - sTouch.pageX
    disY = touch.pageY - sTouch.pageY
    addX = touch.pageX - eTouch.pageX
    addY = touch.pageY - eTouch.pageY

    move && move({
      time, // 总时间:ms
      disX, // 总路程:px
      disY,
      addX, // 路程增量:px
      addY,
      speedX: disX / time, // 平均速度:px/ms
      speedY: disY / time
    })

    // 记录上一次touch
    eTouch = touch
  }, delay), false)

  node.addEventListener('touchend', e => {
    touch = e.changedTouches[0]
    time = e.timeStamp - sTime
    disX = touch.pageX - sTouch.pageX
    disY = touch.pageY - sTouch.pageY
    addX = touch.pageX - eTouch.pageX
    addY = touch.pageY - eTouch.pageY

    end && end({
      time,
      disX,
      disY,
      addX,
      addY,
      speedX: disX / time,
      speedY: disY / time
    })
  }, false)
}
