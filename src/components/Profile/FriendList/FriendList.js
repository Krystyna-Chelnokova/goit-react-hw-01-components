import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import s from './FriendList.module.css'

export default function FriendList({friends}) {
    return (
        <ul className={s.friendList}>
       {friends.map(friend => (
           <FriendListItem
               key={friend.id}
               avatar={friend.avatar}
               name={friend.name}
               isOnline= {friend.isOnline}
           />
           ))}
   </ul>
   )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool
       }) 
    )
}