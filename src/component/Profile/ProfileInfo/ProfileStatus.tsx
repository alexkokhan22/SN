import React from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

// const ProfileStatus = (props: ProfileStatusType) => {
//     const [editMode, setEditMode] = useState<boolean>(false)
//
//     const onDoubleClick = () => {
//         setEditMode(true)
//     }
//
//     const onBlur = () => {
//         setEditMode(false)
//     }
//     return (
//         <div>
//             {editMode
//                 ?
//                 <div>
//                     <input autoFocus={true}  onBlur={onBlur} value={props.status ? props.status : ''}/>
//                 </div>
//                 :
//                 <div>
//                     <span onDoubleClick={onDoubleClick}>{props.status}</span>
//                 </div>
//             }
//         </div>
//     )
// }

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }


    onDoubleClick = () => {
        this.setState({
            editMode: true
        })
    }

    onBlur = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>
            {this.state.editMode
                ?
                <div>
                    <input autoFocus={true} onChange={(event => {
                        this.setState({
                            status: event.currentTarget.value
                        })
                    })} onBlur={this.onBlur} value={this.state.status}/>
                </div>
                :
                <div>
                    Status: <span onDoubleClick={this.onDoubleClick}>
                    {this.props.status ? this.props.status : 'no status'}
                    </span>
                </div>
            }
        </div>;
    }
}


export default ProfileStatus;