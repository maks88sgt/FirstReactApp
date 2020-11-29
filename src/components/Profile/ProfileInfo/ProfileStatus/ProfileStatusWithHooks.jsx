import React, {useState} from 'react';


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
        props.updateStatus(status);
    }


    return (
        <div>
            {!editMode && <div>
                <span onClick={activateEditMode}>{props.status || '_____'}</span>
            </div>}
            {
                editMode && <div>
                    <input onChange={onStatusChange}
                           onBlur={deactivateEditMode}
                           value ={status}/>

                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;

