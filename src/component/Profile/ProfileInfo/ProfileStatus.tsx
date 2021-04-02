import React, {useState} from "react";

type ProfileStatusType = {
    status: string | null
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
        editMode: false
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
    }


    render() {
        return <div>
            {this.state.editMode
                ?
                <div>
                    <input autoFocus={true}  onBlur={this.onBlur} value={this.props.status ? this.props.status : ''}/>
                </div>
                :
                <div>
                    <span onDoubleClick={this.onDoubleClick}>{this.props.status}</span>
                </div>
            }
        </div>;
    }
}


export default ProfileStatus;