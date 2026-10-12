export function waitForImage(image, signal) {
  if (!image || signal?.aborted) return Promise.resolve()

  return new Promise((resolve) => {
    let finished = false
    function finish() {
      if (finished) return
      finished = true
      image.removeEventListener('load', decode)
      image.removeEventListener('error', finish)
      signal?.removeEventListener('abort', finish)
      resolve()
    }
    function decode() {
      if (image.decode) image.decode().catch(() => {}).then(finish)
      else finish()
    }
    image.addEventListener('load', decode, { once: true })
    image.addEventListener('error', finish, { once: true })
    signal?.addEventListener('abort', finish, { once: true })
    if (image.complete) decode()
  })
}

export function waitForVisiblePage(signal) {
  if (!document.hidden || signal?.aborted) return Promise.resolve()

  return new Promise((resolve) => {
    function finish() {
      document.removeEventListener('visibilitychange', changed)
      signal?.removeEventListener('abort', finish)
      resolve()
    }
    function changed() {
      if (!document.hidden) finish()
    }
    document.addEventListener('visibilitychange', changed)
    signal?.addEventListener('abort', finish, { once: true })
  })
}
