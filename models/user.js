/**
 * Created by Lance Hasson on 6/22/15.
 */
 // { attachments: [],
 //      avatar_url: null,
 //      created_at: 1434815547,
 //      group_id: '12252040',
 //      id: '143481554702889409',
 //      name: 'StatBot',
 //      sender_id: '219418',
 //      sender_type: 'bot',
 //      source_guid: '45fd1190f99201328acf22000bc10b6f',
 //      system: false,
 //      text: 'test message, please ignore.',
 //      user_id: '219418' },

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    user_id: String,
    name: String,
    words: [Word]
})

module.exports = mongoose.model('User', UserSchema);
