export default (await import('vue')).defineComponent({
data() {
return {
items: [
{
src: '../assets/infor.jpg',
},
{
src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
},
{
src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
},
{
src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
},
],
};
},
});
