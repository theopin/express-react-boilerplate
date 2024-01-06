import React from 'react'

export function CreateProduct (): JSX.Element {
  return (
        <div>
            <form className="row g-3">
                <div className='row d-flex justify-content-evenly'>
                    <div className="col-md-4">
                        <div className='fw-bold'>Create New Product</div>
                    </div>
                </div>

                <div className='row g-3 d-flex justify-content-evenly'>
                    <div className="col-md-4">
                        <label htmlFor="validationDefault01" className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="validationDefault01" value="Mark" required />
                    </div>
                    <div className='col-md-4'>
                    <label htmlFor="exampleDataList" className="form-label">Datalist example</label>
                        <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
                        <datalist id="datalistOptions">
                            <option value="San Francisco" />
                            <option value="New York" />
                            <option value="Seattle" />
                            <option value="Los Angeles" />
                            <option value="Chicago" />
                        </datalist>
                    </div>
                </div>

                <div className="row g-3 alert alert-success " role="alert">
                    <div className='fw-bold mt-0'>Item Details</div>
                    <div className='row mt-3 d-flex justify-content-evenly'>
                        <div className="col-md-4">
                            <label htmlFor="validationDefault01" className="form-label">Product Brand</label>
                            <input type="text" className="form-control" id="validationDefault013" value="Volvo" disabled />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationDefault02" className="form-label">Brand Level</label>
                            <input type="text" className="form-control" id="validationDefault023" value="130" disabled />
                        </div>
                    </div>
                </div>

                <div className='row  d-flex justify-content-evenly'>
                    <div className="col-md-4">
                        <label htmlFor="validationDefault03" className="form-label">Price</label>
                        <div className="input-group">
                            <span className="input-group-text">$</span>
                            <input type="text" className="form-control" id="validationDefault03" required />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationDefault04" className="form-label">Quantity</label>
                        <input type="number" className="form-control" id="validationDefault01" min="0" max="100" required />
                    </div>
                </div>

                <div className="row g-3 d-flex justify-content-evenly">
                    <div className='col-md-10'>
                        <textarea className="form-control" placeholder="Description of Product" id="floatingTextarea" ></textarea>
                    </div>
                </div>

                <div className='row g-3 d-flex justify-content-evenly'>
                        <div className="col-md-2">
                        <button className="btn btn-danger" type="submit">Cancel Submission</button>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-success" type="submit">Create Product</button>
                        </div>
                </div>
            </form>
        </div>
  )
}
