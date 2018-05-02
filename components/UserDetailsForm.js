const UserDetailsForm = (props) => (
    <div className="container pt-30">
        <form>
            <div className="form-group row">
                <label className="col-sm-6 col-form-label">Name</label>
                <div className="col-sm-6">
                    <input type="text" id="employeeName" value={props.details.employeeName} className="form-control" placeholder="Email" readOnly />
                </div>
            </div>

            <fieldset className="form-group">
                <div className="row">
                    <legend className="col-form-label col-sm-6">Type of Contract</legend>
                    <div className="col-sm-3">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" value="Consultant" checked={props.details.employmentType === 'Consultant'} readOnly />
                            <label className="form-check-label">Consultant</label>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" value="Permanent" checked={props.details.employmentType === 'Permanent'} readOnly />
                            <label className="form-check-label">Permanent</label>
                        </div>
                    </div>
                </div>
            </fieldset>

            <div className="form-group row">
                <label className="col-sm-6 col-form-label">Country of Residence</label>
                <div className="col-sm-6">
                    <select id="countryOfResidence" value={props.details.countryOfResidence} className="custom-select my-1 mr-sm-2" readOnly>
                        <option value="India">India</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States of America">United States of America</option>
                    </select>
                </div>
            </div>
        </form>
        <style jsx>{`
        .pt-30 {
            padding-top: 30px;
        }
        label, legend {
            font-weight: 600;
        }
        .form-check {
            padding-top: 0.5rem;
        }
        `}</style>
    </div>
);

export default UserDetailsForm;