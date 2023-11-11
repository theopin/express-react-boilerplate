import React from 'react'
declare let bootstrap: any

export const showLiveToast = (): void => {
  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')
  if (toastTrigger !== null) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    // /console.log(toastBootstrap)

    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }
}

export function Toast (): JSX.Element {
  return (
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" className="toast align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="d-flex">
            <div className="toast-body">
              Hello, world! This is a toast message.
            </div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
      </div>
  )
}

export const SuccessToast = {
  showLiveToast,
  Toast
}
