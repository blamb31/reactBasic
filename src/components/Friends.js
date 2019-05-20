import React, {Component} from 'react'

class Friends extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            imgUrl: '',
            friends: [
                {
                    name: "Carolyn", 
                    
                    imgUrl: 'https://media.istockphoto.com/photos/mystic-charm-of-the-wolf-picture-id871199180?k=6&m=871199180&s=612x612&w=0&h=H_eikWbaOVuiQW0JWhR7xBJk5b1WQXQKZ43u_-0ueoU=' 
                },
    
                {
                    name: "Anna", 
                    
                    imgUrl: 'https://previews.123rf.com/images/byrdyak/byrdyak1503/byrdyak150300557/37194328-beautiful-wild-white-wolf-in-winter.jpg'
                },
    
                {
                    name: "Aster", 
                    
                    imgUrl: 'https://4.bp.blogspot.com/-l33eze8-4E4/V0npCCaIqaI/AAAAAAABBZU/9E0-cPYOFY8ltI1PN_Ak-TdhMdazta8vwCLcB/s1600/ScreenShot6858.jpg'
                }
            ]
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleImgChange = (event) => {
        this.setState({
            imgUrl: event.target.value
        })
    }

    handleAddClick = () => {
        let {name, imgUrl} = this.state
        this.setState({
            friends: [...this.state.friends, {name, imgUrl}] 

        })
    }



    render() {
        

        return (

            
            <div>

                <input onChange={this.handleNameChange} type='text' placeholder='Name' />
                <input onChange={this.handleImgChange} type='text' placeholder='Image URL' />
                <button onClick={this.handleAddClick}>Add</button>

                {this.state.friends.map((friend, index) => {
                    return (
                        <div key={index}>

                            <h1>{friend.name}</h1>
                            <img width="200" src={friend.imgUrl} />

                        </div>
                    )
                })}

            </div>
        )
    }
}

export default Friends