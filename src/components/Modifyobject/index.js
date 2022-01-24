import "./index.css";

const Modifyobject = () =>{
  return(
    <div className="main-container">
        <div className="API-create-div">
          <h1>Edit and Save your API Object Here</h1>
          <form className="form-horizontal" autoComplete="off">
            <div className="form-group">
              <label className="control-label">ID:</label>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Id for API-object"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label">Title</label>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Title"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label">Image Source URL</label>
              <div>
                <input
                  type=""
                  className="form-control"
                  placeholder="Enter Image Source URL"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label">Source Code Link</label>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Source Code Link"
                />
              </div>
            </div>

            <div className="form-group">
              <div>
                <input type="submit" className="btn btn-success" value="Save" />
              </div>
            </div>
          </form>
        </div>
      </div>
  )
}
export default Modifyobject;
