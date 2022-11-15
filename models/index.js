const Category = require('./Category');
const Item = require('./Item')
// const Tags = require('./Tags')

// Item.belongsTo(Category, {
//     foreignId:'id'
// })

// Category.hasMany(Item, {
//     foreignId:'id'
// })

// Item.BelongsToMany(Tags, {
//     foreignId:'id'
// })

// Tags.BelongsToMany(Item, {
//     foreignId:'id'
// })

module.exports = {Item, Category};