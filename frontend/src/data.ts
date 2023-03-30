import {Food}from './app/shared/models/food';
export const sample_foods:Food[]=[
  {
    id:'6',
    name:'pizza',
    price:9,
    cookTime: '40-50',
    favorite: false,
    origins:['italy'],
    stars:4.0,
    imageUrl:'assets/pizza.jpg',
    tags:['fastfood','pizza','lunch'],
},
{
  id:'8',
  name:'burger',
  price:10,
  cookTime:'1-2',
  favorite:true,
  origins:['german'],
  stars:3.0,
  imageUrl:'assets/burger.jpg',
  tags:['fastfood','burger','dinner']
}
]
