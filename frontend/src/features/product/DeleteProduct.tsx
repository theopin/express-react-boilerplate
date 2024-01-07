import React, { useState } from 'react'
import { ProductApi } from '../../api/product/ProductApi'
import { ToastUtils } from '../../components/toasts/utils/ToastUtils'
import { useNavigate } from 'react-router-dom'

export function DeleteProduct ({ objectId, objectName }: { objectId: any, objectName: any }): JSX.Element {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  async function handleDelete (): Promise<void> {
    try {
      // Make the Axios request to delete the object
      const response = await ProductApi.deleteProductById(objectId)
      ToastUtils.createSuccessToast(`Deleted Product ${objectName} (${objectId}) - ${response.data.status}`)
      console.log(navigate)
      handleClose()
      navigate('/products')
      window.location.reload()
    } catch (error: any) {
      ToastUtils.createErrorToast('Error deleting object: ' + error.message)
      // Handle error as needed
    }
  }

  function handleClose (): void {
    setShowModal(false)
  }

  function handleShow (): void {
    setShowModal(true)
  }

  return (
      <div>
        <button type="button" className="btn btn-danger" onClick={handleShow}>
          Delete
        </button>

        <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex={-1} role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Confirmation</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this object {objectName} - {objectId} ?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>
                  No
                </button>
                <button type="button" className="btn btn-danger" onClick={() => { void handleDelete() }}>
                  Delete Product
                </button>
              </div>
            </div>
          </div>
        </div>

        {showModal && <div className="modal-backdrop fade show"></div>}
      </div>
  )
}
