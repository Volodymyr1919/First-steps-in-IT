import React, { useContext } from "react";

export default function Toaster() {
    const {errorMessage} = useContext(EmailContext);
    return(
        <div>
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="mr-auto">Validation message</strong>
                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body">
                    {errorMessage}
                </div>
            </div>
        </div>
    );
}