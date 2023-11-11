import React from 'react'

export function Toast (props: any): JSX.Element {
  const { isToastNegative, message } = props
  const toastColor = isToastNegative === false ? 'success' : 'error'

  return (
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToastSuccess" className={`toast align-items-center text-bg-${toastColor} border-0`} role="alert" aria-live="assertive" aria-atomic="true">
          <div className="d-flex">
            <div className="toast-body">
            ${message}
            </div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
      </div>
  )
}
