import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';

type ProfileStatusWithHooksType = {
    status: string,
    updateStatus: (status: string) => void
}


const ProfileStatusWithHooks = (props: ProfileStatusWithHooksType) => {

    let [status, setStatus] = useState(props.status)
    let [spanOn, setSpanOn] = useState(true)

    const activateMode = () => {
        setSpanOn(false)
    }
    const deactivateEditModeAndSetStatus = () => {
        setSpanOn(true)
        props.updateStatus(status)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return <div>
        {spanOn
            ? <div>
                <span onDoubleClick={activateMode}>{status || "-------"}</span></div>
            : <div>
                <input
                    onChange={onChangeHandler}
                    onBlur={deactivateEditModeAndSetStatus}
                    autoFocus value={status}/>
            </div>
        }
    </div>
}

export default ProfileStatusWithHooks;