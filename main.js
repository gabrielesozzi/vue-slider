var root = new Vue({
el: '#root',
  data: {
   index : 0,
   imagesArray: [
     'https://d3hne3c382ip58.cloudfront.net/resized/400x400/kyoto-tours-400X400_1565679238.JPG',
     'https://www.theceshop.com/webapp/asset-storage/images.theceshop.com/course-images/2072.jpg',
     'https://www.wheretogoformyholiday.com/images/400-compare/paris-eiffel-tower.jpg',
     'https://lisbonlisboaportugal.com/images/400alfamabaixa/cathedral-tram-lisbon.jpg'
   ]
 },
 created() {
   setInterval(() => {
     this.show_next();
   }, 3000);
 },
  methods: {

    show_next: function () {
      if (this.index < this.imagesArray.length - 1) {
       this.index++;
     } else {
       this.index = 0;
     }
    },

    show_prev: function () {
     if (this.index > 0) {
       this.index--;
     } else {
       this.index = this.imagesArray.length - 1
     }
   },

    selection: function (selezione) {
      this.index = selezione;
    },

  },
});
