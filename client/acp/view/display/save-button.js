const SaveButton = ({enabled, clickHandler}) => {
    if (enabled) {
        return (
            <button
                className="btn btn-primary"
                type="button"
                onClick={clickHandler}><i className="fa fa-floppy-o"></i> Save Changes
            </button>
        );
    }
};

export default SaveButton;
